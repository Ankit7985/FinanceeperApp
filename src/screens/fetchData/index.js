import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {getPageList} from '../../action';
import CustomHeader from '../../components/customHeader';
import {hp, wp} from '../../components/responsiveUi';


const EmployeeDetails = props => {

  useEffect(() => {
    props.dispatch(getPageList());
  }, []);
  console.log(props.stateUser);

  const navigation = useNavigation();
  const renderItem = ({item}) => {
    console.log('item------>', item);
    return (
      <View>
        <Image
          source={{uri: item.image}}
          style={{height: hp(50), width: hp(50)}}
          resizeMode={'cover'}
        />

        <Text style={styles.text}>
          {item.description}
          {'\n'}
          {item.price}
          {'\n'}
          {item.rating.rate}
          {'\n'}
          {item.rating.count}
          {'\n'}
          {item.category}
        </Text>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: wp(20)}}>
        <CustomHeader
          headerTitle={'Fetch Post'}
          leftOnPress={() => navigation.goBack()}
          right
          rightOnPress={()=>navigation.navigate('Profile')}
          left
        />
        {props?.stateUser?.isLoading ? (
          <ActivityIndicator size={'large'} color={'red'} />
        ) : (
          <FlatList
            data={props.stateUser.users}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
          />
        )}

      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  button: {
    height: hp(50),
    width: '80%',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: hp(10),
    borderRadius: wp(10),
  },
  text: {
    fontSize: wp(16),
    fontWeight: '400',
    color: 'black',
  },
});

const mapStateToProps = state => {
  console.log('state', state);
  return {
    stateUser: state.pageList,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);
