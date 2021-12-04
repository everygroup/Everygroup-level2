import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddGroup from './HeaderPages/AddGroup';
import Menu from './HeaderPages/Menu';

const Header = ({
  plusIconPress,
  searchIconPress,
  menuIconPress,
  selectedOption,
}) => {
  return (
    <View
      style={{
        height:
          selectedOption == 'menu'
            ? '48%'
            : selectedOption == 'search'
            ? '50%'
            : selectedOption == 'plus'
            ? '100%'
            : '8%',
        width: '100%',
        backgroundColor: '#FF9700',
      }}>
      <View
        style={{
          backgroundColor: '#FF9700',
          flexDirection: 'row',
          paddingHorizontal: '2.5%',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View
          style={{
            width: '52%',
            height: '100%',
          }}>
          <Image
            source={require('../Assets/Images/whiteLogo.png')}
            style={{height: 25, width: 26, top: 12}}
          />
        </View>

        <View
          style={{
            width: '46%',
            height: '100%',
            flexDirection: 'row',
            top: 10,

            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={plusIconPress}>
            <Icon name="add" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={searchIconPress}>
            <Icon name="search" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={menuIconPress}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {selectedOption == 'menu' ? (
        <Menu />
      ) : selectedOption == 'plus' ? (
        <AddGroup />
      ) : null}
    </View>
  );
};

export default Header;
