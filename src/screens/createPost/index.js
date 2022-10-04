import {
  Text,
  SafeAreaView,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp,wp} from '../../components/responsiveUi';
import CustomHeader from '../../components/customHeader';
import axios from 'axios';
import Card from '../../components/customCard';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CreatePost = ({navigation}) => {
  const [postData, setPostData] = useState('');
  const [selectpostData, setSelectPostData] = useState(postData);
  const [sortBy, setSortBy] = useState({
    selectall: true,
    selectparticular: false,
  });

  console.log('selectpostData', postData);
 
  
  useEffect(() => {
    axios
      .post('http://182.76.237.238/~apitest/sme_link/api/post_listing', {
        user_id: 100,
      })
      .then(response => {
        console.log('response', response?.data);
        setPostData(response?.data?.data);
      })
      .catch(err => console.log(err));
  }, []);

  const postDataItem = ({item}) => {
    console.log('item', item);
    return (
      <Card
        imageUri={{uri: item?.images}}
        profileImage={item?.profile_image}
        name={item?.name}
        designation={item?.designation}
        createdAt={`${moment(item?.created_at).format('LL')}\n ${moment(
          item?.created_at,
        ).format('LT')}`}
        discription={item?.discription}
        postDay={item?.post_day}
        likeCount={item?.like_count}
        isFollow={item?.is_follow}
      />
    );
  };
  const onAlldata = () => {

    setSortBy({
      ...sortBy,
      selectall: true,
      selectparticular: false,
    });
    const arr =postData.length&&postData.filter((item)=>item.user_id==100
    )
    setSelectPostData(arr)
  };
  const onSelectParticular = () => {
 
    setSortBy({
      ...sortBy,
      selectall: false,
      selectparticular: true,
    });
    const arr =postData.length&&postData.filter((item)=>item.user_id==92
    )
    setSelectPostData(arr)
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{padding: hp(10)}}>
        <CustomHeader
          headerTitle={'Create Post'}
          rightOnPress={() => navigation.navigate('PostListing')}
          right
        />
        <Text>Sortby</Text>
        <View style={{flexDirection: 'row', marginTop: hp(10)}}>
          <Text> All Data</Text>
          <TouchableOpacity
            style={{
              marginHorizontal: wp(10),
              height: hp(20),
            }}
            onPress={() => onAlldata()}>
            {sortBy.selectall ? (
              <FontAwesome name={'circle'} size={20} color={'black'} />
            ) : (
              <FontAwesome name={'circle-o'} size={20} color={'black'} />
            )}
          </TouchableOpacity>
          <Text>Select Data</Text>
          <TouchableOpacity
            style={{
              marginHorizontal: wp(10),
              height: hp(20),
            }}
            onPress={onSelectParticular}>
            {sortBy.selectparticular ? (
              <FontAwesome name={'circle'} size={20} color={'black'} />
            ) : (
              <FontAwesome name={'circle-o'} size={20} color={'black'} />
            )}
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: hp(15)}}>
          <FlatList
            data={selectpostData}
            renderItem={postDataItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default CreatePost;
