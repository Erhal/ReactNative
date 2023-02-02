import React from "react";
import CardsList from "../components/CardsList";
import { StyleSheet, View } from "react-native";

const FeedsScreen = () => {
    return (
        <View style={styles.container}>
            <CardsList/>
        </View>
    );
};

export default FeedsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0A0F14",
    },
});