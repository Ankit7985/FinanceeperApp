import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/customHeader';
import {hp} from '../../components/responsiveUi';
import {launchImageLibrary} from 'react-native-image-picker';
import Video from 'react-native-video';
import styles from './style';
import axios from 'axios';
import notifee from '@notifee/react-native';

const PostListing = ({navigation}) => {
  const [name, setName] = useState('');
  const [postType, setPostType] = useState(1);
  const [filePath, setFilePath] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const [description, setDescription] = useState('');
  console.log(
    'name,filePath,videoFile,description',
    name,
    filePath,
    videoFile,
    description,
  );
  const chooseFile = postType => {
    launchImageLibrary(
      {
        maxHeight: 1080,
        maxWidth: 1080,
        selectionLimit: 0,
        mediaType: postType === 2 ? 'video' : 'photo',
        includeBase64: true,
      },
      async (response: any) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          postType == 2
            ? setVideoFile([...videoFile, ...response?.assets])
            : setFilePath([...filePath, ...response?.assets]);
        }
      },
    );
  };
  const onSubmit = () => {
    const nameRegex = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;
    if (nameRegex.test(name) && description && filePath && videoFile) {
      let paload = {
        name: name,
        user_id: 92,
        post_type: 1,
        discription: description,
        images: filePath,
        videos: videoFile,
        video_thumbnail: null,
      };
      axios
        .post('http://182.76.237.238/~apitest/sme_link/api/create_post', paload)
        .then(response => console.log(response))
        .catch(error => console.log(error));
      DisplayNotification();
    } else {
      alert('Please select all section in correct format of name');
    }
  };

  async function DisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Successfully ',
      body: 'your data are Succesfully saved',
      android: {
        channelId,
        // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: hp(20)}}>
        <CustomHeader
          headerTitle={'Post Listing'}
          leftOnPress={() => navigation.goBack()}
          right
          rightOnPress={() => navigation.navigate("FormData")}
          left
        />
        <TextInput
          style={[styles.textInput, {marginTop: hp(50)}]}
          placeholder="Enter your full name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          placeholder={'Enter the description'}
          style={styles.textInput}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.upload}
            activeOpacity={0.8}
            onPress={() => chooseFile(1)}>
            <Text>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.upload}
            activeOpacity={0.8}
            onPress={() => chooseFile(2)}>
            <Text>Upload Video</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        style={styles.submit}
        onPress={() => onSubmit()}
        activeOpacity={0.8}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default PostListing;
