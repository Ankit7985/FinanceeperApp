import {StyleSheet} from 'react-native';
import { hp, wp } from '../../components/responsiveUi';


const styles = StyleSheet.create({
  submit: {
    height: hp(40),
    width: '80%',
    backgroundColor: 'pink',
    borderRadius: wp(4),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(30),
  },
  upload:{
    height: hp(30),
    width: wp(100),
    backgroundColor: 'pink',
    borderRadius: wp(4),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(10),
  },
  textInput:{
    height: hp(50),
    borderWidth: wp(1),
    borderRadius: wp(4),
    marginVertical: hp(10),
    padding: wp(5),
  },
  mainView:{
    backgroundColor: 'pink',
    marginVertical: wp(10),
    padding: wp(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text:{
    fontSize:wp(16),
    fontWeight:'500',
    color:'black'
  },
  deletebtn:{
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(30),
    width: wp(100),
    backgroundColor: 'red',
    alignSelf: 'center',
  }
});
export default styles;