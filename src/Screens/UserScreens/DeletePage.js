import React, {useState} from 'react';
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
} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Button from '../../Common/Button';
import AlertModal from '../../Common/AlertModal';
import Input from '../../Common/Input';

const DeletePage = () => {
  const navigation = useNavigation();
  const [noGroupFound, setNoGroupFound] = useState(false);
  const [badExperience, setBadExperience] = useState(false);
  const [notSatisfy, setNotSatisfy] = useState(false);
  const [technicalProb, setTechnicalProb] = useState(false);
  const [tooMuch, setTooMuch] = useState(false);
  const [notificationCheck, setNotificationCheck] = useState(false);
  const [conceptCheck, setConceptCheck] = useState(false);
  const [differentReason, setDifferentReason] = useState(false);
  const [dontInformation, setDontInformation] = useState(false);
  const [selectedReason, setSelectedReason] = useState([]);
  const [deleteReason] = useState([
    {
      description:
        'Das tut uns sehr leid.. Solltest du Erfahrungen gesammelt haben, die dich belasten oder rechtswidrig sind, findest du in unseren Verhaltensregeln Stellen, an die du dich wenden kannst, um professionelle Hilfe zu erhalten.',
      value: false,
      option: 'badExperience',
      titel: 'Ich habe schlechte Erfahrungen in Gruppen gesammelt.',
    },
    {
      titel: 'Ich bin mit den Funktionen von everygroup nicht zufrieden.',
      description:
        'Wir freuen uns immer über Post von dir! Solltest du Vorschläge, Kritik oder Anregungen haben, kannst du dich immer gerne an uns wenden unter: hey@everygroup.me',
      value: false,
      option: 'functionalitySatification',
    },
    {
      titel: 'Es gibt technische Probleme.',
      description:
        'Hilf uns die Fehler zu finden und everygroup von Bugs zu befreien! Schick uns eine kurze formlose E-Mail an: developer@evergroup.me und beschreibe dein Problem.',
      value: false,
      option: 'technicalProblem',
    },
    {
      titel: 'Ich nutze everygroup zu viel.',
      description:
        'In den Systemeinstellungen deines Handys kannst du ein Zeitlimit für deine Apps einstellen. So musst du everygroup nicht löschen.',
      value: false,
      option: 'toMuchUse',
    },
    {
      titel: 'Die Benachrichtigungen stören.',
      description:
        'Unter Benachrichtigungen hast du volle Kontrolle über all deine Benachrichtigungen, die wir dir schicken. Haben die Einstellung nicht umsonst reingemacht.',
      value: false,
      option: 'notificationInterfer',
    },
    {
      titel: 'Mir gefällt das Konzept von everygroup nicht.',
      //   description: 'Mir gefällt das Konzept von everygroup nicht.',
      value: false,
      option: 'dontLikeConcept',
    },
    {
      titel: 'Andere Gründe.',
      //   description: 'Andere Gründe.',
      value: false,
      option: 'differentReason',
    },
    {
      titel: 'Ich will keine Angaben machen.',
      description: 'Ich will keine Angaben machen.',
      value: false,
      option: 'noReason',
    },
  ]);

  const reasonSelection = reason => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (selectedReason.some(el => el == reason)) {
      setSelectedReason(selectedReason.filter(item => item !== reason));
    } else {
      setSelectedReason(prevValue => [...prevValue, reason]);
    }
  };

  console.log(selectedReason);

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 100}}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#fff'}}>
      <AlertModal
        modalValue={false}
        message="Account wirklich löschen?"
        description=" "
      />
      <View
        style={{
          paddingTop: '25%',
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

        {/* <ScrollView scrollEnabled={false}>
          {deleteReason.map(item => {
            return (
              <View>
                <View
                  style={{
                    width: '100%',
                    height: 2,
                    backgroundColor: '#DDDFE7',
                  }}
                />

                <View
                  style={[
                    styles.container,
                    selectedReason.some(el => el.option == item.option)
                      ? {height: 'auto', alignItems: 'flex-start'}
                      : {height: 50, alignItems: 'center'},
                  ]}>
                  <View style={{width: '85%'}}>
                    <TouchableWithoutFeedback
                      onPress={() => reasonSelection(item)}>
                      <Text style={styles.textStyle}>{item.titel}</Text>
                    </TouchableWithoutFeedback>
                    {selectedReason.some(el => el.option == item.option) ? (
                      <Text
                        style={{
                          fontFamily: FontStyle.MontBold,
                          color: '#82C2F1',
                          fontSize: 14,
                          marginVertical: '2.5%',
                        }}>
                        {item.description}
                      </Text>
                    ) : null}
                    {selectedReason.some(
                      el =>
                        el.option == 'differentReason' &&
                        el.option == item.option,
                    ) ? (
                      <TextInput
                        placeholder="Hier Gründe eintragen.."
                        placeholderTextColor="#FF3434"
                        multiline={true}
                        style={styles.inputStyle}
                      />
                    ) : null}
                  </View>
                  <View style={{width: '10%'}}>
                    <TouchableWithoutFeedback
                      onPress={() => reasonSelection(item)}>
                      {selectedReason.some(el => el.option == item.option) ? (
                        <Icon name={'check-square'} size={20} color="#205072" />
                      ) : (
                        <Icon name={'square'} size={20} color="#205072" />
                      )}
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView> */}

        <View style={{width: '100%', height: 2, backgroundColor: '#DDDFE7'}} />
        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Keine Gruppen gefunden die mir gefallen.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {noGroupFound ? (
                <TouchableOpacity
                  onPress={() => {
                    setNoGroupFound(false), reasonSelection('noGroupFound');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setNoGroupFound(true), reasonSelection('noGroupFound');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {noGroupFound ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              Sei der Erste, der eine Gruppe hochlädt, die ganz genau so ist,
              wie du sie dir vorstellst! Probier´s doch mal
              <Text style={{color: '#FFA420'}}> hier</Text> aus.
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />
        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Ich habe schlechte Erfahrungen in Gruppen gesammelt.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {badExperience ? (
                <TouchableOpacity
                  onPress={() => {
                    setBadExperience(false),
                      setNoGroupFound(false),
                      reasonSelection('badExperience');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setBadExperience(true),
                      setNoGroupFound(false),
                      reasonSelection('badExperience');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {badExperience ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              Das tut uns sehr leid.. Solltest du Erfahrungen gesammelt haben,
              die dich belasten oder rechtswidrig sind, findest du in unseren
              <Text style={{color: '#FFA420'}}> Verhaltensregeln </Text>Stellen,
              an die du dich wenden kannst, um professionelle Hilfe zu erhalten.
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Ich bin mit den Funktionen von everygroup nicht zufrieden.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {notSatisfy ? (
                <TouchableOpacity
                  onPress={() => {
                    setNotSatisfy(false),
                      setNoGroupFound(false),
                      reasonSelection('noSatisfy');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setNotSatisfy(true),
                      setNoGroupFound(false),
                      reasonSelection('noSatisfy');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {notSatisfy ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              Wir freuen uns immer über Post von dir! Solltest du Vorschläge,
              Kritik oder Anregungen haben, kannst du dich immer gerne an uns
              wenden unter: hey@everygroup.me
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>Es gibt technische Probleme.</Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {technicalProb ? (
                <TouchableOpacity
                  onPress={() => {
                    setTechnicalProb(false),
                      setNoGroupFound(false),
                      reasonSelection('technicalProb');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setTechnicalProb(true),
                      setNoGroupFound(false),
                      reasonSelection('technicalProb');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {technicalProb ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              Hilf uns die Fehler zu finden und everygroup von Bugs zu befreien!
              Schick uns eine kurze formlose E-Mail an: developer@evergroup.me
              und beschreibe dein Problem.
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Ich nutze everygroup zu viel.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {tooMuch ? (
                <TouchableOpacity
                  onPress={() => {
                    setTooMuch(false),
                      setNoGroupFound(false),
                      reasonSelection('tooMuch');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setTooMuch(true),
                      setNoGroupFound(false),
                      reasonSelection('tooMuch');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {tooMuch ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              In den Systemeinstellungen deines Handys kannst du ein Zeitlimit
              für deine Apps einstellen. So musst du everygroup nicht löschen.
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Die Benachrichtigungen stören.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {notificationCheck ? (
                <TouchableOpacity
                  onPress={() => {
                    setNotificationCheck(false),
                      setNoGroupFound(false),
                      reasonSelection('notificationCheck');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setNotificationCheck(true),
                      setNoGroupFound(false),
                      reasonSelection('notificationCheck');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {notificationCheck ? (
            <Text
              style={{
                fontFamily: FontStyle.MontMediumIta,
                color: '#82C2F1',
                fontSize: 14,
                paddingHorizontal: '2.5%',
                width: '80%',
              }}>
              Unter Benachrichtigungen hast du volle Kontrolle über all deine
              Benachrichtigungen, die wir dir schicken. Haben die Einstellung
              nicht umsonst reingemacht.
            </Text>
          ) : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Mir gefällt das Konzept von everygroup nicht.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {conceptCheck ? (
                <TouchableOpacity
                  onPress={() => {
                    setConceptCheck(false),
                      setNoGroupFound(false),
                      reasonSelection('conceptCheck');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setConceptCheck(true),
                      setNoGroupFound(false),
                      reasonSelection('conceptCheck');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>Andere Gründe.</Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {differentReason ? (
                <TouchableOpacity
                  onPress={() => {
                    setDifferentReason(false),
                      setNoGroupFound(false),
                      reasonSelection('differentReason');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setDifferentReason(true),
                      setNoGroupFound(false),
                      reasonSelection('differentReason');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
          {differentReason ? <TextInput placeholder="alsdjfla" /> : null}
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

        <View style={{width: '100%'}}>
          <View style={styles.container}>
            <Text style={[styles.textStyle]}>
              Ich will keine Angaben machen.
            </Text>
            <View
              style={{
                width: '15%',
                alignItems: 'center',
              }}>
              {dontInformation ? (
                <TouchableOpacity
                  onPress={() => {
                    setDontInformation(false),
                      setNoGroupFound(false),
                      reasonSelection('dontInfo');
                  }}>
                  <Image
                    source={require('../../Assets/Images/check.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    setDontInformation(true),
                      setNoGroupFound(false),
                      reasonSelection('dontInfo');
                  }}>
                  <Image
                    source={require('../../Assets/Images/uncheck.png')}
                    style={{height: 22, width: 22, resizeMode: 'contain'}}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: '#DDDFE7',
            marginTop: 10,
          }}
        />

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
          <Button buttonText="Löschen" />
        ) : (
          <View style={styles.buttonView}>
            <Text
              style={{
                fontSize: 21,
                fontFamily: FontStyle.MontExtBold,
                textAlign: 'center',
                color: '#ffffff',
              }}>
              Löschen
            </Text>
          </View>
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
    </ScrollView>
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
    fontSize: 17,
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
