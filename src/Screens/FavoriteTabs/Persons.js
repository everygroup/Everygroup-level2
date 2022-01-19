import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import PersonCard from '../../Common/HeaderPages/PersonCard';
import {useNavigation} from '@react-navigation/native';

const Persons = () => {
  const navigation = useNavigation();
  const [personsData, setPersonsData] = useState([
    {
      userName: 'Superman98',
      notificationValue: true,
    },
    {
      userName: 'Grouplover#1',
      notificationValue: false,
    },
    {
      userName: 'User154356',
      notificationValue: false,
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        data={personsData}
        renderItem={({item: data}) => {
          return <PersonCard data={data} />;
        }}
      />
    </View>
  );
};

export default Persons;
