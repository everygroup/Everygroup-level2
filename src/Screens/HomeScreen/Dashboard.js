import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Header from '../../Common/Header';
import GroupCard from '../../Common/GroupCard';
import GradientCard from '../../Common/GradientCard';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
const {width} = Dimensions.get('screen');
const Dashboard = () => {
  const navigation = useNavigation();
  const flatListRef = useRef(2);
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
  const [trendingGroup, setTrengingGroup] = useState([
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

  const handleLoadMore = () => {
    setTrengingGroup(prevValue => [...prevValue, ...trendingGroup]);
  };

  // Redux code
  const {name, alignItems, status} = useSelector(state => {
    return state;
  });
  //////////////////////////////

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
          <View
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontBold,
                fontSize: 38,
                color: '#205072',
                left: 3,
              }}>
              Trends
            </Text>
            <Text
              style={{
                fontFamily: FontStyle.MontBold,
                fontSize: 18,
                color: '#205072',
              }}>
              Die beliebtesten Gruppen
            </Text>
          </View>
          <FlatList
            initialScrollIndex={2}
            onScrollToIndexFailed={info => {
              const wait = new Promise(resolve => setTimeout(resolve, 500));
              wait.then(() => {
                flatList.current?.scrollToIndex({
                  index: info.index,
                  animated: true,
                });
              });
            }}
            getItemLayout={(data, index) => {
              return {length: 131, offset: 131 * index, index};
            }}
            horizontal={true}
            data={trendingGroup}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              backgroundColor: '#fff',
            }}
            renderItem={({item: trending}) => {
              return <GradientCard group={trending} />;
            }}
            onEndReached={handleLoadMore}
            onEndThreshold={0}
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
              fontSize: 26,
              color: '#205072',
              fontFamily: FontStyle.MontBold,
              alignSelf: 'center',
              marginTop: 10,
            }}>
            Neu hinzugefügt
          </Text>
          <ScrollView style={{paddingBottom: 20}}>
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
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
