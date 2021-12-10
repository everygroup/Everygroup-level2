import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from '../UserScreens/Style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminRule from './AdminRule';
import MemberRule from './MemberRules';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Groups from '../FavoriteTabs/Groups';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const BehaviourRules = () => {
  const navigation = useNavigation();
  return (
    <View style={[Styles.mainContainer]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{width: 23, height: 23, resizeMode: 'contain'}}
        />
      </TouchableOpacity>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#FFA420',
          tabBarInactiveTintColor: '#BECCD6',
          tabBarLabelStyle: {fontSize: 17, fontFamily: FontStyle.MontBold},
        }}>
        <Tab.Screen name="Admin" component={AdminRule} />
        <Tab.Screen name="Mitglied" component={MemberRule} />
      </Tab.Navigator>
    </View>
  );
};

export default BehaviourRules;
