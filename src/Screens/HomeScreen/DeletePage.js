import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  LayoutAnimation,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Common/Button';
import AlertModal from '../../Common/AlertModal';
import Input from '../../Common/Input';
import {useDispatch, useSelector} from 'react-redux';
import {getDeleteOption} from '../../../Slice/GetDeleteUserOptionReducer';
import Header from '../../Common/Header';
import {deleteUser} from '../../../Slice/DeleteUserReducer';
import {resetToken} from '../../../Slice/AuthReducer';
import DeleteModal from '../UserScreens/deleteModal';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const arr = ['hier', 'Verhaltensregeln'];

const DeletePage = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const [noGroupFound, setNoGroupFound] = useState(false);
  // const [badExperience, setBadExperience] = useState(false);
  // const [notSatisfy, setNotSatisfy] = useState(false);
  // const [technicalProb, setTechnicalProb] = useState(false);
  // const [tooMuch, setTooMuch] = useState(false);
  // const [notificationCheck, setNotificationCheck] = useState(false);
  // const [conceptCheck, setConceptCheck] = useState(false);
  // const [differentReason, setDifferentReason] = useState(false);
  // const [dontInformation, setDontInformation] = useState(false);
  const [otherText, setOtherText] = useState('');
  const [selectedReason, setSelectedReason] = useState([]);
  const [selectionOption, setSelectionOption] = useState('');
  const [deleteModalValue, setDeleteModal] = useState(false);

  const reasonSelection = (slug, id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (selectedReason.some(el => el.id == id)) {
      setSelectedReason(selectedReason.filter(item => item.id !== id));
    } else {
      setSelectedReason(prevValue => [...prevValue, {slug, id}]);
    }
  };

  useEffect(() => {
    dispatch(getDeleteOption());
  }, []);

  const {deleteOption} = useSelector(state => {
    return state.GetDeleteUserOptionReducer;
  });

  const selectedWordIndex = index => {
    if (index == 0) {
      setSelectionOption('plus');
    } else {
      navigation.navigate('BehaviourRules');
    }
  };

  const {deleteAccount} = useSelector(state => {
    console.log(state.DeleteUserReducer);
    return state.DeleteUserReducer;
  });

  useEffect(() => {
    if (deleteAccount == 'success') {
      setDeleteModal(false);
      AsyncStorageLib.clear();
      // dispatch(resetToken());

      navigation.navigate('SplashScreen');
    }
  }, [deleteAccount]);

  const deleteUserOption = () => {
    dispatch(deleteUser({selectedReason, otherText}));
  };

  return (
    <SafeAreaView style={{height: '100%', backgroundColor: '#fff'}}>
      <Header
        selectionOption={selectionOption}
        closeAddGroup={() => setSelectionOption('')}
      />
      <DeleteModal
        modalValue={deleteModalValue}
        message="Account wirklich löschen?"
        buttonLeftColor="#205072"
        buttonRightColor="#EF3E36"
        deletePress={() => deleteUserOption()}
        closeModal={() => setDeleteModal(false)}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: '5%'}}
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: '#fff'}}>
        <AlertModal
          modalValue={false}
          message="Account wirklich löschen?"
          description=" "
        />
        <View
          style={{
            paddingTop: '15%',
            height: '100%',
            backgroundColor: '#fff',
            alignItems: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            style={{
              alignSelf: 'flex-start',
              paddingHorizontal: '2.5%',
              marginTop: '5%',
            }}
            onPress={() => navigation.goBack()}>
            <Image
              source={require('../../Assets/Images/back.png')}
              style={{
                width: 23,
                height: 23,
                resizeMode: 'contain',
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              fontSize: 20,
              color: '#205072',
              width: '75%',
              textAlign: 'center',
              marginVertical: '2%',
            }}>
            Warum willst du deinen Account löschen?
          </Text>

          {deleteOption.map((item, index) => {
            return (
              <View
                style={{
                  width: '100%',
                }}>
                <View
                  style={[
                    styles.container,
                    selectedReason.some(
                      el =>
                        (el.id == item.id && item.description.length > 0) ||
                        item.slug == 'andere-grunde',
                    )
                      ? {height: 'auto', alignItems: 'flex-start'}
                      : {height: 50, alignItems: 'center'},
                  ]}>
                  <View style={{width: '85%'}}>
                    <TouchableWithoutFeedback
                      onPress={() => reasonSelection(item.slug, item.id)}>
                      <Text style={styles.textStyle}>{item.title}</Text>
                    </TouchableWithoutFeedback>
                    {selectedReason.some(
                      el => el.id == item.id && item.description.length > 0,
                    ) ? (
                      <Text
                        style={{
                          fontFamily: FontStyle.MontBold,
                          color: '#82C2F1',
                          fontSize: 12,
                          marginVertical: '2.5%',
                        }}>
                        {item.description.split(arr[index]).map((el, i) => {
                          return (
                            <>
                              <Text>{el}</Text>
                              {item.description.split(arr[index]).length - 1 !==
                                i && (
                                <Text
                                  onPress={() => selectedWordIndex(index)}
                                  style={{
                                    color: '#FFA420',
                                    fontFamily: FontStyle.MontMedium,
                                  }}>
                                  {arr[index]}
                                </Text>
                              )}
                            </>
                          );
                        })}
                      </Text>
                    ) : null}

                    {selectedReason.some(
                      el => el.slug == 'andere-grunde' && el.slug == item.slug,
                    ) ? (
                      <TextInput
                        placeholder="Hier Gründe eintragen.."
                        placeholderTextColor="#FF3434"
                        multiline={true}
                        style={styles.inputStyle}
                        onChangeText={text => setOtherText(text)}
                      />
                    ) : null}
                  </View>
                  <View style={{width: '10%'}}>
                    <TouchableWithoutFeedback
                      onPress={() => reasonSelection(item.slug, item.id)}>
                      {selectedReason.some(el => el.id == item.id) ? (
                        <Image
                          source={require('../../Assets/Images/check.png')}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            left: 10,
                          }}
                        />
                      ) : (
                        <Image
                          source={require('../../Assets/Images/uncheck.png')}
                          style={{
                            width: 24,
                            height: 24,
                            resizeMode: 'contain',
                            left: 10,
                          }}
                        />
                      )}
                    </TouchableWithoutFeedback>
                  </View>
                </View>
                <View
                  style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: '#DDDFE7',
                  }}
                />
              </View>
            );
          })}

          <Text
            style={{
              fontFamily: FontStyle.MontMedium,
              fontSize: 14,
              color: '#205072',
              marginVertical: '5%',
            }}>
            Wir werden dich vermissen :(
          </Text>
          {selectedReason.length > 0 ? (
            <Button
              onPress={() => setDeleteModal(true)}
              buttonText="Löschen"
              buttonColor1="#FF3434"
              buttonColor2="#FF3434"
            />
          ) : (
            <TouchableOpacity style={styles.buttonView}>
              <Text
                style={{
                  fontSize: 21,
                  fontFamily: FontStyle.MontExtBold,
                  textAlign: 'center',
                  color: '#ffffff',
                }}>
                Löschen
              </Text>
            </TouchableOpacity>
          )}
          <Text style={[styles.buttonText, {marginTop: '5%'}]}>
            Wir werden alle Daten von dir löschen und können deswegen dir auch
            keine E-Mail mehr senden. Wenn du mit uns in Kontakt treten willst
            dann sende uns gerne eine Mail an:
          </Text>
          <Text style={[styles.buttonText, {textDecorationLine: 'underline'}]}>
            hey@everygroup.me
          </Text>
        </View>
        <View style={{paddingTop: '2%'}}>
          <Image
            source={require('../../Assets/Images/greyLogo.png')}
            style={{
              width: 94,
              height: 40,
              resizeMode: 'contain',
              alignSelf: 'center',
              bottom: 30,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingHorizontal: '2.5%',
    flexDirection: 'row',
    marginVertical: 2.5,

    alignItems: 'center',
  },
  textStyle: {
    fontFamily: FontStyle.MontMedium,
    fontSize: 15,
    color: '#FFA420',
    alignItems: 'center',
    width: '80%',
  },
  inputStyle: {
    height: 100,
    width: '100%',
    borderWidth: 1,
    borderColor: '#FF3434',
    borderRadius: 5,
    marginBottom: '5%',
    paddingHorizontal: '2.5%',
  },
  buttonView: {
    minHeight: 40,
    maxHeight: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: 206,
    backgroundColor: '#BCBCBC',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: FontStyle.MontMedium,
    color: '#205072',
    width: '80%',
    textAlign: 'center',
  },
});

export default DeletePage;
