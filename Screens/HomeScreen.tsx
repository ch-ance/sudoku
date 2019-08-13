import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = (props) => {
    const {navigate} = props.navigation;

    return (
        <View style={styles.container}>
            <Text>HomeScreen</Text>
            <Button title="Easy" onPress={() => navigate('Play', {difficulty: 'easy'})}/>
            <Button title="Medium" onPress={() => navigate('Play', {difficulty: 'medium'})}/>
            <Button title="Hard" onPress={() => navigate('Play', {difficulty: 'hard'})}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: .6,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  });
  

export default HomeScreen;
