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
    fontSize: 26,
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
    fontSize: 20,
    color: '#FFA420',
  },
  helperText: {
    fontFamily: FontStyle.MontBold,
    color: 'red',
    fontSize: 14,
    alignSelf: 'flex-start',
  },
  errorContainer: {
    width: '100%',
    alignItems: 'flex-start',
    height: 30,
  },
});

export default Styles;
