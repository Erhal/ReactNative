import { SafeAreaView, StatusBar, Text, View } from "react-native";

import { store } from "./src/store";
import { Provider } from "react-redux";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { Screens } from "./src/screens";

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
                        {Screens.map((screen) => (
                            <Tab.Screen
                                key={screen.name}
                                name={screen.name}
                                component={screen.component}
                                options={{
                                    tabBarLabel: () => (
                                        <View style={{flexDirection: "row", alignItems: "center"}}>
                                            {screen.icon}
                                            <Text style={{color: "#fff", marginLeft: 5}}>{screen.title}</Text>
                                        </View>
                                    ),
                                }}
                            />
                        ))}
                    </Tab.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </Provider>
    );
}