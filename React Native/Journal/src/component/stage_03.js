import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native';

const stage_03 = ({navigation}) => {
    return (
           <View style={styles.container}>
               <Text>Hello Stage three</Text>
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

export default stage_03
