import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Styles from '../UserScreens/Style';
import {useNavigation} from '@react-navigation/native';

const Help = () => {
  const navigation = useNavigation();
  const [pageOption, setPageOption] = useState([
    {displayName: 'FAQ', navigationName: 'http://digimonk.co:1611/faq'},
    {displayName: 'BLOG', navigationName: 'http://digimonk.co:1611/blog'},
    {displayName: 'Kontakt', navigationName: 'Contact'},
    {displayName: 'Verhaltensregeln', navigationName: 'Help'},
    {displayName: 'Impressum', navigationName: 'Help'},
    {displayName: 'Datenschutz', navigationName: 'Help'},
    {
      displayName: 'Allgemeine Geschäftsbedingungen',
      navigationName: 'Help',
    },
  ]);

  const selectPage = page => {
    if (page == 'Contact') {
      navigation.navigate(item.navigationName);
    } else {
      Linking.openURL(page);
    }
  };

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Text style={Styles.headingText}>Hilfe</Text>
      <FlatList
        data={pageOption}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => selectPage(item.navigationName)}
              style={Styles.textContainer}>
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
            fontSize: 12,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Version 1.124.213
        </Text>
        <Text
          style={{
            fontFamily: FontStyle.MontSemiBold,
            color: '#E3E3E3',
            fontSize: 12,
            alignSelf: 'center',
          }}>
          Made with many energydrinks.
        </Text>
      </View>
    </View>
  );
};

export default Help;
