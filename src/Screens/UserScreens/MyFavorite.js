import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Header from '../../Common/Header';

const MyFavorite = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const menuIconPress = value => {
    if (selectedOption == value) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };
  return (
    <View style={{paddingTop: '9%', height: '100%', backgroundColor: 'green'}}>
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
    </View>
  );
};

export default MyFavorite;
