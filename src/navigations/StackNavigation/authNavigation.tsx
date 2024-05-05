import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegisterScreen from '../../screens/Auth/Register/RegisterScreen';
import LoginScreen from '../../screens/Auth/Login/LoginScreen';
import ForgotPasswordScreen from '../../screens/Auth/ForgotPassWord/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();
export default function AuthNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'registration'} component={RegisterScreen} />
      <Stack.Screen name={'login'} component={LoginScreen} />
      <Stack.Screen name={'forgotPassword'} component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({

});
