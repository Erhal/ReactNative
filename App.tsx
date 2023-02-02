import { SafeAreaView, StatusBar } from "react-native";

import { store } from "./src/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedsScreen from "./src/screens/FeedsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#202124' }}>
                <NavigationContainer>
                    <Tab.Navigator screenOptions={{
                        tabBarStyle: {
                            backgroundColor: "#202124",
                            justifyContent: "flex-end",
                        },
                        tabBarLabelStyle: {
                            color: "white",
                        },
                        tabBarIndicatorStyle: {
                            backgroundColor: "blue",
                        },
                    }}>
                        <Tab.Screen name="FEEDS" component={FeedsScreen}/>
                        <Tab.Screen name="PROFILE" component={ProfileScreen}/>
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}