import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { store } from "./src/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import FeedsScreen from "./src/screens/FeedsScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <StatusBar barStyle="light-content"/>
            <SafeAreaView style={{flex: 1, backgroundColor: "#202124"}}>
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
                        <Tab.Screen
                            name="FEEDS"
                            component={FeedsScreen}
                            options={{
                                tabBarLabel: () => (
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <AntDesign name="home" size={24} color="#fff"/>
                                        <Text style={{color: "#fff", marginLeft: 5}}>Home</Text>
                                    </View>
                                ),
                            }}
                        />
                        <Tab.Screen
                            name="PROFILE"
                            component={ProfileScreen}
                            options={{
                                tabBarLabel: () => (
                                    <View style={{flexDirection: "row", alignItems: "center"}}>
                                        <MaterialIcons name="account-circle" size={24} color="#fff" />
                                        <Text style={{color: "#fff", marginLeft: 5}}>Home</Text>
                                    </View>
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}