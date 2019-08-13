import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Game from "../components/Game/index";

const PlayScreen = props => {
    const difficulty = props.navigation.state.params.difficulty;
    return (
        <View style={styles.container}>
            <View
                style={{
                    height: 24,
                    backgroundColor: "white",
                    // zIndex: 2,
                }}
            >
                <StatusBar barStyle="dark-content" />
            </View>
            <Game difficulty={difficulty} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default PlayScreen;
