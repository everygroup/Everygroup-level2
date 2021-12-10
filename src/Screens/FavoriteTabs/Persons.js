import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import PersonCard from '../../Common/HeaderPages/PersonCard';

const Persons = () => {
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
        data={personsData}
        renderItem={({item: data}) => {
          return <PersonCard data={data} />;
        }}
      />
    </View>
  );
};

export default Persons;
