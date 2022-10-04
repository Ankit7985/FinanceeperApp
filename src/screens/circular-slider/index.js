import {View, Text} from 'react-native';
import React from 'react';
import {polar2Canvas, Vector} from 'react-native-redash';
import {Svg, Path, Defs, Mask} from 'react-native-svg';
import {absoluteDuration, CENTER, R, SIZE, STROKE,PI} from '../../constant.js';
import Cursor from '../cursor/index.js';
import Animated, {
  useSharedValue,
  useDerivedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import Quadrant from '../quadrant/index.js';
import Gesture from '../gesture/index.js';

const AnimatedPath = Animated.createAnimatedComponent(Path);
const CircularSlider = ({start, end}) => {
  const startPos = useDerivedValue(() =>
    polar2Canvas({theta: start.value, radius: R}, CENTER),
  );
  const endPos = useDerivedValue(() =>
    polar2Canvas({theta: end.value, radius: R}, CENTER),
  );
  const animatedProps = useAnimatedProps(() => {
    console.log("start",startPos.value.x);

    const duration=absoluteDuration(start.value,end.value)
    return {
      d: `M ${startPos.value.x} ${startPos.value.y} A ${R} ${R} 0 ${
        duration < PI ? '0' : '1'
      } 0 ${endPos.value.x} ${endPos.value.y}`,
    };
  });
  console.log(animatedProps);
  return (
    <View>
      <Svg width={SIZE} height={SIZE}>
        <Defs>
          <Mask id="mask">
            <AnimatedPath
              animatedProps={animatedProps}
              stroke="cyan"
              strokeWidth={STROKE}
            />
          </Mask>
        </Defs>
        <Quadrant start={startPos.value.x} />
        <Cursor pos={startPos} />
        <Cursor pos={endPos} />
      </Svg>
      <Gesture end={end} startPos={startPos} endPos={endPos} start={start} />
    </View>
  );
};
export default CircularSlider;
