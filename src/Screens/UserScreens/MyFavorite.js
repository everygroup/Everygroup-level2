import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Groups from '../FavoriteTabs/Groups';
import Search from '../FavoriteTabs/Search';
import Persons from '../FavoriteTabs/Persons';
import FontStyle from '../../Assets/Fonts/FontStyle';

const Tab = createMaterialTopTabNavigator();

const MyFavorite = () => {
  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <Text style={Styles.headingText}>Favoriten</Text>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFA420',
          tabBarInactiveTintColor: '#BECCD6',
          indicatorStyle: {
            backgroundColor: 'red',
          },
          tabBarLabelStyle: {fontSize: 18, fontFamily: FontStyle.MontBold},
          tabBarIndicatorStyle: {
            backgroundColor: '#FFA420',
          },
        }}>
        <Tab.Screen name="Gruppen" component={Groups} />
        <Tab.Screen name="Suche" component={Search} />
        <Tab.Screen name="Personen" component={Persons} />
      </Tab.Navigator>
    </View>
  );
};

export default MyFavorite;
