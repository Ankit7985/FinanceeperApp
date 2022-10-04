import { StyleSheet } from "react-native";
import { hp, wp } from "../responsiveUi";

const styles=StyleSheet.create({
    backBtn:{
        height: hp(24),
        width: hp(24),
        marginHorizontal: wp(10),
      },
      profileText:{
        color: '#FFFFFF',
        fontSize: wp(20),
        fontWeight: 'bold',
        alignSelf: 'center',
      },
      mainView:{
        backgroundColor: '#194880',
        height: hp(50),
        flexDirection: 'row',
      }
})
export default styles;