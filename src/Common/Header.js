import React, {useState, useCallback, useEffect} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Platform,
} from 'react-native';

import AddGroup from './HeaderPages/AddGroup';
import Menu from './HeaderPages/Menu';
import Search from './HeaderPages/Search';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const Header = ({selectionOption, closeAddGroup}) => {
  const navigation = useNavigation();
  // const [opacity] = useState(new Animated.Value(1));
  const [starValue, setStarValue] = useState(false);
  const [filterValue, setFilterValue] = useState(false);
  const [currentSelectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    setSelectedOption(selectionOption);
  }, [selectionOption]);

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
  };

  const callback = useCallback(value => {
    menuIconPress('');
  }, []);

  return (
    <View
      style={{
        height:
          currentSelectedOption == 'menu'
            ? 320
            : currentSelectedOption == 'search' && filterValue
            ? height
            : currentSelectedOption == 'search'
            ? 135
            : currentSelectedOption == 'plus'
            ? height
            : 59,
        width: '100%',
        alignSelf: 'center',
        backgroundColor: '#FF9700',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        position: 'absolute',
        marginTop: Platform.OS == 'ios' ? 35 : 0,
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
          <View style={[styles.iconContainer]}>
            {currentSelectedOption == 'plus' ? (
              <TouchableWithoutFeedback onPress={() => menuIconPress('plus')}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require('../Assets/animation/menuCross.json')}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={() => menuIconPress('plus')}>
                <Image
                  source={require('../Assets/Images/plus.png')}
                  style={{
                    height: 31,
                    width: 31,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
          <View style={[styles.iconContainer]}>
            {currentSelectedOption == 'search' ? (
              <TouchableWithoutFeedback onPress={() => menuIconPress('search')}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require('../Assets/animation/searchCross.json')}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={() => menuIconPress('search')}>
                <Image
                  source={require('../Assets/Images/search.png')}
                  style={{
                    height: 31,
                    width: 31,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
          <View style={[styles.iconContainer]}>
            {currentSelectedOption == 'menu' ? (
              <TouchableWithoutFeedback onPress={() => menuIconPress('menu')}>
                <LottieView
                  autoPlay
                  loop={false}
                  source={require('../Assets/animation/menuCross.json')}
                />
              </TouchableWithoutFeedback>
            ) : (
              <TouchableWithoutFeedback onPress={() => menuIconPress('menu')}>
                <Image
                  source={require('../Assets/Images/menu.png')}
                  style={{
                    height: 31,
                    width: 31,
                    resizeMode: 'contain',
                  }}
                />
              </TouchableWithoutFeedback>
            )}
          </View>
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
            parentCallBack={callback}
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
