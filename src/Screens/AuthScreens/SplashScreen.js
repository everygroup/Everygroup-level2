import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import FontStyle from '../../Assets/Fonts/FontStyle';
import LottieView from 'lottie-react-native';

const {width, height} = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();
  const [images] = useState([
    {
      img: require('../../Assets/Images/maskgroup.png'),
      description: 'Finde Gruppen von deinem Lieblings Messenger',
    },
    {
      img: require('../../Assets/Images/maskgroup1.png'),
      description: 'Poste deine eigene Gruppe',
    },
    {
      img: require('../../Assets/Images/maskgroup2.png'),
      description: 'Nur einen button drucken um deine Gruppe zu reposten',
    },
    {
      img: require('../../Assets/Images/maskgroup3.png'),
      description: 'Jetzt noch schneller Gruppen finden mit dem Randome-Mode',
    },
  ]);

  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
      <SafeAreaView />
      <View style={{height: height / 1.6}}>
        {Platform.OS == 'ios' ? (
          <LottieView
            autoPlay
            style={{height: height * 0.6}}
            source={require('../../Assets/animation/SplashAnimation.json')}
          />
        ) : (
          <SwiperFlatList
            autoplay
            autoplayDelay={2}
            autoplayLoop
            index={0}
            showPagination
            paginationActiveColor="#1F4D6E"
            paginationDefaultColor="lightgrey"
            data={images}
            renderItem={({item}) => (
              <View style={{alignItems: 'center'}}>
                <Image
                  source={item.img}
                  style={{width: width, height: height / 2}}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    width: '70%',
                    textAlign: 'center',
                    color: '#205072',
                    fontSize: 18,
                    fontFamily: FontStyle.MontExtBold,
                  }}>
                  {item.description}
                </Text>
              </View>
            )}
          />
        )}
      </View>
      <Button
        onPress={() => navigation.navigate('SignIn')}
        buttonText="Anmelden"
      />

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text
          style={{
            color: '#FFA420',
            marginVertical: '7%',
            fontFamily: FontStyle.MontExtBold,

            fontSize: 21,
          }}>
          Registrieren
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 34,
    color: '#FFA420',
    marginVertical: '2.5%',
  },
});

export default SplashScreen;
