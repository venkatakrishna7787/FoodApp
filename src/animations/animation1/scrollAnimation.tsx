import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Item from './Item';

const data = [
  {
    id: 1,
    title: 'Hi',
  },
  {
    id: 2,
    title: 'Hello',
  },
  {
    id: 3,
    title: 'Bye',
  },
];
const ScrollAnimation = () => {
  const x = useSharedValue(0);
  const scrollEvent = useAnimatedScrollHandler({
    onScroll: ({contentOffset: {x: value}}) => {
      x.value = value;
    },
  });
  return (
    <Animated.ScrollView
      onScroll={scrollEvent}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => (
        <Item
          x={x}
          item={item.title}
          index={index}
          id={`${item.id}-${index}`}
        />
      ))}
    </Animated.ScrollView>
  );
};
export default ScrollAnimation;
