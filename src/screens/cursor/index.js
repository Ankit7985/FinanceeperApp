import {View, Text} from 'react-native';
import React from 'react';
import {Circle} from 'react-native-svg';
import {STROKE} from '../../constant.js';
import {Vector} from 'react-native-redash';
import Animated, {
    useSharedValue,
    useAnimatedProps,
  } from 'react-native-reanimated';
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const Cursor = ({pos}:Animated.SharedValue<Vector>) => {
  const animatedProps = useAnimatedProps(() => ({
    cx: pos.value.x,
    cy: pos.value.y,
  }));
  return (
    <AnimatedCircle
      r={STROKE / 2}
      animatedProps={animatedProps}
      fill={'blue'}
    />
  );
};
export default Cursor;
