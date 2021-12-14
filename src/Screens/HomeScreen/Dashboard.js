import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../Common/Header';
import GroupCard from '../../Common/GroupCard';
import GradientCard from '../../Common/GradientCard';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();

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

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <Header />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '10%'}}>
        <View style={{height: '24%', backgroundColor: '#fff'}}>
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
        <View style={{backgroundColor: '#fff'}}>
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
          <ScrollView>
            {groupArray.map(group => {
              return <GroupCard group={group} />;
            })}
          </ScrollView>
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Interface')}
        style={{
          position: 'absolute',
          bottom: '10%',
          alignSelf: 'flex-end',
          right: '8%',
        }}>
        <Image
          source={require('../../Assets/Images/group.png')}
          style={{
            width: 40,
            height: 40,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
