import React, {useState} from 'react';
import {View, Text, Image, Platform, TouchableOpacity} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Groups from '../FavoriteTabs/Groups';
import Search from '../FavoriteTabs/Search';
import Persons from '../FavoriteTabs/Persons';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const MyFavorite = () => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        Styles.mainContainer,
        {
          paddingTop: Platform.OS == 'ios' ? '25%' : '15%',
          backgroundColor: '#fff',
        },
      ]}>
      <Header />
      <Text style={Styles.headingText}>Favoriten</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFA420',
          tabBarInactiveTintColor: '#BECCD6',
          tabBarLabelStyle: {fontSize: 15, fontFamily: FontStyle.MontBold},
          tabBarIndicatorStyle: {
            backgroundColor: '#FFA420',
          },
        }}>
        <Tab.Screen name="Gruppen" component={Groups} />
        <Tab.Screen name="Suche" component={Search} />
        <Tab.Screen name="Personen" component={Persons} />
      </Tab.Navigator>
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

export default MyFavorite;
