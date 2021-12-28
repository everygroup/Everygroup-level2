import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import SwitchToggle from 'react-native-switch-toggle';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import ErrorText from '../../Common/ErrorText';
import {registerUser} from '../../../Slice/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = () => {
  const dispatch = useDispatch();
  const [promotional, setPromotional] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [userName, setUserName] = useState('');
  const [userNameError, setUserNameError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const iconPress = () => {
    setShowPassword(!showPassword), setSecureTextEntry(!secureTextEntry);
  };

  const submit = () => {
    let emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (email == '') {
      setEmailError(true);
      setEmailErrorMessage('E-Mail wird benötigt');
    } else if (emailValidation.test(email) === false) {
      setEmailError(true);
      setEmailErrorMessage('E-Mail nicht gültig');
    } else if (userName == '') {
      setUserNameError(true);
      setUsernameErrorMessage('Nutzername wird benötigt');
    } else if (userName.length > 10) {
      setUserNameError(true);
      setUsernameErrorMessage('Maximal 10 Zeichen');
    } else if (password == '') {
      setPasswordError(true);
      setPasswordErrorMessage('Passwort wird benötigt');
    } else if (password.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage('Passwort muss mindestens 6 Zeichen haben');
    } else {
      dispatch(registerUser({email, userName, password, promotional}));
      // navigation.navigate('VerifyMail');
    }
  };

  const {loading, error, token} = useSelector(state => {
    return state.user;
  });

  useEffect(() => {
    setEmailError(true);

    setEmailErrorMessage(error.email ? error.email[0] : []);
  }, [error.email]);

  useEffect(() => {
    setUserNameError(true);
    setUsernameErrorMessage(error.username ? error.username[0] : []);
  }, [error.username]);
  console.log(error, 'error signup');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          height: '40%',
          justifyContent: 'center',
        }}>
        <ErrorText error={emailError} errorMessage={emailErrorMessage} />
        <Input
          placeholder="E-Mail"
          placeholderTextColor="#205072"
          onChangeText={text => {
            setEmail(text);
            setEmailError(false);
          }}
        />
        <ErrorText error={userNameError} errorMessage={usernameErrorMessage} />
        <Input
          placeholder="Nutzername"
          placeholderTextColor="#205072"
          onChangeText={text => {
            setUserName(text);
            setUserNameError(false);
          }}
        />
        <ErrorText error={passwordError} errorMessage={passwordErrorMessage} />
        <Input
          placeholder="Passwort"
          iconName={showPassword ? 'eye-with-line' : 'eye'}
          showPassword={showPassword}
          iconPress={iconPress}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#205072"
          onChangeText={text => {
            setPassword(text);
            setPasswordError(false);
          }}
        />
        <View style={{width: '78%', flexDirection: 'row'}}>
          <Text
            style={{
              textAlign: 'left',
              fontSize: 12,
              color: '#205072',
              width: '85%',
              fontFamily: FontStyle.MontMedium,
            }}>
            Ich möchte regelmäßig Mails erhalten mit Produktinfos, Tipps und
            Gewinnspielen von everygroup. Eine Abmeldung kann jederzeit
            vorgenommen werden.
          </Text>
          <SwitchToggle
            switchOn={promotional}
            onPress={() => setPromotional(!promotional)}
            circleColorOff="#fff"
            circleColorOn="#fff"
            backgroundColorOff="#BECCD6"
            backgroundColorOn="#205072"
            containerStyle={styles.switchContainer}
            circleStyle={styles.switchCircle}
          />
        </View>
      </View>
      <View style={{alignItems: 'center'}}>
        <Button onPress={submit} buttonText="Registrieren" />
      </View>
      <View style={{width: '72%', alignSelf: 'center', flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 12,
            color: '#205072',
            marginVertical: '5%',
            fontFamily: FontStyle.MontMedium,
          }}>
          Es gelten unsere
        </Text>
        <Text style={{fontSize: 12, color: '#3D60FF', marginVertical: '5%'}}>
          {' '}
          AGB.
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          paddingHorizontal: '2.5%',
        }}>
        <Text style={{color: '#205072', fontFamily: FontStyle.MontMedium}}>
          In unserer{' '}
          <Text style={{color: '#3D60FF'}}> Datenschutzerklärung</Text> findest
          du Informationen über die Verarbeitung deiner Daten.
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 29,
    height: 13,
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 5,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.65,
    elevation: 2,
  },
});

export default SignUp;
