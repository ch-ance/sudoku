import React, { useState, useEffect } from "react";
import { StyleSheet, Text, Dimensions, View, AsyncStorage } from "react-native";
import NumberCell from "./NumberCell";

const Game = ({ difficulty }) => {
    const [currentBoard, setCurrentBoard] = useState([]);

    const sideLength = Math.round(Dimensions.get("window").width) / 9;

    useEffect(() => {
        fetchNewGame();
    }, []);

    async function fetchNewGame() {
        // request to server eventually, for now just grab hardcoded data
        const newGame = require("../../data.json")["1"]["starting_grid"];
        try {
            await AsyncStorage.setItem("currentBoard", JSON.stringify(newGame));
        } catch (error) {
            console.error(error)
        }
        setCurrentBoard(newGame);
        console.log(newGame);
    }

    console.log("SIDE LENGTH: ", sideLength);

    return (
        <View style={styles.container}>
            {currentBoard !== null ? (
                currentBoard.map((cell, index) => {
                    return (
                        <NumberCell
                            number={cell}
                            sideLength={sideLength}
                            key={index}
                        />
                    );
                })
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
    }
})


export default Game;
