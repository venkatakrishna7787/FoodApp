import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Registarion"
        onPress={() => {
          navigation.navigate('registration');
        }}
      />
      <Button
        title="Forgot Password"
        onPress={() => {
          navigation.navigate('forgotPassword');
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
