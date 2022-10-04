import {View, Text, Container} from 'react-native';
import React from 'react';
import CircularSlider from '../circular-slider';
import {useSharedValue} from 'react-native-reanimated';

const BedTime = () => {
  const start = useSharedValue(0);
  const end = useSharedValue(1.5 * Math.PI);
  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          marginVertical: 20,
          fontSize: 26,
          fontWeight: '600',
        }}>
        Wake up time
      </Text>

      <CircularSlider start={start} end={end} />

      <Text>BedTime</Text>
    </View>
  );
};
export default BedTime;
