import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';

import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfile} from '../../../Slice/ProfileReducer';

const UpdateEmail = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [emailText, setEmailText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [emailError, setEmailError] = useState(false);

  const submit = () => {
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (emailText == '') {
      setEmailError(true);
      setErrorMessage('Bitte gib eine E-Mail ein');
    } else if (emailValidation.test(emailText) === false) {
      setEmailError(true);
      setErrorMessage('E-Mail nicht gültig');
    } else {
      dispatch(changeProfile({emailText}));
      // navigation.navigate('SentEmail');
    }
  };

  const {error, loading, value} = useSelector(state => {
    console.log(state.changeProfile, 'upate ');
    return state.changeProfile;
  });

  useEffect(() => {
    setEmailError(true);
    setErrorMessage(error.toString());
  }, [error]);

  useEffect(() => {
    if (value == 'success') {
      navigation.navigate('SentEmail');
    }
  }, [value]);

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          alignSelf: 'flex-start',
          paddingHorizontal: '2.5%',
          marginTop: '5%',
        }}
        onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{
            width: 23,
            height: 23,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: FontStyle.MontSemiBold,
          fontSize: 20,
          color: '#205072',
          width: '60%',
          textAlign: 'center',
          marginVertical: '10%',
        }}>
        Gib deine neue E-Mail ein
      </Text>
      <View style={Styles.errorContainer}>
        {emailError == true ? (
          <HelperText
            style={[Styles.helperText, {paddingLeft: '10%'}]}
            type="error">
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
      <Input
        placeholder="E-mail"
        placeholderTextColor="#205072"
        onChangeText={text => {
          setEmailText(text);
          setEmailError(false);
        }}
      />

      <View
        style={{marginVertical: '10%', width: '100%', alignItems: 'center'}}>
        <Button buttonText="E-Mail ändern" onPress={submit} />
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

export default UpdateEmail;
