import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
import {signInUser} from '../../../Slice/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorageLib from '@react-native-async-storage/async-storage';
import {HelperText} from 'react-native-paper';
import Styles from '../UserScreens/Style';
import Spinner from '../../Common/Spinner';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {resetForgotResponse, checkInternet} from '../../../Slice/AuthReducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const {height} = Dimensions.get('window');
const SignIn = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);

  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };
  const navigation = useNavigation();

  const signInPress = () => {
    if (email == '') {
      setEmailError(true);
      setEmailErrorMessage('Dieses feld darf nicht leer sein');
    } else if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Dieses feld darf nicht leer sein');
    } else {
      dispatch(signInUser({email, password}));
    }
  };
  const {loading, error, token, internet} = useSelector(state => {
    return state.user;
  });

  useEffect(() => {
    tokenFunc();
    if (error != '') {
      setEmailError(true);
      setEmailErrorMessage(error);
    }
  }, [error, token]);

  const tokenFunc = async () => {
    const successToken = await AsyncStorageLib.getItem('token');
    if (successToken || token) {
      setEmailError(false);
      setPasswordError(false);
      navigation.navigate('HomeNavigator');
    }
  };

  const forgotPasswordPage = async () => {
    setEmailError(false);
    setPassword(false);
    await dispatch(resetForgotResponse());
    navigation.navigate('ForgotPassword');
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            height: height * 0.3,
          }}>
          <View style={Styles.errorContainer}>
            {emailError == true ? (
              <HelperText
                style={[Styles.helperText, {left: '10%'}]}
                type="error">
                {emailErrorMessage}
              </HelperText>
            ) : null}
          </View>
          <Input
            placeholder="E-Mail"
            placeholderTextColor="#205072"
            onChangeText={text => {
              setEmail(text), setEmailError(false);
            }}
            height={50}
            borderColor={emailError ? '#FF2020' : null}
          />
          <View style={Styles.errorContainer}>
            {passwordError == true ? (
              <HelperText
                style={[Styles.helperText, {left: '10%'}]}
                type="error">
                {passwordErrorMessage}
              </HelperText>
            ) : null}
          </View>
          <Input
            placeholder="Passwort"
            placeholderTextColor="#205072"
            icon={'available'}
            imageSource={require('../../Assets/Images/closeEye.png')}
            imageSource1={require('../../Assets/Images/openEye.png')}
            iconPress={() => setShowPassword(!showPassword)}
            showPassword={showPassword}
            iconPress={iconPress}
            secureTextEntry={secureTextEntry}
            onChangeText={text => {
              setPassword(text), setPasswordError(false);
            }}
            height={50}
            borderColor={passwordError ? '#FF2020' : null}
          />
        </View>
        {loading ? (
          <Spinner />
        ) : (
          <Button onPress={signInPress} buttonText="Anmelden" />
        )}

        <Text
          onPress={forgotPasswordPage}
          style={{
            fontSize: 17,
            color: '#0A49E0',
            marginVertical: '5%',
            fontFamily: FontStyle.MontSemiBold,
          }}>
          Passwort vergessen
        </Text>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
