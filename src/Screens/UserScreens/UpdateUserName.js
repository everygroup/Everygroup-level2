import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/core';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import AlertModal from '../../Common/AlertModal';
import {HelperText} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {changeProfile} from '../../../Slice/ProfileReducer';

const UpdateUserName = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [modalValue, setModalValue] = useState(false);
  const [userNameText, setUserNameText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [userError, setUserError] = useState(false);

  const submit = () => {
    if (userNameText == '') {
      setUserError(true);
      setErrorMessage('Username wird benötigt');
    } else {
      setModalValue(true);
      // dispatch(changeProfile({userNameText}));
    }
  };

  const {error, loading, value} = useSelector(state => {
    console.log(state.changeProfile);
    return state.changeProfile;
  });

  useEffect(() => {
    setUserError(true);
    setErrorMessage(error.toString());
    setModalValue(false);
  }, [error]);

  useEffect(() => {
    if (value == 'success') {
      setModalValue(false);
    }
  }, [value, error]);

  const closeModal = () => {
    setModalValue(false);
  };

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
      }}>
      <AlertModal
        modalValue={modalValue}
        closeModal={closeModal}
        onPress={() => dispatch(changeProfile({userNameText}))}
      />

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
        Gib deinen neuen Nutzernamen ein
      </Text>
      <View style={Styles.errorContainer}>
        {userError == true ? (
          <HelperText
            style={[Styles.helperText, {paddingLeft: '10%'}]}
            type="error">
            {errorMessage}
          </HelperText>
        ) : null}
      </View>
      <Input
        placeholder="SuperMan98"
        placeholderTextColor="#205072"
        onChangeText={text => {
          setUserNameText(text);
          setUserError(false);
        }}
      />
      <Text
        style={{
          fontFamily: FontStyle.MontMedium,
          fontSize: 15,
          color: '#205072',
          width: '75%',
        }}>
        Du kannst deinen Nutzernamen nur einmal ändern.
      </Text>
      <View
        style={{marginVertical: '10%', width: '100%', alignItems: 'center'}}>
        <Button buttonText="Nutzernamen ändern" onPress={submit} />
      </View>
      {value == 'success' ? (
        <Text
          style={{
            fontFamily: FontStyle.MontMedium,
            fontSize: 14,
            color: '#06BA63',
            width: '70%',
            textAlign: 'center',
          }}>
          Der Nutzername wurde erfolgreich geändert!
        </Text>
      ) : null}
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

export default UpdateUserName;
