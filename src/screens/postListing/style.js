import {StyleSheet} from 'react-native';
import { hp, wp } from '../../components/responsiveUi';

const styles = StyleSheet.create({
  submit: {
    position:'absolute',
    bottom:hp(50),
    height: hp(40),
    width: '80%',
    backgroundColor: 'pink',
    borderRadius: wp(4),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',

  },
  upload:{
    height: hp(40),
    width: wp(120),
    backgroundColor: 'pink',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(15),
  },
  textInput:{
    height: hp(50),
    borderWidth: wp(1),
    borderRadius: wp(4),
    marginVertical: hp(10),
    padding: wp(5),
  }
});
export default styles;
