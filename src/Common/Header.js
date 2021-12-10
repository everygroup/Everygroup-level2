import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AddGroup from './HeaderPages/AddGroup';
import Menu from './HeaderPages/Menu';
import Search from './HeaderPages/Search';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [starValue, setStarValue] = useState(false);
  const [filterValue, setFilterValue] = useState(false);
  const [currentSelectedOption, setSelectedOption] = useState('');

  const menuIconPress = value => {
    if (value == '') {
      setSelectedOption(value);
    } else if (value == currentSelectedOption) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };

  return (
    <View
      style={{
        height:
          currentSelectedOption == 'menu'
            ? '40%'
            : currentSelectedOption == 'search' && filterValue
            ? '110%'
            : currentSelectedOption == 'search'
            ? '15%'
            : currentSelectedOption == 'plus'
            ? '110%'
            : '7%',
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#FF9700',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        top: 35,
        zIndex: 10,
      }}>
      <View
        style={{
          backgroundColor: '#FF9700',
          flexDirection: 'row',
          paddingHorizontal: '2.5%',
        }}>
        <View
          style={{
            width: '52%',
            height: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image
              source={require('../Assets/Images/whiteLogo.png')}
              style={{height: 28, width: 28, top: 12}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '46%',
            height: '100%',
            flexDirection: 'row',
            top: 10,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => menuIconPress('plus')}>
            <Icon name="add" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => menuIconPress('search')}>
            <Icon name="search" size={30} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => menuIconPress('menu')}>
            <Icon name="menu" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      {currentSelectedOption == 'menu' ? (
        <Menu onPressMenu={() => setSelectedOption('')} />
      ) : currentSelectedOption == 'plus' ? (
        <AddGroup />
      ) : currentSelectedOption == 'search' ? (
        <Search
          starPress={() => setStarValue(!starValue)}
          starValue={starValue}
          filterPress={() => setFilterValue(!filterValue)}
          filterValue={filterValue}
        />
      ) : null}
    </View>
  );
};

export default Header;
