import React from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';

const HeaderAuth = ({currentRoute}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '10%', left: 10}}>
          {currentRoute && currentRoute.index == 0 ? null : (
            <Icon
              name={'chevron-left'}
              size={30}
              color="#205072"
              onPress={() => navigation.navigate('SplashScreen')}
            />
          )}
        </View>
        <Image
          source={require('../../Assets/Images/orangeLogo.png')}
          style={{
            height: 31,
            width: 33,
            alignSelf: 'center',
            marginRight: '4%',
          }}
        />
        <View style={{width: '10%'}} />
      </View>
      <Text
        style={{
          color: '#FFA420',
          fontSize: 32,
          fontFamily: FontStyle.FuturaPTBold,
        }}>
        everygroup
      </Text>
    </SafeAreaView>
  );
};

export default HeaderAuth;