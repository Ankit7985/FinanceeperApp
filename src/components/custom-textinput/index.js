import {View, Text} from 'react-native';
import React from 'react';
import {hp, wp} from '../responsiveUi';
import {TextInput} from 'react-native-paper';
const CustomTextinput = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: hp(10),
      }}>
      <TextInput
        label={props.leftLabel}
        mode={'outlined'}
        style={{
          width: wp(175),
          backgroundColor: '#FFFFFF',
          height: hp(36),
        }}
        value={props.leftValue}
        editable={false}
      />

      <TextInput
        label={props.rightLabel}
        mode={'outlined'}
        style={{width: wp(175), backgroundColor: '#FFFFFF', height: hp(36)}}
        value={props.rightValue}
        editable={false}
      />
    </View>
  );
};
export default React.memo(CustomTextinput);
