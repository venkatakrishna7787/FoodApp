import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const {width, height} = Dimensions.get('window');
const square = width * 0.6;

interface item {
  x: SharedValue<number>;
  item: string;
  index: number;
  id: string;
}
export default function Item({x, item, index, id}: item) {
  const inputrange = [(index - 1) * width, index * width, (index + 1) * width];
  const rCircle = useAnimatedStyle(() => {
    const borderRadius = interpolate(x.value, inputrange, [0, square / 2, 0]);
    const scale = interpolate(x.value, inputrange, [0.5, 1, 0.5]);
    return {
      borderRadius,
      transform: [{scale}],
    };
  }, []);
  return (
    <View
      key={id}
      style={[
        styles.itemContainer,
        {backgroundColor: `rgba(255,0,56,0.${index + 4})`},
      ]}>
      <Animated.View style={[styles.square, rCircle]}>
        <Text style={styles.title}>{item}</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: '600',
    color: 'white',
  },
  square: {
    width: square,
    height: square,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
});
