import { ActivityIndicator, Image, Text, View } from 'react-native';
import { FC, useEffect, useState } from 'react';

import { ICardProps } from './type';

import { styles } from './styles';

const CardItem: FC<ICardProps> = ({ imageURL, author }) => {
  const [ isLoading, setIsLoading ] = useState<boolean>(true);

  useEffect(() => {
    const imageLoader = Image.prefetch(imageURL);
    imageLoader.then(() => setIsLoading(false));
  }, [ imageURL ]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={'large'} style={styles.image} color={'#fff'} />
      ) : (
        <Image
          style={styles.image}
          source={{ uri: imageURL }}
        />
      )}
      <View style={styles.text_container}>
        <Text style={styles.text}>{author}</Text>
      </View>
    </View>
  );
};

export default CardItem;