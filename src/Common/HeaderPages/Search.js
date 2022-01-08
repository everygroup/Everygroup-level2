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
import InfoModal from '../InfoModal';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {getLanguage} from '../../../Slice/LanguageReducer';
import {saveSearch} from '../../../Slice/SearchReducer';

const Search = ({starPress, starValue, filterValue, filterPress}) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');
  const [searchedLanguage, setSearchedLanguage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [modalValue, setModalValue] = useState(false);
  const [infoMessage, setInfoMessage] = useState(
    'Hier kannst du nach der Sprache filtern, welche überwiegend in der Gruppe benutzt wird. Filtere nach Sprachen deiner Wahl oder such nach allen.',
  );
  const [chooseLanguage, setChooseLanguage] = useState('');
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

  const {languageArray} = useSelector(state => {
    return state.getLanguage;
  });

  const {categoryArray} = useSelector(state => {
    return state.getCategory;
  });

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

  const checkLanguage = lang => {
    if (lang != '') {
      dispatch(getLanguage(lang));
    } else {
      dispatch(getLanguage(''));
    }
  };

  const selectSearchLanguage = item => {
    setSearchedLanguage(item);
  };

  const addSelectLanguage = async () => {
    if (
      !selectedLanguage.some(el => el.language == searchedLanguage.language)
    ) {
      await setSelectedLanguage(prevValue => [...prevValue, searchedLanguage]);
      dispatch(getLanguage('Hindi'));
      setSearchedLanguage('');
    }
  };

  const deleteSelectLanguage = item => {
    setSelectedLanguage(
      selectedLanguage.filter(el => el.language !== item.language),
    );
  };

  const searchSave = () => {
    console.log(selectedLanguage, 'lang');
    const category = selectedCategory.map(({category, ...rest}) => ({
      ...rest,
    }));
    const shortCategory = category.map(el => el.slug);
    const language = selectedLanguage.map(({language, ...rest}) => ({
      ...rest,
    }));
    const shortLanguage = language.map(el => el.code);

    dispatch(
      saveSearch({
        query: query,
        groupType: selectedMessenger,
        groupCategory: shortCategory,
        groupLanguage: shortLanguage,
      }),
    );
  };

  // console.log(languageArray, 'lang array');

  return (
    <View style={{flex: 1, top: 20}}>
      <InfoModal
        modalValue={modalValue}
        message={infoMessage}
        closeModal={() => setModalValue(false)}
      />
      <View
        style={{
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'center',
        }}>
        <View style={{right: 5, top: 10}}>
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
          icon="available"
          imageSource1={require('../../Assets/Images/searchOrange.png')}
          placeholder="Gruppe suchen"
          placeholderTextColor="#BECCD6"
          onChangeText={text => setQuery(text)}
        />
        <View style={{left: 5, top: 8}}>
          {starValue ? (
            <TouchableWithoutFeedback onPress={starPress}>
              <Image
                source={require('../../Assets/Images/starFill.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback onPress={searchSave}>
              <Image
                source={require('../../Assets/Images/star.png')}
                style={{height: 24, width: 24}}
              />
            </TouchableWithoutFeedback>
          )}
        </View>
      </View>
      {filterValue ? (
        <KeyboardAwareScrollView
          extraScrollHeight={150}
          showsVerticalScrollIndicator={false}
          // keyboardDismissMode="on-drag"
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: 'center',
            paddingBottom: 200,
          }}>
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
              onPress={() => setSelectedMessenger([])}
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
              height: '50%',
              width: '100%',
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontExtBold,
                fontSize: 26,
                color: '#205072',
                marginVertical: 10,
              }}>
              Kategorie
            </Text>
            <Text
              onPress={() => setSelectedCategory([])}
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
              data={categoryArray}
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
                      {item.slug == '18' ? null : item.category}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
          <View style={{width: '100%', alignItems: 'center'}}>
            {categoryArray.some(el => el.slug == '18') ? (
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={require('../../Assets/Images/18plus.png')}
                  style={{
                    height: 35,
                    width: 35,
                    resizeMode: 'contain',
                    marginVertical: 10,
                  }}
                />
                <Image
                  source={require('../../Assets/Images/redi.png')}
                  style={{height: 18, width: 18, left: 5}}
                />
              </View>
            ) : null}
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: FontStyle.MontExtBold,
                  fontSize: 26,
                  color: '#205072',
                }}>
                Sprache
              </Text>
              <TouchableOpacity onPress={() => setModalValue(true)}>
                <Image
                  source={require('../../Assets/Images/info.png')}
                  style={{height: 16, width: 16, left: 5}}
                />
              </TouchableOpacity>
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
            <View
              style={{
                // paddingHorizontal: '2.5%',
                width: '85%',
                height: languageArray.length > 0 ? 150 : 39,
                borderRadius: 5,
                backgroundColor: '#fff',
                alignItems: 'flex-start',
              }}>
              <Input
                height={languageArray.length > 0 ? 150 : 39}
                bgColor="#fff"
                inputWidth="100%"
                bdWidth={0.1}
                placeholder="Sprache auswählen.."
                placeholderTextColor="#BECCD6"
                onChangeText={text => checkLanguage(text)}
                value={searchedLanguage.language}
                imageSource1={
                  searchedLanguage == ''
                    ? require('../../Assets/Images/plusGrey.png')
                    : require('../../Assets/Images/plusOrange.png')
                }
                icon="available"
                iconPress={() => addSelectLanguage()}
              />
              {languageArray.length > 0 ? (
                <ScrollView>
                  {languageArray.map(item => {
                    return (
                      <TouchableOpacity
                        onPress={() => selectSearchLanguage(item)}
                        style={{
                          height: 20,
                          paddingHorizontal: '10%',
                          marginTop: 5,
                        }}>
                        <Text
                          style={{
                            fontFamily: FontStyle.MontBold,
                            color: '#82C2F1',
                            fontSize: 13,
                          }}>
                          {item.language}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              ) : null}
            </View>

            <View
              style={{
                height: 30,
                alignSelf: 'flex-start',
                marginLeft: '7%',
                marginVertical: 7,
              }}>
              <FlatList
                data={selectedLanguage}
                horizontal={true}
                scrollEnabled={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item: language}) => {
                  return (
                    <View style={styles.languageContainer}>
                      <Text
                        style={{
                          fontFamily: FontStyle.MontRegular,
                          color: '#fff',
                          fontSize: 10,
                        }}>
                        {language.language}
                      </Text>
                      <TouchableOpacity
                        onPress={() => deleteSelectLanguage(language)}
                        style={{
                          width: 15,
                          alignItems: 'flex-end',
                          justifyContent: 'center',
                          height: '100%',
                        }}>
                        <Text
                          style={{
                            fontFamily: FontStyle.MontMedium,
                            color: '#fff',
                            fontSize: 12,
                          }}>
                          X
                        </Text>
                      </TouchableOpacity>
                    </View>
                  );
                }}
              />
            </View>
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
        </KeyboardAwareScrollView>
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
  languageContainer: {
    minWidth: 40,
    maxWidth: 'auto',
    height: 20,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2.5,
  },
});

export default Search;
