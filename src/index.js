import React from "react";
import { View, StyleSheet,Text } from "react-native";


function Viewer (){

    return (
        <View style={styles.testeo}>
            <Text>Hola</Text>
        </View>
    )

}



const styles = StyleSheet.create({
    testeo: {
      width: '100%' ,
      backgroundColor: 'blue',
    },
  });


export default Viewer
  