import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  SafeAreaView,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Button from '../../Common/Button';
import {useNavigation} from '@react-navigation/native';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import FontStyle from '../../Assets/Fonts/FontStyle';
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
      <Image
        source={require('../../Assets/Images/orangeLogo.png')}
        style={{width: 33, height: 31}}
      />
      <Text style={styles.logoText}>everygroup</Text>
      <View style={{height: height / 1.7}}>
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
                  fontSize: 14,
                }}>
                {item.description}
              </Text>
            </View>
          )}
        />
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
          }}>
          Registrieren
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  logoText: {
    fontSize: 32,
    color: '#FFA420',
    marginVertical: '2.5%',
  },
});

export default SplashScreen;
