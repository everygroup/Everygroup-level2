import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {forgotPassword} from '../../../Slice/AuthReducer';
import {useDispatch, useSelector} from 'react-redux';
import {HelperText} from 'react-native-paper';
import Styles from '../UserScreens/Style';
import Spinner from '../../Common/Spinner';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const {height} = Dimensions.get('window');
const ForgotPassword = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('');
  const navigation = useNavigation();

  const {loading, error, forgotResponse} = useSelector(state => {
    return state.user;
  });

  const submit = () => {
    if (email == '') {
      setEmailError(true);
      setEmailErrorMessage('Dieses feld darf nicht leer sein');
    } else {
      dispatch(forgotPassword({email}));
    }
  };

  useEffect(() => {
    setEmailError(true);
    setEmailErrorMessage(error);
  }, [error]);

  useEffect(() => {
    if (forgotResponse != '') {
      navigation.navigate('ForgotMailVerify');
    }
  }, [forgotResponse]);

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
          <Text
            style={{
              fontSize: 14,
              fontFamily: FontStyle.MontMedium,
              width: '78%',
              color: '#205072',
              marginVertical: '2.5%',
            }}>
            Gib deine E-Mail ein und wir senden Dir eine Nachricht mit der du
            dein Passwort zurücksetzen kannst.
          </Text>
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
            onChangeText={text => setEmail(text)}
          />
        </View>
        {loading ? (
          <Spinner />
        ) : (
          <Button onPress={submit} buttonText="E-Mail senden" />
        )}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;
