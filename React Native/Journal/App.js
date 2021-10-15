import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/component/stage_one';
import StageTwo from './src/component/stage_two';
import StageThree from './src/component/stage_03';



const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="StageTwo" component={StageTwo} />
        <Stack.Screen name="StageThree" component={StageThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack