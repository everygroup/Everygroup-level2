import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Notification = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [generallySwitch, setGenerallySwitch] = useState(true);
  const [personSwitch, setPersonSwitch] = useState(true);
  const [searchSwitch, setSearchSwitch] = useState(true);
  const [emailSwitch, setEmailSwitch] = useState(true);

  const menuIconPress = value => {
    if (selectedOption == value) {
      setSelectedOption('');
    } else {
      setSelectedOption(value);
    }
  };

  return (
    <View style={Styles.mainContainer}>
      <Header
        menuIconPress={() => menuIconPress('menu')}
        selectedOption={selectedOption}
        searchIconPress={() => menuIconPress('search')}
        plusIconPress={() => menuIconPress('plus')}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <Image
          source={require('../../Assets/Images/back.png')}
          style={{width: 23, height: 23, resizeMode: 'contain'}}
        />
        <Text style={Styles.headingText}>Benachrichtigungen</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Allgemein</Text>
          <Switch
            color="#205072"
            value={generallySwitch}
            onValueChange={() => setGenerallySwitch(!generallySwitch)}
            style={{transform: [{scaleX: 0.65}, {scaleY: 0.6}]}}
          />
        </View>

        <Text style={styles.descriptionText}>
          Ich möchte über allgemeine Produktinfos, Tipps oder Gewinnspielen,
          benachrichtigen werden.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Eigene Gruppen</Text>
          <Icon name="chevron-right" size={30} color="#FFA420" />
        </View>

        <Text style={styles.descriptionText}>
          Hier tippen, für die Verwaltung der Reupload- und
          Boosterbenachrichtigungen deiner Gruppen
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Personen</Text>
          <Switch
            color="#205072"
            value={personSwitch}
            onValueChange={() => setPersonSwitch(!personSwitch)}
            style={{transform: [{scaleX: 0.65}, {scaleY: 0.6}]}}
          />
        </View>

        <Text style={styles.descriptionText}>
          Ich möchte auf neu hinzugefügt Gruppen, von gespeicherten Personen,
          hingewiesen werden.
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Suche</Text>
          <Switch
            color="#205072"
            value={searchSwitch}
            onValueChange={() => setSearchSwitch(!searchSwitch)}
            style={{transform: [{scaleX: 0.65}, {scaleY: 0.6}]}}
          />
        </View>

        <Text style={styles.descriptionText}>
          Ich möchte benachrichtigt werden, wenn es für meine gespeicherte Suche
          neue Gruppen gibt. (Einmal alle 24h)
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Gruppenbooster</Text>
          <Icon name="chevron-right" size={30} color="#FFA420" />
        </View>

        <Text style={styles.descriptionText}>
          Hier tippen, um Benachrichtigungen von jeder Gruppe der du ein Boost
          gegeben hast, zu verwalten
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>E-Mail</Text>
          <Switch
            color="#205072"
            value={emailSwitch}
            onValueChange={() => setEmailSwitch(!emailSwitch)}
            style={{transform: [{scaleX: 0.65}, {scaleY: 0.6}]}}
          />
        </View>

        <Text style={styles.descriptionText}>
          Ich möchte E-Mails erhalten mit Produktinfos, Tipps und Gewinnspielen
          rund um everygroup.
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%',
    height: '10%',
  },
  titleText: {
    color: '#FFA420',
    fontFamily: FontStyle.MontSemiBold,
    fontSize: 18,
  },
  descriptionText: {
    color: '#C7C7C7',
    fontSize: 10,
    fontFamily: FontStyle.MontSemiBold,
    width: '80%',
  },
});

export default Notification;
