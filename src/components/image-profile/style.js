import { StyleSheet } from "react-native";
import { hp, wp } from "../responsiveUi";

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
})
export default styles