import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';
import GroupCard from '../../Common/GroupCard';

const Groups = () => {
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'snapchat',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'whatsapp',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'line',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'telegram',
      favorite: true,
    },
  ]);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        data={groupArray}
        contentContainerStyle={{backgroundColor: '#fff'}}
        renderItem={({item: group}) => {
          return <GroupCard group={group} />;
        }}
      />
    </View>
  );
};

export default Groups;
