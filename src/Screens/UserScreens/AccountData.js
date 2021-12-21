import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
const AccountData = () => {
  const navigation = useNavigation();

  const [pageOption, setPageOption] = useState([
    {
      displayName: 'Passwort ändern',
      description: 'Gib dein Passwort ein, um deinen Account löschen zu können',
      toNavigate: 'UpdatePassword',
    },
    {
      displayName: 'E-Mail ändern',
      description: 'Gib dein Passwort ein, um deine E-Mail zu ändern',
      toNavigate: 'UpdateEmail',
    },
    {
      displayName: 'Nutzername ändern',
      description: ' Gib dein Passwort ein, um deinen Nutzernamen zu ändern',
      toNavigate: 'UpdateUserName',
    },
  ]);

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Accountdaten</Text>
        <View />
      </View>
      <View style={{height: '65%'}}>
        <FlatList
          data={pageOption}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('CheckPassword', {
                    description: item.description,
                    toNavigate: item.toNavigate,
                  })
                }
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
            fontSize: 18,
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
