import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Header = () => {
  return (
    <View style={styles.mainView}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => alert('welcome')}
        style={{alignItems: 'center', alignSelf: 'center'}}>
        <Image
          source={require('../../assets/images/backIcon/backIcon.png')}
          style={styles.backBtn}
          resizeMode={'cover'}
        />
      </TouchableOpacity>
      <Text style={styles.profileText}>Profile</Text>
    </View>
  );
};
export default React.memo(Header);
