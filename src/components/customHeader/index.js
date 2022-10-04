import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {wp, hp} from '../responsiveUi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

const CustomHeader = props => {
  return (
    <View style={styles.ViewHeader}>
      {props.left && (
        <TouchableOpacity
          style={styles.leftIcon}
          activeOpacity={0.8}
          onPress={props.leftOnPress}>
          <AntDesign name={'arrowleft'} size={hp(30)} color={'black'} />
        </TouchableOpacity>
      )}
      <Text style={styles.Header}>{props.headerTitle}</Text>
      {props.right && (
        <TouchableOpacity
          style={styles.rightIcon}
          activeOpacity={0.8}
          onPress={props.rightOnPress}>
          <AntDesign name={'arrowright'} size={hp(30)} color={'black'} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default React.memo(CustomHeader);
