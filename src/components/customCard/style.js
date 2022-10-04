import {StyleSheet} from 'react-native';
import {hp, wp} from '../responsiveUi';

const styles = StyleSheet.create({
  imageBackground: {height: hp(200), width: wp(376)},
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: wp(10),
  },
  profileImage: {height: hp(50), width: hp(50), borderRadius: hp(25)},
  likeText: {
    marginHorizontal: wp(5),
    fontSize: wp(16),
    fontWeight: '500',
    color: 'black',
  },
  isFollow: {flexDirection: 'row', alignItems: 'center'},
  socialIcon:{
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: wp(10),
    alignItems: 'center',
  },
  socialText:{
    color: 'black',
    fontSize:wp(14),
    fontWeight:'500',
    lineHeight:hp(16)
}
});
export default styles;
