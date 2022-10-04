import { View, Text,ImageBackground,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { hp } from '../responsiveUi'
import styles from './style'

const ProfileImage=(props)=> {
  return (
    <ImageBackground
    source={require('../../assets/images/profileBackground/BG.png')}
    style={{height: hp(200), width: '100%'}}>
    <TouchableOpacity
      style={styles.profileBtn}
      activeOpacity={0.8}
      onPress={props.chooseProfile}>
      <Image
        source={{uri:props.imagePathUri}}
        style={{height: '100%', width: '100%', overflow: 'hidden'}}
      />
    </TouchableOpacity>
    <Text style={styles.profileText}>Nisha Pandey</Text>
    <Text style={styles.profileSubText}>V-B • EDU202249</Text>
  </ImageBackground>
  )
}
export default React.memo(ProfileImage);