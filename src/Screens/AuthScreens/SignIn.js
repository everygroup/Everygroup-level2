import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
import {signInUser} from '../../../Slice/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HelperText} from 'react-native-paper';
import Styles from '../UserScreens/Style';

const SignIn = () => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  const [redirect, setRedirect] = useState('');
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
  const {loading, error, token} = useSelector(state => {
    return state.user;
  });

  useEffect(() => {
    tokenFunc();
    setEmailError(true);
    setEmailErrorMessage(error);
  }, [token, error]);
  // console.log(error, 'signIn Error');

  const tokenFunc = async () => {
    if (token) {
      AsyncStorage.setItem('token', token);
      navigation.navigate('HomeNavigator');
    }
  };

  return (
    <SafeAreaView
      style={{backgroundColor: '#fff', flex: 1, alignItems: 'center'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '30%',
          justifyContent: 'center',
        }}>
        {emailError == true ? (
          <HelperText style={[Styles.helperText, {left: '10%'}]} type="error">
            {emailErrorMessage}
          </HelperText>
        ) : null}
        <Input
          placeholder="E-Mail"
          placeholderTextColor="#205072"
          onChangeText={text => {
            setEmail(text), setEmailError(false);
          }}
        />
        {passwordError == true ? (
          <HelperText style={[Styles.helperText, {left: '10%'}]} type="error">
            {passwordErrorMessage}
          </HelperText>
        ) : null}
        <Input
          placeholder="Passwort"
          placeholderTextColor="#205072"
          iconName={showPassword ? 'eye-with-line' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
          onChangeText={text => {
            setPassword(text), setPasswordError(false);
          }}
        />
      </View>
      <Button onPress={signInPress} buttonText="Anmelden" />
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text
          onPress={() => navigation.navigate('ForgotPassword')}
          style={{fontSize: 17, color: '#0A49E0', marginVertical: '5%'}}>
          Passwort vergessen
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignIn;
