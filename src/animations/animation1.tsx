import React, {useEffect} from 'react';
import {View, Text, Button, Dimensions, StyleSheet} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {PanGesture} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/panGesture';

import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const size = 100;
const Animation = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({x: 0, y: 0});

  const tap = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(e => {
      translateX.value = e.translationX + context.value.x;
      translateY.value = e.translationY + context.value.y;
    })
    .onFinalize(() => {
      const distance = Math.sqrt(translateX.value ** 2 + translateY.value ** 2);
      if (distance < size * 2) {
        translateX.value = withSpring(0);
        translateY.value = withSpring(0);
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: translateX.value},
        {translateY: translateY.value},
      ],
    };
  }, []);
  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <View style={[styles.outerCircle]}>
        <GestureDetector gesture={tap}>
          <Animated.View style={[styles.circleContainer, rStyle]} />
        </GestureDetector>
      </View>
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: size * 3,
    height: size * 3,
    borderRadius: size * 3,
    borderWidth: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleContainer: {
    width: size,
    height: size,
    backgroundColor: 'red',
  },
});

export default Animation;
