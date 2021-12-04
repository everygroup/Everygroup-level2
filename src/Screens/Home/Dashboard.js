import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import Header from '../../Common/Header';
import GroupCard from '../../Common/GroupCard';
import GradientCard from '../../Common/GradientCard';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Dashboard = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [groupArray] = useState([
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'snapchat',
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'whatsapp',
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'line',
    },
    {
      groupName: 'Nordsee Gruppe',
      category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
      hashtagData: ['#test', '#test', '#test', '#test', '#test'],
      description: 'Hey, wir sind eine nette Gruppe',
      socialGroup: 'telegram',
    },
  ]);
  const [trendingGroup] = useState([
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'snapchat',
    },
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'whatsapp',
    },
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'line',
    },
    {
      description: 'Die Masterchill Gruppe zu plappern',
      socialGroup: 'telegram',
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
    <View style={{paddingTop: '9%', height: '90%'}}>
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
      <View style={{height: '34%', backgroundColor: '#fff'}}>
        <View style={{width: '100%', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 36,
              color: '#205072',
            }}>
            Trends
          </Text>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              fontSize: 16,
              color: '#205072',
            }}>
            Die beliebtesten Gruppen
          </Text>
        </View>
        <FlatList
          horizontal={true}
          data={trendingGroup}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            backgroundColor: '#fff',
          }}
          renderItem={({item: trending}) => {
            return <GradientCard group={trending} />;
          }}
        />
        <View
          style={{
            backgroundColor: '#FFA420',
            height: 2,
            width: '50%',
            alignSelf: 'center',
          }}
        />
      </View>
      <View style={{height: '68%', backgroundColor: '#fff'}}>
        <Text
          style={{
            fontSize: 24,
            color: '#205072',
            fontFamily: FontStyle.MontBold,
            alignSelf: 'center',
            marginTop: 10,
          }}>
          Neu hinzugefügt
        </Text>
        <FlatList
          data={groupArray}
          contentContainerStyle={{backgroundColor: '#fff'}}
          renderItem={({item: group}) => {
            return <GroupCard group={group} />;
          }}
        />
      </View>
    </View>
  );
};

export default Dashboard;
