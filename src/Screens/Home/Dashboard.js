import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Header from '../../Common/Header';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const menuIconPress = value => {
    if (selectedOption == value) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };
  return (
    <View>
      <SafeAreaView style={{backgroundColor: 'grey'}} />
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
      <Text>hi</Text>
    </View>
  );
};

export default Dashboard;
