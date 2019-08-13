import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

const Game = ({
    difficulty
}) => {

    const [currentBoard, setCurrentBoard] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('currentBoard').then(board => {
            setCurrentBoard(board.split(','));
        }).catch(() => {
            fetchNewGame();
        })
    }, [])


    function fetchNewGame() {
        // request to server eventually, for now just grab hardcoded data
        const newGame = require("../../data.json")['1']['starting_grid'];
        console.log("NEW GAME: ", newGame);
    }

    return (
        <View>
            <Text>Game</Text>
        </View>
    );
};

export default Game;
