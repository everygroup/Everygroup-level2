import React, {useState} from 'react';
import {View, Text, FlatList, LayoutAnimation} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import GroupCard from '../../Common/GroupCard';

const MyGroup = () => {
  const [groupId, setGroupId] = useState('');
  const [eyeValue, setEyeValue] = useState(true);
  const [bellValue, setBellValue] = useState(true);
  const [ownGroupArray] = useState([
    {
      groupId: '0',
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'snapchat',
    },
  ]);

  const expandOption = group => {
    if (group == groupId) {
      setGroupId('');
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      setGroupId(group);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  };

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <Text style={Styles.headingText}>Eigene Gruppen</Text>
      <FlatList
        data={ownGroupArray}
        contentContainerStyle={{backgroundColor: '#fff'}}
        renderItem={({item: group}) => {
          return (
            <GroupCard
              group={group}
              boosterValue={true}
              onPress={() => expandOption(group.groupId)}
              selectedGroupName={groupId}
              eyePress={() => setEyeValue(!eyeValue)}
              eyeValue={eyeValue}
              bellPress={() => setBellValue(!bellValue)}
              bellValue={bellValue}
            />
          );
        }}
      />
    </View>
  );
};

export default MyGroup;
