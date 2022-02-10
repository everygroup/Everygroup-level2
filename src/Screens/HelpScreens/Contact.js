import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import Styles from '../UserScreens/Style';
import Button from '../../Common/Button';
import EditInput from '../../Common/EditInput';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {resetError, sendMessage} from '../../../Slice/ContactReducer';
import MainErrorModal from '../../Common/MainErrorModal';

const Contact = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [reference, setReference] = useState('');
  const [news, setNews] = useState('');
  const [errorValue, setErrorValue] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [referenceError, setReferenceError] = useState(false);
  const [newsError, setNewsError] = useState(false);

  const submit = () => {
    if (email == '') {
      setEmailError(true);
    } else if (reference == '') {
      setReferenceError(true);
    } else if (news == '') {
      setNewsError(true);
    } else {
      dispatch(sendMessage({name, email, reference, news}));
    }
  };

  const {error, loading, status} = useSelector(state => {
    return state.ContactReducer;
  });

  useEffect(() => {
    if (error.length > 0) {
      setErrorValue(true);
    }
    return () => {
      setErrorValue(false);
    };
  }, [error]);

  console.log(status, 'error');

  useEffect(() => {
    dispatch(resetError());
  }, []);

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <KeyboardAwareScrollView
        extraScrollHeight={150}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: '5%',
          paddingBottom: '20%',
          alignItems: 'center',
        }}>
        <MainErrorModal
          modalValue={errorValue}
          message={error}
          closeModal={() => {
            setErrorValue(false), dispatch(resetError());
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Images/back.png')}
              style={{width: 23, height: 23, resizeMode: 'contain'}}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 26,
              color: '#205072',
              marginTop: '5%',
              marginBottom: '3%',
            }}>
            Kontakt
          </Text>
          <View style={{width: 23}} />
        </View>
        <EditInput
          placeholder="Name (optional)"
          placeholderTextColor="#B5B5B5"
          onChangeText={text => setName(text)}
        />

        <EditInput
          placeholder="E-Mail"
          placeholderTextColor="#B5B5B5"
          onChangeText={text => {
            setEmail(text), setEmailError(false);
          }}
          borderWidth={emailError ? 2 : null}
          borderColor={emailError ? '#FF0000' : null}
        />

        <EditInput
          placeholder="Betreff"
          placeholderTextColor="#B5B5B5"
          onChangeText={text => {
            setReference(text), setReferenceError(false);
          }}
          borderWidth={referenceError ? 2 : null}
          borderColor={referenceError ? '#FF0000' : null}
        />

        <EditInput
          placeholder="Nachricht"
          placeholderTextColor="#B5B5B5"
          height={144}
          multiline={true}
          onChangeText={text => {
            setNews(text), setNewsError(false);
          }}
          borderWidth={newsError ? 2 : null}
          borderColor={newsError ? '#FF0000' : null}
        />
        <View style={{marginVertical: '10%'}}>
          <Button
            borderRadius={10}
            buttonText="Abschicken"
            onPress={() => submit()}
          />
        </View>

        <Text
          style={{
            color: '#06BA63',
            fontFamily: FontStyle.poppinsMedium,
            fontSize: 17,
          }}>
          {status}
        </Text>
        <View
          style={{
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../Assets/Images/email.png')}
            style={{height: 22, width: 33}}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 17,
              color: '#205072',
            }}>
            hello@everygroup.me
          </Text>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Contact;
