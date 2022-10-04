import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {TextInput} from 'react-native-paper';
import {hp, wp} from '../../components/responsiveUi';
import {launchImageLibrary} from 'react-native-image-picker';
import Card from '../../components/card';
import styles from './style';
import CustomTextinput from '../../components/custom-textinput';
import Header from '../../components/header';
import ProfileImage from '../../components/image-profile';

const Profile = props => {
  const [imagePath, setImagePath] = useState('');
  const [show, setShow] = useState(false);

  const chooseFile = useCallback(
    postType => {
      launchImageLibrary(
        {
          mediaType: postType === 2 ? 'video' : 'photo',
        },
        async (response: any) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          } else {
            postType == 2 ? null : setImagePath(...response?.assets);
          }
        },
      );
    },
    [imagePath],
  );
  return (
    <>
      <Header />
      <SafeAreaView style={{flex: 1, backgroundColor: '#F9FAFE'}}>
        <ProfileImage
          chooseProfile={() => chooseFile(1)}
          imagePathUri={
            imagePath.uri ||
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpwU899K2jtN4dP5QqUELu81QgYL69QGE6LU7JIzpv&s'
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingHorizontal: wp(18)}}>
            <Card
              header={'Academic Details'}
              subHeader={'Details of the accounts user'}
              leftSource={require('../../assets/images/Academic/academic.png')}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut,
                );
                setShow(!show);
              }}
              transform={[{rotate: show ? '180deg' : '0deg'}]}
            />
            {show && (
              <>
                <View style={styles.border} />
                <View
                  style={{backgroundColor: '#FFFFFF', marginVertical: hp(5)}}>
                  <CustomTextinput
                    leftLabel={'Class Teacher'}
                    rightLabel={'Date Of Admission'}
                    leftValue={'Rani Mukherjee'}
                    rightValue={'13 July, 2019'}
                  />
                  <CustomTextinput
                    leftLabel={'Mobile Number'}
                    rightLabel={'Date Of Birth'}
                    leftValue={'9875 482 418'}
                    rightValue={'17 December, 2011'}
                  />
                  <CustomTextinput
                    leftLabel={'House Section'}
                    rightLabel={'Gender'}
                    leftValue={'B'}
                    rightValue={'Female'}
                  />
                  <CustomTextinput
                    leftLabel={'Religion'}
                    rightLabel={'Blood Group'}
                    leftValue={'Hindu'}
                    rightValue={'O+'}
                  />

                  <TextInput
                    label={'Nationality'}
                    mode={'outlined'}
                    style={{
                      width: wp(175),
                      backgroundColor: '#FFFFFF',
                      height: hp(36),
                      marginTop: 10,
                    }}
                    value={'Indian'}
                    editable={false}
                  />
                </View>
              </>
            )}
            <Card
              header={'Parents Details'}
              subHeader={"Information about children's guardians"}
              leftSource={require('../../assets/images/detail/detail.png')}
            />
            <Card
              header={'Address Information'}
              subHeader={'You can request for add new address'}
              leftSource={require('../../assets/images/address/address.png')}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
export default Profile;
