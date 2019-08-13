import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = (props) => {
    const {navigate} = props.navigation;

    return (
        <View>
            <Text>HomeScreen</Text>
            <Button title="Go to game" onPress={() => navigate('Play')}/>
        </View>
    );
};

export default HomeScreen;
