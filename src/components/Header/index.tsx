import { View, Text } from 'react-native';
import { FC } from 'react';

import { IHeaderProps } from './type';

import { styles } from './styles';

const Header:FC<IHeaderProps> = ({title}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    );
};

export default Header;