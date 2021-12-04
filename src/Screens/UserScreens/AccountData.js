import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';

const AccountData = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [pageOption, setPageOption] = useState([
    {displayName: 'Passwort ändern', navigationName: 'ChangePassword'},
    {displayName: 'E-Mail ändern', navigationName: 'Notification'},
    {displayName: 'Benutzername ändern', navigationName: 'Coupon'},
  ]);
  const menuIconPress = value => {
    if (selectedOption == value) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };
  return (
    <View style={{paddingTop: '9%', height: '100%', backgroundColor: '#fff'}}>
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{width: 23, height: 23, resizeMode: 'contain'}}
        />
        <Text style={Styles.headingText}>Accountdaten</Text>
        <View />
      </View>
      <View style={{height: '65%'}}>
        <FlatList
          data={pageOption}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={Styles.textContainer}>
                <Text style={Styles.textStyle}>{item.displayName}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
