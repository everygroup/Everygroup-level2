import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import Styles from './Style';
import Header from '../../Common/Header';
import FontStyle from '../../Assets/Fonts/FontStyle';
import SwitchToggle from 'react-native-switch-toggle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

const Notification = () => {
  const [generallySwitch, setGenerallySwitch] = useState(true);
  const [personSwitch, setPersonSwitch] = useState(true);
  const [searchSwitch, setSearchSwitch] = useState(true);
  const [emailSwitch, setEmailSwitch] = useState(true);

  const navigation = useNavigation();

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
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
        <Text style={Styles.headingText}>Benachrichtigungen</Text>
        <View />
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Allgemein</Text>
          <SwitchToggle
            switchOn={generallySwitch}
            onPress={() => setGenerallySwitch(!generallySwitch)}
            circleColorOff="#fff"
            circleColorOn="#fff"
            backgroundColorOff="#BECCD6"
            backgroundColorOn="#205072"
            containerStyle={styles.switchContainer}
            circleStyle={styles.switchCircle}
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
          <Icon
            name="chevron-right"
            size={30}
            color="#FFA420"
            onPress={() => navigation.navigate('NotificationOwnGroup')}
          />
        </View>

        <Text style={styles.descriptionText}>
          Hier tippen, für die Verwaltung der Reupload- und
          Boosterbenachrichtigungen deiner Gruppen
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>Personen</Text>

          <SwitchToggle
            switchOn={personSwitch}
            onPress={() => setPersonSwitch(!personSwitch)}
            circleColorOff="#fff"
            circleColorOn="#fff"
            backgroundColorOff="#BECCD6"
            backgroundColorOn="#205072"
            containerStyle={styles.switchContainer}
            circleStyle={styles.switchCircle}
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

          <SwitchToggle
            switchOn={searchSwitch}
            onPress={() => setSearchSwitch(!searchSwitch)}
            circleColorOff="#fff"
            circleColorOn="#fff"
            backgroundColorOff="#BECCD6"
            backgroundColorOn="#205072"
            containerStyle={styles.switchContainer}
            circleStyle={styles.switchCircle}
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
          <Icon
            name="chevron-right"
            size={30}
            color="#FFA420"
            onPress={() => navigation.navigate('NotificationGroupBooster')}
          />
        </View>

        <Text style={styles.descriptionText}>
          Hier tippen, um Benachrichtigungen von jeder Gruppe der du ein Boost
          gegeben hast, zu verwalten
        </Text>
      </View>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.titleText}>E-Mail</Text>
          <SwitchToggle
            switchOn={emailSwitch}
            onPress={() => setEmailSwitch(!emailSwitch)}
            circleColorOff="#fff"
            circleColorOn="#fff"
            backgroundColorOff="#BECCD6"
            backgroundColorOn="#205072"
            containerStyle={styles.switchContainer}
            circleStyle={styles.switchCircle}
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
    fontSize: 20,
  },
  descriptionText: {
    color: '#C7C7C7',
    fontSize: 12,
    fontFamily: FontStyle.MontSemiBold,
    width: '80%',
  },
  switchContainer: {
    width: 29,
    height: 13,
    borderRadius: 5,
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

export default Notification;
