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
      group_type: 'snapchat',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      group_type: 'whatsapp',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      group_type: 'line',
      favorite: true,
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      group_type: 'telegram',
      favorite: true,
    },
  ]);
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={groupArray}
        contentContainerStyle={{backgroundColor: '#fff', paddingBottom: 100}}
        renderItem={({item: group}) => {
          return <GroupCard group={group} />;
        }}
      />
    </View>
  );
};

export default Groups;
