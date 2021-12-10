import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import ModalDropdown from 'react-native-modal-dropdown';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Deutsch');

  const [language] = useState(['Deutsch', 'English']);

  return (
    <View style={{paddingTop: '25%', height: '100%'}}>
      <Header />
      <Text style={Styles.headingText}>Sprache</Text>
      <View
        style={[styles.containerStyle, {height: 50, justifyContent: 'center'}]}>
        <ModalDropdown
          options={language}
          defaultValue={selectedLanguage}
          textStyle={{
            fontSize: 17,
            alignItems: 'center',
            fontFamily: FontStyle.MontSemiBold,
            color: '#FFA420',
            paddingHorizontal: '5%',
          }}
          dropdownStyle={{
            backgroundColor: '#fff',
            marginTop: 15,
            borderColor: '#DDDFE7',
            borderWidth: 0.5,
            height: 100,
            width: '90%',
          }}
          dropdownTextStyle={{
            fontSize: 17,
            fontFamily: FontStyle.MontSemiBold,
            color: '#FFA420',
            paddingHorizontal: '5%',
          }}></ModalDropdown>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: '5%',
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
  },
});

export default Language;
