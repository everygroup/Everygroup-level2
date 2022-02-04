import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {checkPassword} from '../../../Slice/CheckReducer';
import Spinner from '../../Common/Spinner';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {resetValue} from '../../../Slice/ProfileReducer';
import Icon from 'react-native-vector-icons/Feather';
const {height} = Dimensions.get('window');
const CheckPassword = ({route}) => {
  const dispatch = useDispatch();
  const {description, toNavigate} = route.params;

  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [passwordError, setPasswordError] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [passwordText, setPasswordText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submit = () => {
    if (passwordText == '') {
      setPasswordError(true);
      setErrorMessage('Passwort wird benötigt');
    } else {
      dispatch(checkPassword({passwordText}));
    }
  };

  const {loading, error, value} = useSelector(state => {
    return state.check;
  });

  useEffect(() => {
    if (value == 'success') {
      dispatch(resetValue());
      setPasswordText('');
      passwordCheck();
    }
  }, [value]);

  useEffect(() => {
    if (error != '') {
      setPasswordError(true);
      setErrorMessage(error.toString());
    }
  }, [error]);

  const passwordCheck = async () => {
    navigation.navigate(toNavigate);
  };

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '25%' : '15%',
        height: height,
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
        <Icon name="chevron-left" size={38} color="#205072" />
      </TouchableOpacity>
      <KeyboardAwareScrollView
        style={{width: '100%'}}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: FontStyle.MontSemiBold,
            fontSize: 20,
            color: '#205072',
            width: '85%',
            textAlign: 'center',
            marginVertical: '10%',
          }}>
          {description}
        </Text>
        <View style={{width: '100%', alignItems: 'center'}}>
          <View style={Styles.errorContainer}>
            {passwordError == true ? (
              <HelperText
                style={[Styles.helperText, {paddingLeft: '10%'}]}
                type="error">
                {errorMessage}
              </HelperText>
            ) : null}
          </View>
          <Input
            placeholder="Passwort"
            placeholderTextColor="#205072"
            iconName={showPassword ? 'eye' : 'eye-with-line'}
            iconPress={iconPress}
            showPassword={showPassword}
            onChangeText={text => {
              setPasswordText(text);
              setPasswordError(false);
            }}
            height={50}
            icon={'available'}
            secureTextEntry={secureTextEntry}
            imageSource={require('../../Assets/Images/closeEye.png')}
            imageSource1={require('../../Assets/Images/openEye.png')}
            borderColor={passwordError ? '#FF3434' : null}
            value={passwordText}
          />
        </View>
        <View
          style={{marginVertical: '10%', width: '100%', alignItems: 'center'}}>
          {loading ? (
            <Spinner />
          ) : (
            <Button onPress={submit} buttonText="Weiter" />
          )}

          <Text
            onPress={() => {
              setPasswordError(false), navigation.navigate('ForgotPassword');
            }}
            style={{
              fontSize: 16,
              color: '#0A49E0',
              marginVertical: '2.5%',
              fontFamily: FontStyle.MontSemiBold,
            }}>
            Passwort vergessen
          </Text>
        </View>
      </KeyboardAwareScrollView>
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

export default CheckPassword;
