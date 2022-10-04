import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  SectionList,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import CustomHeader from '../../components/customHeader';
import {connect} from 'react-redux';
import {hp, wp} from '../../components/responsiveUi';
import {useNavigation} from '@react-navigation/native';
import {getPageList} from '../../action';

const Contact = props => {
  useEffect(() => {
    props.dispatch(getPageList());
  }, []);

  const navigation = useNavigation();
  const renderItem = ({item}) => {
    console.log('item------>', item);
    return (
      <View style={styles.mainView}>
        <Image
          source={{uri: item.image}}
          style={styles.Image}
          resizeMode={'contain'}
        />

        <Text style={styles.text}>Price: {item.price} Rs</Text>
        <Text style={styles.description} numberOfLines={4} ellipsizeMode="tail">
          {item.description}
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <CustomHeader
        headerTitle={'Contact'}
      
      />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          padding: wp(10),
        }}>
        {props?.stateUser?.isLoading ? (
          <ActivityIndicator size={'large'} color={'red'} />
        ) : (
          <FlatList
            data={props.stateUser.users}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            //keyExtractor={(_, index) => index.toString()}
            keyExtractor={(_, index) => index.toString()}
            // keyExtractor={(item, index) => item.id }
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};
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
export default connect(mapStateToProps, mapDispatchToProps)(Contact);

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
    fontWeight: '800',
    color: 'black',
    marginVertical: hp(5),
    alignSelf: 'center',
  },
  description: {
    fontSize: wp(16),
    fontWeight: '500',
    color: 'black',
    marginVertical: hp(5),
    alignSelf: 'center',
  },
  Image: {
    height: hp(210),
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  mainView: {width: '50%', paddingHorizontal: wp(15), alignItems: 'center'},
});
