import { FlatList, RefreshControl } from 'react-native';
import { FC, useCallback, useEffect, useState } from 'react';

import { useGetMorePicsMutation, useGetStartPicsQuery } from '../../store/api/pics';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { refreshPics } from '../../store/slices/pics';

import CardItem from '../CardItem';

import * as Haptics from 'expo-haptics';

const CardsList: FC = () => {
  const { pics, startPage } = useAppSelector((state) => state.pics);
  const { isSuccess } = useGetStartPicsQuery(startPage);

  const [ currentPage, setCurrentPage ] = useState<number>(startPage);
  const [ refreshing, setRefreshing ] = useState<boolean>(false);
  const [ loadMorePics, { isLoading: isMorePicsLoading } ] = useGetMorePicsMutation();

  const dispatch = useAppDispatch();

  const handleLoadMore = () => {
    if (currentPage <= 165) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      loadMorePics(newPage);
    }
  };

  const onRefresh = useCallback(() => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setRefreshing(true);
    dispatch(refreshPics());
  }, []);

  useEffect(() => {
    setCurrentPage(startPage);
  }, [ startPage ]);

  useEffect(() => {
    if (isSuccess && !isMorePicsLoading) {
      setRefreshing(false);
    }
  }, [ isSuccess, isMorePicsLoading ]);

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={'#fff'} />
      }
      onScroll={({ nativeEvent }) => {
        const { contentOffset, contentSize, layoutMeasurement } = nativeEvent;
        if (isSuccess && !isMorePicsLoading && (contentOffset.y >= contentSize.height - layoutMeasurement.height -100)) {
          handleLoadMore();
        }
      }}
      scrollEventThrottle={1000}
      data={pics}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <CardItem imageURL={item.download_url} author={item.author}/>
      )} />
  );
};

export default CardsList;
