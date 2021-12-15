import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  LayoutAnimation,
  TouchableWithoutFeedback,
} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontStyle from '../../Assets/Fonts/FontStyle';
import InfoModal from '../InfoModal';
import {HelperText} from 'react-native-paper';
import Styles from '../../Screens/UserScreens/Style';
import {FlatList} from 'react-native-gesture-handler';

const AddGroup = () => {
  const [category] = useState([
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
    'LQBTQ+',
    'RPG',
    'Unterhaltung',
    'Technik',
    'Sport',
    'Dienstleistungen',
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedInfo, setSelectInfo] = useState('');
  const [modalValue, setModalValue] = useState(false);
  const [titel, setTitel] = useState('');
  const [titelError, setTitelError] = useState(false);
  const [groupLink, setGroupLink] = useState('');
  const [groupLinkError, setGroupLinkError] = useState(false);
  const [hashValue, setHashValue] = useState('');
  const [hashError, setHashError] = useState(false);
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedConductRules, setConductRules] = useState(false);
  const [expand, setExpand] = useState(false);

  const pressInfo = message => {
    setSelectInfo(message);
    setModalValue(true);
  };

  const submitButton = () => {
    if (titel == '') {
      setTitelError(true);
    } else if (groupLink == '') {
      setGroupLinkError(true);
    } else {
      alert('Submitted Successfully');
    }
  };

  const expandOption = () => {
    setExpand(!expand);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const categroySelection = category => {
    // const newArray = [...selectedCategory];
    if (selectedCategory.some(el => el == category)) {
      setSelectedCategory(selectedCategory.filter(item => item !== category));
    } else if (selectedCategory.length >= 3) {
      setSelectedCategory([
        ...selectedCategory.filter((item, index) => index !== 0),
        category,
      ]);
    } else {
      setSelectedCategory(prevValue => [...prevValue, category]);
    }

    // const newArray = [...selectedCategory, category];
    // if (selectedCategory.some(el => el == category)) {
    //   setSelectedCategory(selectedCategory.filter(item => item !== category));
    // } else if (newArray.length > 3) {
    //   setSelectedCategory(newArray.filter((item, index) => index !== 0));
    // } else {

    //   setSelectedCategory(newArray);
    // }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        alignItems: 'center',
        alignSelf: 'center',
        paddingBottom: '10%',
      }}>
      <InfoModal
        modalValue={modalValue}
        message={selectedInfo}
        closeModal={() => setModalValue(false)}
        closeModal={() => setModalValue(false)}
      />
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          alignSelf: 'center',
          fontFamily: FontStyle.MontBold,
          marginVertical: '5%',
        }}>
        Gruppe hinzufügen
      </Text>
      <View>
        {titelError == true ? (
          <HelperText style={[Styles.helperText, {left: '5%'}]} type="error">
            Gruppentitel eingeben
          </HelperText>
        ) : null}
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
            bdWidth={titelError ? 2 : 0.1}
            borderColor={titelError ? 'red' : null}
            onChangeText={text => {
              setTitel(text);
              setTitelError(false);
            }}
          />
        </View>
      </View>
      <View>
        {groupLinkError == true ? (
          <HelperText style={[Styles.helperText, {left: '5%'}]} type="error">
            Gruppentitel eingeben
          </HelperText>
        ) : null}
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
            bdWidth={groupLinkError ? 2 : 0.1}
            borderColor={groupLinkError ? 'red' : null}
            onChangeText={text => {
              setGroupLink(text);
              setGroupLinkError(false);
            }}
          />
        </View>
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
        <View style={[styles.insideContainer, {height: expand ? 500 : 39}]}>
          <TouchableOpacity
            onPress={expandOption}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 39,
            }}>
            <Text
              style={{
                fontFamily: FontStyle.MontSemiBold,
                color: '#FFA420',
                fontSize: 17,
              }}>
              Kategorie
            </Text>
            <Icon name="caret-down" color="#000" size={20} />
          </TouchableOpacity>
          {expand ? (
            <ScrollView showsVerticalScrollIndicator={false}>
              {category.map(el => {
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
                          fontSize: 17,
                          color: '#FFA420',
                        }}>
                        {el}
                      </Text>
                      {selectedCategory.some(item => item === el) ? (
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
      <View style={[styles.container]}>
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
        <Input
          placeholder="Beschreibung"
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View>
        {hashError == true ? (
          <HelperText style={[Styles.helperText, {left: '5%'}]} type="error">
            Gruppentitel eingeben
          </HelperText>
        ) : null}
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
            bdWidth={0.1}
            onChangeText={text => {
              setHashValue(text);
              setHashError(false);
            }}
          />
        </View>
      </View>
      <View style={{width: '70%', alignSelf: 'center', marginVertical: '5%'}}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: FontStyle.MontSemiBold,
            fontSize: 15,
          }}>
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
      </View>
      <View style={styles.container}>
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
              bottom: 5,
            }}
          />
        </TouchableOpacity>
        <Input
          placeholder="sprache auswählen"
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View style={{width: '70%', alignSelf: 'center', marginVertical: '5%'}}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: FontStyle.MontSemiBold,
            fontSize: 15,
          }}>
          Dürfen andere der Gruppe beitreten, egal welche Sprache sie sprechen?
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.buttonView}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FontStyle.MontBold,
              color: '#fff',
            }}>
            alle dürfen beitreten
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonView, {backgroundColor: '#beccd6'}]}>
          <Text
            style={{
              fontSize: 12,
              fontFamily: FontStyle.MontBold,
              color: '#fff',
            }}>
            nur folgende Sprachen:
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
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
              bottom: 5,
            }}
          />
        </TouchableOpacity>
        <Input
          placeholder="Sprache auswählen..."
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '58%',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 10,
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
          <TouchableOpacity onPress={() => setCheckedTerms(true)}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: '#205072',
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>
        )}

        <Text
          style={{
            fontFamily: FontStyle.MontMedium,
            fontSize: 12,
            color: '#205072',
            textAlign: 'left',
            width: '85%',
          }}>
          Mit dem Posten der Gruppe bestätigst du, dass diese nicht gegen unsere
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
          marginVertical: 10,
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
          <TouchableOpacity onPress={() => setConductRules(true)}>
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 10,
                borderColor: '#205072',
                borderWidth: 2,
              }}
            />
          </TouchableOpacity>
        )}

        <Text
          style={{
            fontFamily: FontStyle.MontMedium,
            fontSize: 12,
            color: '#205072',
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
          style={{fontFamily: FontStyle.MontBold, color: '#fff', fontSize: 16}}>
          Gruppe posten
        </Text>
      </TouchableOpacity>
    </ScrollView>
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
    width: '40%',
    height: 35,
    backgroundColor: '#205072',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
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
    paddingHorizontal: '5%',
  },
});

export default AddGroup;
