import {StyleSheet} from 'react-native';
import {hp, wp} from '../responsiveUi';
const styles = StyleSheet.create({
  ViewHeader: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingVertical:hp(20),
    backgroundColor:'grey'
},
leftIcon: {
    position: 'absolute',
     left: wp(5)
    },
rightIcon: {
    position: 'absolute',
    right: wp(5)
},
  Header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: wp(26)
},
});
export default styles;
