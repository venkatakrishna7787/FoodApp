import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {slices} from '../..';
import {useNavigation} from '@react-navigation/native';
export default function CounterScreen() {
  const navigation = useNavigation();
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <View style={styles.Container}>
      <Button
        title={'Todo Screen'}
        onPress={() => {
          navigation.navigate('todo');
        }}
      />
      <Text style={styles.text}>{count}</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(slices.counter.actions.incrementThecount());
          }}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            dispatch(slices.counter.actions.decrementCount());
          }}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'white',
  },
  btn: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    marginRight: 20,
  },
});
