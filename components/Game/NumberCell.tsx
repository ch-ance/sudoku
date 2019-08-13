import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const NumberCell = ({
    number,
    sideLength
}) => {


    const cellStyle = {
        ...styles.cell,
        height: sideLength,
        width: sideLength
    }

    useEffect(() => {

    }, [])


    return (
        <View style={cellStyle}>
            <Text>{number}</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    cell: {
        borderWidth: 1,
        flexBasis: `${100 / 9}%`,
        borderColor: 'gray',
        backgroundColor: 'red'
    }
})

export default NumberCell;
