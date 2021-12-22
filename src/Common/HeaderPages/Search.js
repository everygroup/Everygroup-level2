import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Input from '../Input';
import FontStyle from '../../Assets/Fonts/FontStyle';
import SwitchToggle from 'react-native-switch-toggle';
import {ScrollView} from 'react-native-gesture-handler';

const Search = ({starPress, starValue, filterValue, filterPress}) => {
  const [selectedMessenger, setSelectedMessenger] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [switchOn, setSwitchOn] = useState(true);
  const [messangerData] = useState([
    'Telegram',
    'Whatsapp',
    'Discord',
    'Viber',
    'Snapchat',
    'Line',
  ]);
  const [categoryData] = useState([
    'Creator',
    'Fangruppe',
    'Allgemein',
    'Meme',
    'Gaming',
    'Wissen',
    'Dating',
    'Umgebung',
    'Interessen',
    'Selbsthilfe',
    'Musik',
    'Tiere',
    'Finanzen',
    'LGBTQ+',
    'RPG',
    'Unterhaltung',
    'Technik',
    'Sport',
    'Dienstleistungen',
    'Kunst',
    'Lokal',
    'Filme',
    'Anime',
  ]);

  const selectMessenger = item => {
    if (selectedMessenger.some(messenger => messenger == item)) {
      setSelectedMessenger(selectedMessenger.filter(el => el !== item));
    } else {
      setSelectedMessenger(prevValue => [...prevValue, item]);
    }
  };
  const selectCategory = item => {
    if (selectedCategory.some(category => category == item)) {
      setSelectedCategory(selectedCategory.filter(el => el !== item));
    } else {
      setSelectedCategory(prevValue => [...prevValue, item]);
    }
  };
  console.log(selectedCategory);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View style={{right: 5, top: 11}}>
          {filterValue ? (
            <TouchableWithoutFeedback onPress={filterPress}>
              <Image
                source={require('../../Assets/Images/filter.png')}
                style={{width: 22, height: 22, resizeMode: 'cover'}}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={filterPress}>
              <Image
                source={require('../../Assets/Images/unfilter.png')}
                style={{width: 22, height: 22, resizeMode: 'cover'}}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
        <Input
          bgColor="#fff"
          bdWidth={0.1}
          placeholder="Gruppe suchen"
          placeholderTextColor="#BECCD6"
        />
        <View style={{left: 5, top: 10}}>
          {starValue ? (
            <TouchableWithoutFeedback onPress={starPress}>
              <Image
                source={require('../../Assets/Images/starFill.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={starPress}>
              <Image
                source={require('../../Assets/Images/star.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      {filterValue ? (
        <ScrollView contentContainerStyle={{paddingBottom: '5%'}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: '8%',
              height: '20%',
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 26,
                color: '#205072',
              }}>
              Messenger
            </Text>
            <Text
              style={{
                fontFamily: FontStyle.MontBold,
                fontSize: 19,
                color:
                  selectedMessenger.length == 0 || selectedMessenger.length == 6
                    ? '#fff'
                    : '#FFC570',
                textDecorationLine: 'underline',
              }}>
              Alle
            </Text>
            <FlatList
              data={messangerData}
              numColumns={3}
              contentContainerStyle={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => selectMessenger(item)}
                    style={{
                      width: 120,
                      height: 34,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FontStyle.MontBold,
                        fontSize: 17,
                        color: selectedMessenger.some(el => el == item)
                          ? '#fff'
                          : '#FFC570',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              height: '43%',
              width: '100%',
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 26,
                color: '#205072',
              }}>
              Kategorie
            </Text>
            <Text
              style={{
                fontFamily: FontStyle.MontBold,
                fontSize: 19,
                color:
                  selectedCategory.length == 0 || selectedCategory.length == 21
                    ? '#fff'
                    : '#FFC570',
                textDecorationLine: 'underline',
              }}>
              Alle
            </Text>
            <FlatList
              data={categoryData}
              numColumns={3}
              contentContainerStyle={{
                alignSelf: 'center',
                alignItems: 'center',
              }}
              scrollEnabled={false}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => selectCategory(item)}
                    style={{
                      width: 120,
                      height: 34,
                      justifyContent: 'center',
                      alignItems: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        fontFamily: FontStyle.MontBold,
                        fontSize: 17,
                        color: selectedCategory.some(el => el == item)
                          ? '#fff'
                          : '#FFC570',
                      }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Image
                source={require('../../Assets/Images/18plus.png')}
                style={{height: 35, width: 35}}
              />
              <Image
                source={require('../../Assets/Images/redi.png')}
                style={{height: 18, width: 18, left: 5}}
              />
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  fontSize: 26,
                  color: '#205072',
                }}>
                Sprache
              </Text>
              <Image
                source={require('../../Assets/Images/info.png')}
                style={{height: 16, width: 16, left: 5}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Text
                style={{
                  fontFamily: FontStyle.MontBold,
                  fontSize: 19,
                  color: '#fff',
                }}>
                Alle Sprachen zeigen
              </Text>
              <SwitchToggle
                switchOn={switchOn}
                onPress={() => setSwitchOn(!switchOn)}
                circleColorOff="#fff"
                circleColorOn="#fff"
                backgroundColorOff="#BECCD6"
                backgroundColorOn="#205072"
                containerStyle={styles.switchContainer}
                circleStyle={styles.switchCircle}
              />
            </View>
            <Input
              bgColor="#fff"
              bdWidth={0.1}
              iconName="plus"
              placeholder="Sprache auswählen.."
              placeholderTextColor="#BECCD6"
            />
            <View
              style={{
                height: 50,
                width: 140,
                backgroundColor: '#205072',
                alignItems: 'center',
                justifyContent: 'space-around',
                borderRadius: 10,
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  fontFamily: FontStyle.MontSemiBold,
                  fontSize: 19,
                  color: '#FFFFFF',
                }}>
                Suchen
              </Text>
              <Image
                source={require('../../Assets/Images/searchWhite.png')}
                style={{height: 20, width: 20}}
              />
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  switchContainer: {
    width: 29,
    height: 13,
    borderRadius: 5,
    marginLeft: 5,
    marginTop: 5,
  },
  switchCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.65,
    elevation: 2,
  },
});

export default Search;
