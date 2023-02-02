import { View, StyleSheet, StatusBar } from 'react-native';
import { store } from './src/store';
import { Provider } from "react-redux";
import CardsList from "./src/components/CardsList";
import Header from './src/components/Header';

export default function App() {
    return (
        <Provider store={store}>
          <StatusBar barStyle="light-content" />
            <View style={styles.container}>
              <Header title={'FEEDS'} />
                <CardsList/>
            </View>
        </Provider>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A0F14",
    },
});