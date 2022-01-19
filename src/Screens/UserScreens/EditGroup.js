import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  ScrollView,
  LayoutAnimation,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Header from '../../Common/Header';
import Styles from './Style';
import EditInput from '../../Common/EditInput';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getGroupDetail} from '../../../Slice/GroupDetailReducer';
import {getLanguage} from '../../../Slice/LanguageReducer';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {updateGroup} from '../../../Slice/UserGroupReducer';
const EditGroup = ({route}) => {
  const {groupId} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [expand, setExpand] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState([]);
  const [groupLanguage, setGroupLanguageFocus] = useState(false);
  const [joinLanguageFocus, setJoinLanguageFocus] = useState(false);
  const [spokenLanguage, setSpokenLanguage] = useState('');
  const [groupTitle, setGroupTitle] = useState('');
  const [groupLink, setGroupLink] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState(['hash']);
  const [languages, setLanguages] = useState([]);
  const [joinLanguage, setJoinLanguage] = useState([]);
  const [joinLanguages, setJoinLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState([]);
  const [joinSelection, setJoinSelection] = useState('all');
  const [joinedLanguage, setJoinedLanguage] = useState('');

  const {groupDetail, error, loading} = useSelector(state => {
    return state.GroupDetailReducer;
  });

  useEffect(() => {
    setGroupTitle(groupDetail.title);
    setGroupLink(groupDetail.group_link);
    setDescription(groupDetail.description);
    setTags(groupDetail.tags);
    setLanguages(groupDetail.languages);
    setJoinLanguages(groupDetail.join_languages);
    setSelectedLanguage(groupDetail.languages);
    setJoinLanguage(groupDetail.join_languages);
    setSelectedCategory(groupDetail.categories);
  }, [groupDetail]);
  console.log(groupDetail, 'eeee');
  useEffect(() => {
    dispatch(getGroupDetail(groupId));
  }, []);

  const {languageArray} = useSelector(state => {
    return state.getLanguage;
  });
  const {categoryArray} = useSelector(state => {
    return state.getCategory;
  });

  const checkLanguage = lang => {
    // setSpokenLanguage(lang);
    if (lang != '') {
      dispatch(getLanguage(lang));
    } else {
      dispatch(getLanguage(''));
    }
  };
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

  const deleteSelectLanguage = item => {
    setSelectedLanguage(
      selectedLanguage.filter(el => el.language !== item.language),
    );
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
  const expandOption = () => {
    setExpand(!expand);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };
  const categroySelection = category => {
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

  const submitGroup = () => {
    dispatch(
      updateGroup({
        groupId,
        groupTitle,
        selectedCategory,
        description,
        tags,
        selectedLanguage,
        joinLanguage,
      }),
    );
  };

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gruppe bearbeiten</Text>
        <View />
      </View>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <EditInput
          value={groupTitle}
          onChangeText={text => setGroupTitle(text)}
        />
        <EditInput value={groupLink} editable={false} />

        <View style={[styles.inputContainer, {height: expand ? 500 : 39}]}>
          <TouchableOpacity
            onPress={expandOption}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 39,
              alignItems: 'center',
            }}>
            {
              <Text
                style={{
                  fontFamily: FontStyle.MontSemiBold,
                  color: '#FFA420',
                  fontSize: 16,
                }}>
                {selectedCategory
                  ? selectedCategory.map(el => {
                      return <Text>{el.category} ,</Text>;
                    })
                  : null}
              </Text>
            }
            <Icons name="caret-down" color="#000" size={20} />
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
                      {selectedCategory.some(item => item.slug === el.slug) ? (
                        <Icons
                          name={'check-square'}
                          size={20}
                          color="#205072"
                          solid
                        />
                      ) : (
                        <Icons name={'square'} size={20} color="#205072" />
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
          {/* <FlatList
            data={category}
            horizontal={true}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    height: '100%',
                    marginRight: 5,
                  }}>
                  <Text
                    style={{
                      fontFamily: FontStyle.MontBold,
                      fontSize: 17,
                      color: '#FFA420',
                    }}>
                    {item.category},
                  </Text>
                </View>
              );
            }}
          /> */}
          {/* <Icon name={'caretdown'} size={20} color="#205072" /> */}
        </View>
        <EditInput
          height={140}
          multiline={true}
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <EditInput
          value={tags ? tags.toString() : null}
          onChangeText={text => setTags(text)}
        />
        <Text
          style={{
            fontSize: 17,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '70%',
            textAlign: 'center',
          }}>
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
        <View
          style={{
            width: '100%',
            height: languageArray.length > 0 && groupLanguage ? 150 : 40,
            borderRadius: 5,
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <EditInput
            onFocus={() => {
              setJoinLanguageFocus(false), setGroupLanguageFocus(true);
            }}
            inputWidth={'100%'}
            // height={languageArray.length > 0 && groupLanguage ? 150 : null}
            placeholder="Sprache auswählen"
            placeholderTextColor="#BECCD6"
            icon="available"
            iconPress={() => addSelectLanguage()}
            imageSource1={
              spokenLanguage == ''
                ? require('../../Assets/Images/plusGrey.png')
                : require('../../Assets/Images/plusOrange.png')
            }
            bgColor="#fff"
            bdWidth={1}
            iconName={'plus'}
            iconColor="#beccd7"
            onChangeText={text => checkLanguage(text)}
            value={spokenLanguage.language}
          />
          {languageArray.length > 0 && groupLanguage ? (
            <ScrollView style={{height: 500}}>
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
        <View
          style={{
            width: '100%',
            alignSelf: 'flex-start',
            marginLeft: '4%',
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
                      fontFamily: FontStyle.MontBold,
                      color: '#205072',
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
                        color: '#205072',
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

        <Text
          style={{
            fontSize: 17,
            fontFamily: FontStyle.MontBold,
            color: '#205072',
            width: '75%',
            textAlign: 'center',
          }}>
          Dürfen alle User der Gruppe beitreten, egal welche Sprache sie
          sprechen?
        </Text>
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
            onPress={() =>
              selectJoinLanguage(
                {language: 'all', code: 'all'},
                setJoinSelection('all'),
              )
            }
            style={[
              styles.buttonView,
              joinSelection == 'limited' ? {backgroundColor: '#beccd6'} : null,
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
            onPress={() => setJoinSelection('limited')}
            style={[
              styles.buttonView,
              joinSelection == 'all' ? {backgroundColor: '#beccd6'} : null,
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
        <View
          style={{
            width: '100%',
            height: languageArray.length > 0 && joinLanguageFocus ? 150 : 40,
            borderRadius: 5,
            backgroundColor: '#fff',
            alignItems: 'center',
          }}>
          <EditInput
            onFocus={() => {
              setJoinLanguageFocus(true), setGroupLanguageFocus(false);
            }}
            inputWidth={'100%'}
            // height={languageArray.length > 0 && joinLanguageFocus ? 150 : null}
            placeholder="Sprache auswählen..."
            placeholderTextColor="#BECCD6"
            bgColor="#fff"
            icon="available"
            iconPress={() => addJoinedLanguage()}
            imageSource1={
              joinedLanguage == ''
                ? require('../../Assets/Images/plusGrey.png')
                : require('../../Assets/Images/plusOrange.png')
            }
            bdWidth={0.1}
            iconName={'plus'}
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
        <View
          style={{
            width: '100%',
            alignSelf: 'flex-start',
            marginLeft: '4%',
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
                      fontFamily: FontStyle.MontBold,
                      color: '#205072',
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
                        color: '#20572',
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
        <TouchableOpacity
          onPress={() => submitGroup()}
          style={{
            backgroundColor: '#205072',
            height: 43,
            width: '50%',
            borderRadius: 11,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              color: '#fff',
              fontSize: 19,
            }}>
            Gruppe ändern
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: '37%',
    height: 35,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    borderRadius: 10,
  },
  inputContainer: {
    height: 40,
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 7,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
    paddingHorizontal: '2.5%',
    marginVertical: '2.5%',
  },
  languageContainer: {
    minWidth: 40,
    maxWidth: 'auto',
    height: 20,
    borderWidth: 1,
    borderColor: '#205072',
    borderRadius: 5,
    marginHorizontal: 5,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2.5,
    marginTop: 10,
  },
});

export default EditGroup;
