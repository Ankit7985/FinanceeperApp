import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {useAnimatedGestureHandler} from 'react-native-reanimated';
import {CENTER, containedInSquare, normalize, STROKE} from '../../constant.js';
import {canvas2Polar} from 'react-native-redash';

const Region = {
  START: 'START',
  END: 'END',
  MAIN: 'MAIN',
};
const Gesture = ({start, end, startPos, endPos}) => {
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({x, y}, ctx) => {
      const value = {x, y};
      if (containedInSquare(value, startPos.value, STROKE)) {
        (ctx.region = Region.START), (ctx.offset = start.value);
      } else if (containedInSquare(value, endPos.value, STROKE)) {
        (ctx.region = Region.END), (ctx.offset = end.value);
      } else {
        const {theta} = canvas2Polar(value, CENTER);
        ctx.offset = theta;
        ctx.region = Region.MAIN;
      }
    },
    onActive: ({x, y}, ctx) => {
      const value = {x, y};
      const {theta} = canvas2Polar(value, CENTER);
      const delta = theta - ctx.offset;
      ctx.offset = theta;
      if (ctx.region === Region.START) {
        start.value = normalize(start.value + delta);
      } else if (ctx.region === Region.END) {
        end.value = normalize(end.value + delta);
      } else {
        // start.value+=theta-ctx.offset;
        start.value = normalize(start.value + delta);
        end.value = normalize(end.value + delta);
      }
    },
  });
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill} />
    </PanGestureHandler>
  );
};
export default Gesture;
