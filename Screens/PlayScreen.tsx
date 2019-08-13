import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PlayScreen = (props) => {

    const difficulty = props.navigation.state.params.difficulty;
    return (
        <View>
            <Text>PlayScreen {difficulty}</Text>
        </View>
    );
};

export default PlayScreen;
