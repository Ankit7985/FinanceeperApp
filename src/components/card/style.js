import {StyleSheet} from 'react-native';
import {hp, wp} from '../responsiveUi';

const styles = StyleSheet.create({
  mainCard: {
    height: hp(86),
    width: wp(415),
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(18),
    marginVertical: hp(5),
  },
  mainView: {flexDirection: 'row', justifyContent: 'space-between'},
  academicImage: {height: hp(48), width: hp(48)},
  textView: {alignSelf: 'center', paddingHorizontal: wp(10)},
  academytext: {
    color: '#0F2641',
    fontSize: wp(18),
    fontWeight: 'bold',
    lineHeight: hp(24),
  },
  detailuser: {
    color: '#8C8896',
    fontSize: wp(14),
    fontWeight: '300',
    marginVertical: hp(2),
    lineHeight: hp(19),
  },
  dropdownIcon: {
    height: hp(24),
    width: hp(24),
    alignSelf: 'center',
    marginTop: 12,
  },
});
export default styles;
