import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ForgotPasswordScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => {
          navigation.navigate('registration');
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          navigation.navigate('login');
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
