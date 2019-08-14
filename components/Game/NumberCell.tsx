import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const NumberCell = ({ number, sideLength, index }) => {
        const cellStyle = {
            ...styles.cell,
            height: sideLength,
            width: sideLength,
        };


        const thirdCellStyle = {
            ...cellStyle,
            borderRightWidth: 3
            // backgroundColor: 'red'
        }
        
        const bottomThirdCellStyle = {
            ...cellStyle,
            borderTopWidth: 3,
            // backgroundColor: 'black'
        }

        const cornerCellStyle = {
            ...cellStyle,
            borderTopWidth: 3,
            borderRightWidth: 3
        }

        const row = Math.floor((index + 1) / 9);

    return (
        <View style={(index + 1) % 3 === 0 ? row % 3 === 0 ? cornerCellStyle : thirdCellStyle : row % 3 === 0 ? bottomThirdCellStyle : cellStyle}>
            <Text>{number}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        flexBasis: `${100 / 9}%`,
        borderColor: "black",
        backgroundColor: "white",
    },
});

export default NumberCell;
