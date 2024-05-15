import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/Auth/Register/RegisterScreen';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPassWord/ForgotPasswordScreen';
import CounterScreen from '../../screens/counter/counterScreen';
import TodoScreen from '../../screens/Todo/todoScreen';
import ProductsScreen from '../../screens/Home/productsScreen';

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="counter">
      <Stack.Screen name={'counter'} component={CounterScreen} />
      <Stack.Screen name={'registration'} component={RegisterScreen} />
      <Stack.Screen name={'login'} component={LoginScreen} />
      <Stack.Screen name={'forgotPassword'} component={ForgotPasswordScreen} />
      <Stack.Screen name={'todo'} component={TodoScreen} />
      <Stack.Screen name={'products'} component={ProductsScreen} />
    </Stack.Navigator>
  );
}
