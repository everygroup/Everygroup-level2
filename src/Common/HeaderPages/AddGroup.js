import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  NativeModules,
  Platform,
  FlatList,
} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontStyle from '../../Assets/Fonts/FontStyle';
import InfoModal from '../InfoModal';
import {HelperText} from 'react-native-paper';
import Styles from '../../Screens/UserScreens/Style';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {getLanguage} from '../../../Slice/LanguageReducer';
import {registerUser, updateRememberSnapChat} from '../../../Slice/AuthReducer';
import {createGroup} from '../../../Slice/CreateGroupReducer';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SnapChatModal from './SnapChatModal';
import LoadingModal from '../LoadingModal';
import {resetErroLoading} from '../../../Slice/CreateGroupReducer';
import LottieView from 'lottie-react-native';

const AddGroup = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [joinOption, setJoinOption] = useState('all');
  const [createLoading, setcreateLoading] = useState(false);
  const [joinedLanguage, setJoinedLanguage] = useState('');
  const [spokenLanguage, setSpokenLanguage] = useState('');
  const [snapChatModal, setSnapChatModal] = useState(false);
  const [joinSelection, setJoinSelection] = useState('all');
  const [groupLanguage, setGroupLanguageFocus] = useState(false);
  const [joinLanguageFocus, setJoinLanguageFocus] = useState(false);
  const [joinLanguage, setJoinLanguage] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [allJoin, setAllJoin] = useState([{language: 'all', code: 'all'}]);
  const [selectedInfo, setSelectInfo] = useState('');
  const [modalValue, setModalValue] = useState(false);
  const [titel, setTitel] = useState('');
  const [titelError, setTitelError] = useState(false);
  const [titelErrorMessage, setTitelErrorMessage] = useState('');
  const [description, setDescription] = useState('');
  const [descriptionError, setDescriptionError] = useState(false);
  const [descriptionErrorMessage, setDescriptionErrorMessage] = useState('');

  const [categoryError, setCategoryError] = useState(false);
  const [categoryErrorMessage, setCategoryErrorMessage] = useState('');
  const [hashText, setHashText] = useState('');
  const [hashError, setHashError] = useState(false);
  const [hashErrorMessage, setHashErrorMessage] = useState('');
  const [groupLink, setGroupLink] = useState('');
  const [spokenError, setSpokenError] = useState(false);
  const [spokenErrorMessage, setSpokenErrorMessage] = useState('');
  const [joinError, setJoinError] = useState(false);
  const [joinErrorMessage, setJoinErrorMessage] = useState('');
  const [groupLinkError, setGroupLinkError] = useState(false);
  const [groupLinkMessage, setGroupLinkMessage] = useState('');
  const [hashValue, setHashValue] = useState(['latest']);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedConductRules, setConductRules] = useState(false);
  const [expand, setExpand] = useState(false);
  const [termsError, setTermsError] = useState(false);
  const [conductRulesError, setConductRulesError] = useState(false);

  const pressInfo = message => {
    setSelectInfo(message);
    setModalValue(true);
  };

  const submitButton = () => {
    const snapchatRegex = /www.snapchat.com/g;
    if (titel == '') {
      setTitelError(true);
      setTitelErrorMessage('Bitte gib einen Titel ein');
    } else if (titel.length > 30) {
      setTitelError(true);
      setTitelErrorMessage('Zu viele Zeichen');
    } else if (groupLink == '') {
      setGroupLinkError(true);
      setGroupLinkMessage('Gruppentitel eingeben');
    } else if (selectedCategory.length < 1) {
      setCategoryError(true);
      setCategoryErrorMessage('Wähle eine Kategorie');
    } else if (description == '') {
      setDescriptionError(true);
      setDescriptionErrorMessage('Beschreibung einfügen');
    } else if (description.length > 315) {
      setDescriptionError(true);
      setDescriptionErrorMessage('Maximal 315 Zeichen');
    } else if (hashText == '#') {
      setHashError(true);
      setHashErrorMessage('Hashtag nicht gültig');
    } else if (hashText.length > 41) {
      setHashError(true);
      setHashErrorMessage('Maximal 40 Zeichen');
    } else if (selectedLanguage.length < 1) {
      setSpokenError(true);
      setSpokenErrorMessage('Wähle eine Sprache');
    } else if (joinLanguage.length < 1) {
      setJoinError(true);
      setJoinErrorMessage('Sprache auswählen..');
    } else if (checkedTerms == false) {
      setTermsError(true);
    } else if (checkedConductRules == false) {
      setConductRulesError(true);
    } else {
      if (snapchatRegex.test(groupLink) && remember_snapchat) {
        setSnapChatModal(true);
      } else {
        CreateGroup();
      }
    }
  };

  const {systemLang} = useSelector(state => {
    return state.CommonReducer;
  });

  useEffect(() => {
    setSelectedLanguage([systemLang]);
    setJoinLanguage([systemLang]);
  }, [systemLang]);

  const CreateGroup = () => {
    const hashArray = hashText.split(' ');
    const finalJoinLanguage = joinOption == 'all' ? allJoin : joinLanguage;
    setcreateLoading(true);
    console.log({
      titel,
      groupLink,
      selectedCategory,
      description,
      hashArray,
      selectedLanguage,
      finalJoinLanguage,
      checkedTerms,
      checkedConductRules,
    });
    setTimeout(() => {
      dispatch(
        createGroup({
          titel,
          groupLink,
          selectedCategory,
          description,
          hashArray,
          selectedLanguage,
          finalJoinLanguage,
          checkedTerms,
          checkedConductRules,
        }),
      );
    }, 2000);
  };

  const {categoryArray} = useSelector(state => {
    return state.getCategory;
  });

  const {error, loading} = useSelector(state => {
    return state.createGroup;
  });

  useEffect(() => {
    if (error.group_link) {
      setGroupLinkError(true);
      setGroupLinkMessage('Link nicht gültig');
    }
  }, [error]);

  const expandOption = () => {
    setExpand(!expand);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const categroySelection = category => {
    setCategoryError(false);
    if (selectedCategory.some(el => el.slug == category.slug)) {
      setSelectedCategory(
        selectedCategory.filter(item => item.slug !== category.slug),
      );
    } else if (selectedCategory.length >= 3) {
      setSelectedCategory([
        ...selectedCategory.filter((item, index) => index !== 0),
        category,
      ]);
    } else {
      setSelectedCategory(prevValue => [...prevValue, category]);
    }
  };

  const checkLanguage = lang => {
    if (lang != '') {
      dispatch(getLanguage(lang));
    } else {
      dispatch(getLanguage(''));
    }
  };

  const {languageArray} = useSelector(state => {
    return state.getLanguage;
  });
  const {remember_snapchat} = useSelector(state => {
    return state.user;
  });

  const {errorLoading} = useSelector(state => {
    return state.createGroup;
  });
  useEffect(() => {
    setcreateLoading(errorLoading);
  }, [errorLoading]);
  const selectLanguage = item => {
    setSpokenLanguage(item);
  };

  const addSelectLanguage = async () => {
    if (!selectedLanguage.some(el => el.language == spokenLanguage.language)) {
      await setSelectedLanguage(prevValue => [...prevValue, spokenLanguage]);
      dispatch(getLanguage('Hindi'));
      setSpokenLanguage('');
    }
  };

  const selectJoinLanguage = item => {
    setJoinedLanguage(item);
  };

  const addJoinedLanguage = async () => {
    if (!joinLanguage.some(el => el.language == joinedLanguage.language)) {
      await setJoinLanguage(prevValue => [...prevValue, joinedLanguage]);
      dispatch(getLanguage('Hindi'));
      setJoinedLanguage('');
    }
  };

  const deleteJoinLanguage = item => {
    setJoinLanguage(joinLanguage.filter(el => el.language !== item.language));
  };
  const deleteSelectLanguage = item => {
    setSelectedLanguage(
      selectedLanguage.filter(el => el.language !== item.language),
    );
  };

  return (
    <View>
      <LoadingModal
        modalValue={createLoading}
        navigationModal={() => {
          dispatch(resetErroLoading()), navigation.navigate('MyGroup');
        }}
        closeModal={() => setcreateLoading(false)}
        source={require('../../Assets/animation/orangeLoader.json')}
      />

      <InfoModal
        modalValue={modalValue}
        message={selectedInfo}
        closeModal={() => setModalValue(false)}
        closeModal={() => setModalValue(false)}
      />
      <SnapChatModal
        rememberValue={remember_snapchat}
        rememberPress={() => dispatch(updateRememberSnapChat())}
        closeModal={() => setSnapChatModal(false)}
        modalValue={snapChatModal}
        message="Hey, du lädst grade eine Snapchat Gruppe hoch. Bei Snapchat Gruppen kannst du keine Mitglieder rauswerfen. Bitte sei dir darüber bewusst, bevor du wirklich diese Gruppe hochlädst."
      />
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        extraScrollHeight={Platform.os == 'ios' ? 100 : 220}
        showsVerticalScrollIndicator={false}
        keyboardDismissMode="on-drag"
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          alignItems: 'center',
          alignSelf: 'center',
          paddingBottom: 100,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 26,
            alignSelf: 'center',
            fontFamily: FontStyle.MontBold,
            marginVertical: '5%',
          }}>
          Gruppe hinzufügen
        </Text>

        <View>
          <View style={Styles.errorContainer}>
            {titelError == true ? (
              <HelperText
                style={[Styles.helperText, {left: '5%'}]}
                type="error">
                {titelErrorMessage}
              </HelperText>
            ) : null}
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                pressInfo(
                  'Wähle einen aussagekräftigen Titel, damit jeder sofort auf einen Blick weiß, worum es in deiner Gruppe geht.',
                )
              }>
              <Image
                source={require('../../Assets/Images/info.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'cover',
                  right: 10,
                  bottom: 5,
                }}
              />
            </TouchableOpacity>
            <Input
              placeholder="Titel"
              placeholderTextColor="#BECCD6"
              bgColor="#fff"
              height={50}
              bdWidth={titelError ? 2 : 0.1}
              onChangeText={text => {
                setTitel(text);
                setTitelError(false);
              }}
              borderColor={titelError ? '#FF2020' : null}
            />
          </View>
        </View>
        <View>
          <View style={Styles.errorContainer}>
            {groupLinkError == true ? (
              <HelperText
                style={[Styles.helperText, {left: '5%'}]}
                type="error">
                {groupLinkMessage}
              </HelperText>
            ) : null}
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                pressInfo(
                  `Mit dem Gruppenlink können andere deiner Gruppe beitreten. Durch den Link erkennen wir auch automatisch um welchen Messanger es sich handelt und ordnen den passenden Messanger deiner Gruppe zu. Du kannst bei uns Gruppen von WhatsApp, Discord, Snapchat, Telegram, Viber, Line und hochladen \n   \n In unseren FAQ zeigen wir dir für jeden Messanger jeweils, wo dieser Link zu finden ist :)`,
                )
              }>
              <Image
                source={require('../../Assets/Images/info.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'cover',
                  right: 10,
                  bottom: 5,
                }}
              />
            </TouchableOpacity>
            <Input
              placeholder="Gruppenlink"
              placeholderTextColor="#BECCD6"
              bgColor="#fff"
              height={50}
              bdWidth={groupLinkError ? 2 : 0.1}
              onChangeText={text => {
                setGroupLink(text);
                setGroupLinkError(false);
              }}
              borderColor={groupLinkError ? '#FF2020' : null}
            />
          </View>
        </View>
        <View style={Styles.errorContainer}>
          {categoryError == true ? (
            <HelperText style={[Styles.helperText, {left: -50}]} type="error">
              {categoryErrorMessage}
            </HelperText>
          ) : null}
        </View>
        <View style={[styles.container, {height: expand ? 500 : 50}]}>
          <TouchableOpacity
            onPress={() =>
              pressInfo(
                'Mit der Kategorie kannst du passende Themen deiner Gruppe zuordnen. Tipp: So mehr Kategorien du deiner Gruppe zuordnest, desto besser kann sie gefunden werden.',
              )
            }>
            <Image
              source={require('../../Assets/Images/info.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'cover',
                right: 10,
                bottom: 5,
              }}
            />
          </TouchableOpacity>
          <View
            style={[
              styles.insideContainer,
              {height: expand ? 500 : 39},
              categoryError ? {borderColor: 'red', borderWidth: 2} : null,
            ]}>
            <TouchableOpacity
              onPress={expandOption}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: 39,
              }}>
              {selectedCategory.length > 0 ? (
                <Text
                  style={{
                    fontFamily: FontStyle.MontSemiBold,
                    color: '#FFA420',
                    fontSize: 16,
                  }}>
                  {selectedCategory.map(el => {
                    return <Text>{el.category} ,</Text>;
                  })}
                </Text>
              ) : (
                <Text
                  style={{
                    fontFamily: FontStyle.MontSemiBold,
                    color: '#FFA420',
                    fontSize: 16,
                  }}>
                  Kategorie
                </Text>
              )}
              <Icon name="caret-down" color="#000" size={20} />
            </TouchableOpacity>
            {expand ? (
              <ScrollView showsVerticalScrollIndicator={false}>
                {categoryArray.map(el => {
                  return (
                    <View>
                      <TouchableOpacity
                        onPress={() => categroySelection(el)}
                        style={{
                          height: 39,
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: FontStyle.MontSemiBold,
                            fontSize: 19,
                            color: el.slug == 18 ? '#ef3e36' : '#FFA420',
                          }}>
                          {el.category}
                        </Text>
                        {selectedCategory.some(
                          item => item.slug === el.slug,
                        ) ? (
                          <Icon
                            name={'check-square'}
                            size={20}
                            color="#205072"
                            solid
                          />
                        ) : (
                          <Icon name={'square'} size={20} color="#205072" />
                        )}
                      </TouchableOpacity>
                      <View
                        style={{
                          width: '100%',
                          height: 1,
                          backgroundColor: '#DDDFE7',
                        }}
                      />
                    </View>
                  );
                })}
              </ScrollView>
            ) : null}
          </View>
        </View>
        <View style={Styles.errorContainer}>
          {descriptionError == true ? (
            <HelperText style={[Styles.helperText, {left: -50}]} type="error">
              {descriptionErrorMessage}
            </HelperText>
          ) : null}
        </View>
        <View
          style={{
            height: 100,
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            paddingHorizontal: '2.5%',
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() =>
              pressInfo(
                'Durch die Beschreibung hast du die Möglichkeit deine Gruppe detaillierter zu beschreiben \n \n Tipp: Mit einer ansprechenden Beschreibung, kannst du deine Chancen erhöhen, dass mehr Leute deiner Gruppe beitreten.',
              )
            }>
            <Image
              source={require('../../Assets/Images/info.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'cover',
                right: 10,
                bottom: 5,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              width: '80%',
              backgroundColor: '#fff',
              borderRadius: 7,
              height: 100,
              justifyContent: 'center',
              paddingTop: 10,
              borderWidth: descriptionError ? 2 : 2,
              borderColor: descriptionError ? '#FF2020' : '#FFF',
            }}>
            <Input
              placeholder="Beschreibung"
              placeholderTextColor="#BECCD6"
              bgColor="#fff"
              bdWidth={0.1}
              height={100}
              multiline={true}
              inputWidth="100%"
              onChangeText={text => {
                setDescription(text), setDescriptionError(false);
              }}
            />
          </View>
        </View>
        <View>
          <View style={Styles.errorContainer}>
            {hashError == true ? (
              <HelperText
                style={[Styles.helperText, {left: '5%'}]}
                type="error">
                {hashErrorMessage}
              </HelperText>
            ) : null}
          </View>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() =>
                pressInfo(
                  'Durch Hashtags kannst du deiner Gruppe passende Schlagwörter zuordnen. \n \n  Tipp: Du kannst bis zu 5 Hashtags deiner Gruppe zuordnen. So mehr Hashtags deine Gruppe hat, umso besser kann sie gefunden werden',
                )
              }>
              <Image
                source={require('../../Assets/Images/info.png')}
                style={{
                  width: 20,
                  height: 20,
                  resizeMode: 'cover',
                  right: 10,
                  bottom: 5,
                }}
              />
            </TouchableOpacity>

            <Input
              placeholder="#hashtag #nur #wenn #du #willst"
              placeholderTextColor="#BECCD6"
              bgColor="#fff"
              borderColor="#fff"
              height={50}
              bdWidth={0.1}
              onChangeText={text => {
                setHashText(text), setHashError(false);
              }}
            />
          </View>
        </View>
        <View style={{width: '70%', alignSelf: 'center', marginBottom: 10}}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 17,
            }}>
            Welche Sprache wird in dieser Gruppe gesprochen?
          </Text>
        </View>
        <View style={Styles.errorContainer}>
          {spokenError == true ? (
            <HelperText style={[Styles.helperText, {left: -50}]} type="error">
              {spokenErrorMessage}
            </HelperText>
          ) : null}
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              pressInfo(
                'Hier kannst du angeben welche Sprache oder Sprachen in deiner Gruppe überwiegend gesprochen werden.',
              )
            }>
            <Image
              source={require('../../Assets/Images/info.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'cover',
                right: 10,
                top: 10,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '75%',
              height: languageArray.length > 0 && groupLanguage ? 150 : 45,
              borderRadius: 5,
              backgroundColor: '#fff',
              alignItems: 'flex-start',
              borderWidth: spokenError ? 2 : 1,
              borderColor: spokenError ? '#FF2020' : '#FFF',
            }}>
            <Input
              onFocus={() => {
                setJoinLanguageFocus(false), setGroupLanguageFocus(true);
              }}
              inputWidth={'100%'}
              height={45}
              placeholder="Sprache auswählen"
              placeholderTextColor="#BECCD6"
              icon="available"
              iconPress={() =>
                spokenLanguage != '' ? addSelectLanguage() : null
              }
              imageSource1={
                spokenLanguage == ''
                  ? require('../../Assets/Images/plusGrey.png')
                  : require('../../Assets/Images/plusOrange.png')
              }
              bgColor="#fff"
              borderColor="#fff"
              bdWidth={0.1}
              iconName={'plus'}
              iconColor="#beccd7"
              onChangeText={text => {
                checkLanguage(text), setSpokenError(false);
              }}
              value={spokenLanguage.language}
            />
            {languageArray.length > 0 && groupLanguage ? (
              <ScrollView>
                {languageArray.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectLanguage(item)}
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
        </View>

        <View
          style={{
            width: '75%',
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
        <View style={{width: '80%', alignSelf: 'center', marginBottom: 10}}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 17,
            }}>
            Dürfen andere der Gruppe beitreten, egal welche Sprache sie
            sprechen?
          </Text>
        </View>
        <View style={{width: '100%', flexDirection: 'row', left: 7}}>
          <TouchableOpacity
            onPress={() => setJoinOption('all')}
            style={[
              styles.buttonView,
              joinOption == 'limited' ? {backgroundColor: '#beccd6'} : null,
            ]}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: FontStyle.MontBold,
                color: '#fff',
                textAlign: 'center',
              }}>
              Alle dürfen beitreten
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setJoinOption('limited')}
            style={[
              styles.buttonView,
              joinOption == 'all' ? {backgroundColor: '#beccd6'} : null,
            ]}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: FontStyle.MontBold,
                color: '#fff',
                textAlign: 'center',
              }}>
              Nur folgende Sprachen:
            </Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.errorContainer}>
          {joinError == true ? (
            <HelperText style={[Styles.helperText, {left: -50}]} type="error">
              {joinErrorMessage}
            </HelperText>
          ) : null}
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <TouchableOpacity
            onPress={() =>
              pressInfo(
                'Wenn du nicht willst, dass Personen mit anderen Sprachen deiner Gruppe beitreten können dann kannst du dir hier Sprachen auswählen und nur Personen die deine ausgewählte Sprache sprechen, können deiner Gruppe beitreten. Alle anderen, die nicht die ausgewählte Sprache sprechen, wird diese Gruppe nicht angezeigt.',
              )
            }>
            <Image
              source={require('../../Assets/Images/info.png')}
              style={{
                width: 20,
                height: 20,
                resizeMode: 'cover',
                right: 10,
                top: 10,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              width: '75%',
              height: languageArray.length > 0 && joinLanguageFocus ? 150 : 40,
              borderRadius: 5,
              backgroundColor: '#fff',
              alignItems: 'flex-start',
            }}>
            <Input
              onFocus={() => {
                setJoinLanguageFocus(true), setGroupLanguageFocus(false);
              }}
              inputWidth={'100%'}
              height={50}
              placeholder="Sprache auswählen..."
              placeholderTextColor="#BECCD6"
              bgColor="#fff"
              icon="available"
              iconPress={() =>
                joinedLanguage != '' ? addJoinedLanguage() : null
              }
              imageSource1={
                joinedLanguage == ''
                  ? require('../../Assets/Images/plusGrey.png')
                  : require('../../Assets/Images/plusOrange.png')
              }
              bdWidth={0.1}
              iconName={'plus'}
              borderColor="#fff"
              iconColor="#beccd7"
              onChangeText={text => checkLanguage(text)}
              value={joinedLanguage.language}
            />
            {languageArray.length > 0 && joinLanguageFocus ? (
              <ScrollView>
                {languageArray.map(item => {
                  return (
                    <TouchableOpacity
                      onPress={() => selectJoinLanguage(item)}
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
        </View>
        <View
          style={{
            width: '75%',
            alignSelf: 'flex-start',
            marginLeft: '7%',
            marginVertical: 7,
          }}>
          <FlatList
            data={joinLanguage}
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
                    onPress={() => deleteJoinLanguage(language)}
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
            flexDirection: 'row',
            width: '58%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          {checkedTerms ? (
            <TouchableOpacity onPress={() => setCheckedTerms(false)}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: '#06BA63',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="check" color="#fff" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setCheckedTerms(true), setTermsError(false);
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderColor: termsError ? '#EF3E36' : '#205072',
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          )}

          <Text
            style={{
              fontFamily: FontStyle.MontMedium,
              fontSize: 14,
              color: termsError ? '#EF3E36' : '#205072',
              textAlign: 'left',
              width: '85%',
            }}>
            Mit dem Posten der Gruppe bestätigst du, dass diese nicht gegen
            unsere
            <Text style={{color: '#5c6bdb'}}> AGB</Text> und oder die geltenden
            Gesetzen verstößt
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '58%',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}>
          {checkedConductRules ? (
            <TouchableOpacity onPress={() => setConductRules(false)}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  backgroundColor: '#06BA63',

                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Icon name="check" color="#fff" />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                setConductRules(true), setConductRulesError(false);
              }}>
              <View
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  borderColor: conductRulesError ? '#EF3E36' : '#205072',
                  borderWidth: 2,
                }}
              />
            </TouchableOpacity>
          )}

          <Text
            style={{
              fontFamily: FontStyle.MontMedium,
              fontSize: 14,
              color: conductRulesError ? '#EF3E36' : '#205072',
              textAlign: 'left',
              width: '85%',
            }}>
            Ich verspreche, dass sich diese Gruppe an die
            <Text style={{color: '#5c6bdb'}}> Verhaltensregeln </Text>von
            everygroup hält
          </Text>
        </View>
        <TouchableOpacity onPress={submitButton} style={styles.submitButton}>
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              color: '#fff',
              fontSize: 16,
            }}>
            Gruppe posten
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: '2.5%',
    marginVertical: 5,
  },
  buttonView: {
    width: '37%',
    height: 40,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '1%',
    borderRadius: 10,
  },
  submitButton: {
    height: 40,
    width: 180,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: '5%',
  },
  insideContainer: {
    backgroundColor: '#fff',
    width: '80%',
    borderRadius: 6,
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: '3%',
    marginBottom: 10,
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

export default AddGroup;
