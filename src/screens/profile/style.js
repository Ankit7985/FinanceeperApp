import { StyleSheet } from "react-native";
import { hp, wp } from "../../components/responsiveUi";

const styles=StyleSheet.create({
    profileBtn:{
        height: hp(96),
        width: hp(96),
        borderRadius: hp(48),
        borderWidth: hp(1),
        borderColor: 'white',
        overflow: 'hidden',
        alignSelf: 'center',
        marginVertical: hp(18),
      },
      profileText:{
        color: '#FFFFFF',
        fontSize: wp(20),
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      profileSubText:{
        color: 'lightgrey',
        fontSize: wp(16),
        fontWeight: '500',
        alignSelf: 'center',
        marginVertical: hp(5),
      },
      backBtn:{
        height: hp(24),
        width: hp(24),
        marginHorizontal: wp(10),
      },
      border:{
        borderWidth: wp(1),
        borderColor: '#E6E9EB',
        width: wp(380),
        alignSelf: 'center',
      }
})
export default styles