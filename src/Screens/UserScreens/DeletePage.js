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

const DeletePage = () => {
  const navigation = useNavigation();
  const [selectedReason, setSelectedReason] = useState([]);
  const [deleteReason] = useState([
    {
      description:
        'Sei der Erste, der eine Gruppe hochlädt, die ganz genau so ist, wie du sie dir vorstellst! Probier´s doch mal hier aus.',
      value: false,
      option: 'noGroupFound',
      titel: 'Keine Gruppen gefunden die mir gefallen.',
    },
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
    if (selectedReason.some(el => el.option == reason.option)) {
      setSelectedReason(selectedReason.filter(item => item !== reason));
    } else {
      setSelectedReason(prevValue => [...prevValue, reason]);
    }
  };

  return (
    <ScrollView
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

        <ScrollView scrollEnabled={false}>
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
        </ScrollView>

        <View style={{width: '100%', height: 2, backgroundColor: '#DDDFE7'}} />
        <Text
          style={{
            fontFamily: FontStyle.MontMedium,
            fontSize: 14,
            color: '#205072',
            marginVertical: '5%',
          }}>
          Wir werden dich vermissen :(
        </Text>
        <Button buttonText="Löschen" />
        <Text
          style={{
            fontSize: 14,
            fontFamily: FontStyle.MontMedium,
            color: '#205072',
            width: '80%',
            textAlign: 'center',
            marginVertical: '5%',
          }}>
          Wir werden alle Daten von dir löschen und können deswegen dir auch
          keine E-Mail mehr senden. Wenn du mit uns in Kontakt treten willst
          dann sende uns gerne eine Mail an: hey@everygroup.me
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '100%',
    paddingHorizontal: '5%',
    flexDirection: 'row',

    marginVertical: 2.5,
    justifyContent: 'space-between',
  },
  textStyle: {
    fontFamily: FontStyle.MontMedium,
    fontSize: 17,
    color: '#FFA420',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});

export default DeletePage;
