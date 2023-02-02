import React from "react";

import FeedsScreen from "./FeedsScreen";
import ProfileScreen from "./ProfileScreen";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";

interface IScreen {
    name: string;
    component: React.FC;
    icon: React.ReactElement;
    title: string;
}

export const Screens: IScreen[] = [
    {
        name: "FeedsScreen",
        component: FeedsScreen,
        icon: <AntDesign name="home" size={20} color="#fff"/>,
        title: "Feeds",
    },
    {
        name: "ProfileScreen",
        component: ProfileScreen,
        icon: <MaterialIcons name="account-circle" size={20} color="#fff"/>,
        title: "Profile",
    },
];