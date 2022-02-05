import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
  AppState,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const VerifyMail = () => {
  const navigation = useNavigation();
  // const appState = useRef(AppState.currentState);

  // const [appStateVisible, setAppStateVisible] = useState(appState.current);
  // useEffect(() => {
  //   AppState.addEventListener('change', handleChange);

  //   return () => {
  //     AppState.removeEventListener('change', handleChange);
  //   };
  // }, []);
  // const handleChange = async newState => {
  //   if (newState === 'active') {
  //     console.log('ready', initialUrl);
  //   }
  // };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{alignItems: 'center', height: '70%'}}>
        <Image
          source={require('../../Assets/Images/newLetter.png')}
          style={{
            width: 220,
            height: 220,
            resizeMode: 'contain',
            marginTop: '10%',
          }}
        />
        <Text
          style={{
            fontSize: 19,
            color: '#205072',
            textAlign: 'center',
            fontFamily: FontStyle.MontBold,
            width: '60%',
            marginTop: '15%',
          }}>
          {`Wir haben dir eine\n E-Mail geschickt.\nBitte bestätige sie und dann`}{' '}
          geht`s los!
        </Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => navigation.navigate('ConfirmationScreen')}
        style={{alignItems: 'center', height: '15%'}}>
        <Icon name={'long-arrow-alt-right'} size={60} color="#FF3333" />
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default VerifyMail;
