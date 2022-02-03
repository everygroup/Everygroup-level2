import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {resetValue} from '../../../Slice/ProfileReducer';
import {resetPassword} from '../../../Slice/CheckReducer';
import Icon from 'react-native-vector-icons/Feather';

const AccountData = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [pageOption] = useState([
    {
      displayName: 'Passwort ändern',
      description: 'Gib dein aktuelles Passwort ein, um ein neues festzulegen',
      toNavigate: 'UpdatePassword',
    },
    {
      displayName: 'E-Mail ändern',
      description: 'Gib dein Passwort ein, um deine E-Mail zu ändern',
      toNavigate: 'UpdateEmail',
    },
    {
      displayName: 'Nutzernamen ändern',
      description: ' Gib dein Passwort ein, um deinen Nutzernamen zu ändern',
      toNavigate: 'UpdateUserName',
    },
  ]);

  return (
    <View
      style={{
        paddingTop: Platform.OS == 'ios' ? '25%' : '15%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={38} color="#205072" />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Accountdaten</Text>
        <View />
      </View>
      <View style={{height: '65%', marginLeft: 15}}>
        <FlatList
          data={pageOption}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  dispatch(resetPassword());
                  dispatch(resetValue());
                  navigation.navigate('CheckPassword', {
                    description: item.description,
                    toNavigate: item.toNavigate,
                  });
                }}
                style={Styles.textContainer}>
                <Text style={Styles.textStyle}>{item.displayName}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('CheckPassword', {
            description:
              'Gib dein Passwort ein, um deinen Account löschen zu können',
            toNavigate: 'DeletePage',
          })
        }>
        <Text
          style={{
            color: '#929292',
            fontFamily: FontStyle.MontSemiBold,
            fontSize: 20,
            paddingHorizontal: '5%',
            marginBottom: '10%',
          }}>
          Account löschen
        </Text>
      </TouchableOpacity>
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

export default AccountData;
