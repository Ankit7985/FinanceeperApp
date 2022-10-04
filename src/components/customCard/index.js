import {View, Text, Image, ImageBackground} from 'react-native';
import React from 'react';
import {hp, wp} from '../responsiveUi';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './style';

const Card = props => {
  return (
    <View style={{marginVertical: hp(10),backgroundColor:'lightgrey',padding:hp(10)}}>
      <ImageBackground
        source={props.imageUri}
        style={styles.imageBackground}
        resizeMode={'cover'}>
        <View style={styles.row}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{uri: props.profileImage}}
              resizeMode={'cover'}
              style={styles.profileImage}
            />
            <View style={{marginHorizontal: wp(10)}}>
              <Text style={styles.socialText}>{props.name}</Text>
              <Text style={styles.socialText}>{props.designation}</Text>
              <Text style={styles.socialText}>{props.createdAt}</Text>
              <Text style={styles.socialText}>{props.discription}</Text>
            </View>
          </View>
          <Text style={styles.socialText}>{props.postDay}</Text>
        </View>
      </ImageBackground>
      <View style={styles.socialIcon}>
        <View style={styles.isFollow}>
          <AntDesign name={'like2'} size={hp(20)} color={'black'} />
          <Text style={styles.likeText}>{props.likeCount}</Text>
        </View>
        <View style={styles.isFollow}>
          <SimpleLineIcons name={'user-following'} size={hp(20)} color={'black'} />
          <Text style={styles.likeText}>{props.isFollow}</Text>
        </View>
      </View>
    </View>
  );
};
export default React.memo(Card);
