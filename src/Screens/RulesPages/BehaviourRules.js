import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Styles from '../UserScreens/Style';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import AdminRule from '../AuthScreens/AdminRule';
import MemberRule from '../AuthScreens/MemberRules';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const BehaviourRules = () => {
  const navigation = useNavigation();
  return (
    <View style={[Styles.mainContainer]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name={'chevron-left'}
          size={30}
          color="#205072"
          onPress={() => navigation.goBack()}
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
