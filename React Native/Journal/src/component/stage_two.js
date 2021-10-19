import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const stage_two = ({navigation}) => {
    return (
       <View style={styles.container}>
               <Text>Hello Stage Two</Text>
           </View> 
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default stage_two


