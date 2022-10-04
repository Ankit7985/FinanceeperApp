import {
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {ImageArr} from './array';
import CustomHeader from '../../components/customHeader';
import { hp,wp } from '../../components/responsiveUi';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const Home = () => {
  const [activeDot, setActiveDot] = useState({
    dot: 0,
  });

  const onChange = ({nativeEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeDot.dot) {
      setActiveDot({...activeDot, dot: slide});
    }
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
      resizeMode='cover'
        style={{height: '100%', width}}
        source={{
          uri: 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000',
        }}>
        <View>
          <CustomHeader headerTitle={'Home'} />

          <ScrollView
            horizontal
            pagingEnabled
            onScroll={onChange}
            style={{height, width}}
            showsHorizontalScrollIndicator={false}>
            {ImageArr.map((item, index) => (
              <Image source={{uri: item}} style={styles.image} />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {ImageArr.map((i, k) =>
              k == activeDot.dot ? (
                <Text key={k} style={styles.pagingText}>
                  ⚫
                </Text>
              ) : (
                <Text style={styles.pagingText} key={k}>
                  ⚪
                </Text>
              ),
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {marginTop: hp(50), width, height},
  scroll: {width, height},
  image: {height, width, resizeMode: 'cover'},
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  pagingText: {color: 'red', margin: 3},
});
