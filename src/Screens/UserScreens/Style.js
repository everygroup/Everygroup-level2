import {StyleSheet} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Styles = StyleSheet.create({
  mainContainer: {
    paddingTop: '9%',
    height: '100%',
    backgroundColor: '#fff',
  },
  headingText: {
    fontFamily: FontStyle.MontBold,
    fontSize: 24,
    color: '#205072',
    textAlign: 'center',
    marginVertical: '5%',
  },
  textContainer: {
    height: 60,
    width: '100%',
    paddingHorizontal: '5%',
  },
  textStyle: {
    fontFamily: FontStyle.MontSemiBold,
    fontSize: 18,
    color: '#FFA420',
  },
});

export default Styles;
