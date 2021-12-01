import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = ({
  logoPress,
  plusIconPress,
  searchIconPress,
  menuIconPress,
  headerHeight,
  selectedOption,
}) => {
  return (
    <View
      style={{
        height:
          selectedOption == 'menu'
            ? 200
            : selectedOption == 'search'
            ? 300
            : selectedOption == 'plus'
            ? 500
            : 60,
        width: '100%',
        backgroundColor: '#FF9700',
        flexDirection: 'row',
        paddingLeft: '2%',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}>
      <View
        style={{
          width: '52%',
          height: '100%',
        }}>
        <Image
          source={require('../Assets/Images/blueLogo.png')}
          style={{height: 50, width: 50, resizeMode: 'contain'}}
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
  );
};

export default Header;
