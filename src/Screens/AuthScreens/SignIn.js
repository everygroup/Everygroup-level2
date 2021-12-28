import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Button from '../../Common/Button';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
import {signInUser} from '../../../Slice/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = () => {
  const dispatch = useDispatch();
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
    dispatch(signInUser({email, password}));
  };
  const {loading, error, token} = useSelector(state => {
    return state.user;
  });

  useEffect(() => {
    tokenFunc();
  }, [token]);
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
        <Text>{error}</Text>
        <Input
          placeholder="E-Mail"
          placeholderTextColor="#205072"
          onChangeText={text => setEmail(text)}
        />
        <Input
          placeholder="Passwort"
          placeholderTextColor="#205072"
          iconName={showPassword ? 'eye-with-line' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button onPress={() => signInPress()} buttonText="Anmelden" />
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
