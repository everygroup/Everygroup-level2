import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../Common/Header';
import {useNavigation} from '@react-navigation/native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import GroupCard from '../../Common/GroupCard';
import {FlatList} from 'react-native-gesture-handler';
const OtherUserScreen = () => {
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
  const [bellValue, setBellValue] = useState(false);
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: '21%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
          marginVertical: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            width: '80%',
          }}>
          <Text
            style={{
              color: '#205072',
              fontSize: 20,
              fontFamily: FontStyle.MontMedium,
            }}>
            Alle Gruppen von:
          </Text>
          <Text
            style={{
              color: '#205072',
              fontSize: 24,
              fontFamily: FontStyle.MontBold,
            }}>
            Superman98
          </Text>
        </View>
        <Icon
          name={bellValue ? 'bell' : 'bell-slash'}
          size={25}
          style={{width: '10%', alignItems: 'flex-end'}}
          color="#205072"
          solid
          onPress={() => setBellValue(!bellValue)}
        />
      </View>

      <FlatList
        data={groupArray}
        showsVerticalScrollIndicator={false}
        renderItem={({item: group}) => {
          return <GroupCard group={group} />;
        }}
      />
    </View>
  );
};

export default OtherUserScreen;
