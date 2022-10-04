import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {hp, wp} from '../responsiveUi';
import styles from './style';

const Card = (props) => {
  return (
    <View style={styles.mainCard}>
    <View style={styles.mainView}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={props.leftSource}
          style={styles.academicImage}
          resizeMode={'cover'}
        />
        <View style={styles.textView}>
          <Text style={styles.academytext}>{props.header}</Text>
          <Text style={styles.detailuser}>{props.subHeader}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={props.onPress} activeOpacity={0.8}>
      <Image
        source={require('../../assets/images/dropdown/dropdown.png')}
        style={[styles.dropdownIcon,{transform:props.transform}]}
        resizeMode={'cover'}
        
      />
      </TouchableOpacity>
    </View>
    </View>
  );
};
export default React.memo(Card);
