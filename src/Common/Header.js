import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Fontisto';
import AddGroup from './HeaderPages/AddGroup';
import Menu from './HeaderPages/Menu';
import Search from './HeaderPages/Search';
import {useNavigation} from '@react-navigation/native';
const {width, height} = Dimensions.get('window');

const Header = () => {
  const navigation = useNavigation();
  const [searchOpacity] = useState(new Animated.Value(1));
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

  const startAnimation = () => {
    menuIconPress('search');
    Animated.timing(searchOpacity, {
      useNativeDriver: false,
      toValue: 0,
      duration: 350,
    }).start();
  };
  // useEffect(() => {
  //   startAnimation();
  // }, []);

  console.log(searchOpacity, 'animation');
  return (
    <View
      style={{
        height:
          currentSelectedOption == 'menu'
            ? 320
            : currentSelectedOption == 'search' && filterValue
            ? height
            : currentSelectedOption == 'search'
            ? 115
            : currentSelectedOption == 'plus'
            ? height
            : 59,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#FF9700',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        marginTop: 35,
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
              style={{height: 31, width: 31, top: 15, left: 5}}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            width: '46%',
            height: '100%',
            flexDirection: 'row',
            top: 15,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => menuIconPress('plus')}>
            {currentSelectedOption == 'plus' ? (
              <Icons name="close-a" size={20} color="#EF3E36" />
            ) : (
              <Image
                source={require('../Assets/Images/plus.png')}
                style={{height: 31, width: 31, resizeMode: 'contain'}}
              />
            )}
          </TouchableOpacity>
          <TouchableWithoutFeedback
            style={[styles.iconContainer]}
            onPress={startAnimation}>
            {/* <Animated.View
              style={[
                {
                  searchOpacity,
                  width: 50,
                  height: 50,
                  backgroundColor: 'green',
                },
              ]}></Animated.View> */}
            <Animated.Image
              source={require('../Assets/Images/search.png')}
              style={{height: 31, width: 31, resizeMode: 'contain'}}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => menuIconPress('menu')}>
            {currentSelectedOption == 'menu' ? (
              <Icons name="close-a" size={20} color="#EF3E36" />
            ) : (
              <Image
                source={require('../Assets/Images/menu.png')}
                style={{height: 31, width: 31, resizeMode: 'contain'}}
              />
            )}
          </TouchableOpacity>
        </View>
      </View>
      {currentSelectedOption == 'menu' ? (
        <Menu onPressMenu={() => setSelectedOption('')} />
      ) : currentSelectedOption == 'plus' ? (
        <View style={{paddingTop: '5%'}}>
          <AddGroup />
        </View>
      ) : currentSelectedOption == 'search' ? (
        <View style={{height: '100%'}}>
          <Search
            starPress={() => setStarValue(!starValue)}
            starValue={starValue}
            filterPress={() => setFilterValue(!filterValue)}
            filterValue={filterValue}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
