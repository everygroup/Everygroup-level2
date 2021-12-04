import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Styles from './Style';

const Help = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [pageOption, setPageOption] = useState([
    {displayName: 'FAQ', navigationName: 'FAQ'},
    {displayName: 'BLOG', navigationName: 'BLOG'},
    {displayName: 'Kontakt', navigationName: 'Kontakt'},
    {displayName: 'Verhaltensregeln', navigationName: 'Verhaltensregeln'},
    {displayName: 'Impressum', navigationName: 'Impressum'},
    {displayName: 'Datenschutz', navigationName: 'Datenschutz'},
    {
      displayName: 'Allgemeine Geschäftsbedingungen',
      navigationName: 'Allgemeine Geschäftsbedingungen',
    },
  ]);
  const menuIconPress = value => {
    if (selectedOption == value) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };
  return (
    <View style={Styles.mainContainer}>
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
      <Text style={Styles.headingText}>Hilfe</Text>
      <FlatList
        data={pageOption}
        renderItem={({item}) => {
          return (
            <TouchableOpacity style={Styles.textContainer}>
              <Text style={[Styles.textStyle, {width: '80%'}]}>
                {item.displayName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
          bottom: '6%',
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            fontFamily: FontStyle.MontSemiBold,
            color: '#E3E3E3',
            fontSize: 10,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Version 1.124.213
        </Text>
        <Text
          style={{
            fontFamily: FontStyle.MontSemiBold,
            color: '#E3E3E3',
            fontSize: 10,
            alignSelf: 'center',
          }}>
          Made with many energydrinks.
        </Text>
      </View>
    </View>
  );
};

export default Help;
