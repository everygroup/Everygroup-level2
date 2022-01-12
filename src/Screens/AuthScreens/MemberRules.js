import React, {useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import FontStyle from '../../Assets/Fonts/FontStyle';
import GroupCard from '../../Common/GroupCard';
import Styles from '../UserScreens/Style';

const MemberRule = () => {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingBottom: '5%'}}
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
      }}>
      <Text style={Styles.headingText}>
        Verhatlensregeln für Gruppenmitglieder
      </Text>
      <Text style={styles.descriptionText}>
        Als Team von everygroup sehen wir uns dazu verpflichtet, uns um einen
        verantwortungs- und respektvollen Umgang miteinander zu bemühen und eine
        Atmosphäre zu schaffen, bei der sich jeder wohl und aufgeklärt fühlt. So
        sind die nachfolgenden Verhaltensregeln nicht nur einfach Teil unserer
        AGB, sondern dienen als ethische Grundlage für eine verantwortungsvolle
        Nutzung von everygroup.
      </Text>
      <Text style={[styles.headingText]}>Gruppen beitreten</Text>
      <Text style={styles.descriptionText}>
        Auf everygroup kannst du Gruppen verschiedener Messenger beitreten. Sei
        dir darüber bewusst, dass nach Beitreten einer Gruppe, deine Nummer
        sichtbar ist für jeden der ebenfalls in dieser Gruppe ist oder ihr
        beitreten möchte. Wenn du damit nicht einverstanden bist, kannst du als
        alternative dir eine weitere Telefonnummer zulegen und diese nutzen,
        statt deiner Privaten. Außerdem kannst du Gruppen von Discord und
        Snapchat beitreten ohne, dass hierbei deine Nummer sichtbar ist.
      </Text>
      <Text style={styles.headingText}>Umgang in der Gruppe</Text>
      <Text style={styles.descriptionText}>
        Wir distanzieren uns von Mobbing, Gewaltverherrlichung, Terrorismus,
        Rassismus und jeglichen Themen, in denen andere zu Schaden kommen oder
        die illegalen Inhalt enthalten. So erwarten wir auch von dir, dass du
        verantwortungs- und respektvoll mit anderen im Chat umgehst. Wenn du
        selbst Opfer wirst oder mit bekommst, wie Verstöße gegen unseren
        Verhaltenskodex oder bestehenden Gesetzen stattfinden dann hast du die
        Möglichkeit dich an eine Beratungsstelle der Polizei zu wenden. Am Ende
        der Verhaltensregeln findest du einen Kontakt zu der Beratungsstelle.
        Zusätzlich hast du die Möglichkeit dem Admin der Gruppe zu schreiben,
        dass er Konflikte innerhalb der Gruppen schlichten soll oder die Person
        komplett aus der Gruppe zu schmeißen. Auf everygroup hast du außerdem
        die Möglichkeit Gruppen zu melden, wodurch diese nach einer Prüfung
        entfernt werden. Keine der beiden letzten Optionen ersetzt jedoch eine
        polizeiliche Beratung.
      </Text>
      <Text style={styles.headingText}>Privates anschreiben</Text>
      <Text style={styles.descriptionText}>
        Schreibe keine Person aus der Gruppe privat an, ohne das vorher im
        Gruppenchat mit ihr geklärt und dir ein explizites Einverständnis
        eingeholt zu haben.
      </Text>
      <Text style={styles.headingText}>18+ Gruppen</Text>
      <Text style={styles.descriptionText}>
        Solange du noch nicht das 18. Lebensjahr erreicht hast, ist es dir
        untersagt Gruppen beizutreten die ab 18 sind.
      </Text>
      <Text style={styles.headingText}>
        Kontakt zur Beratungsstelle der Polizei
      </Text>
      <Text style={styles.descriptionText}>
        www.polizei-beratung.de/kontakt/
      </Text>
      <Text style={[styles.descriptionText, {marginTop: '5%'}]}>
        Mit der Nutzung von everygroup versprichst du uns, dich an den
        Verhaltenskodex zu halten. Solltest du dich nicht an den Verhaltenskodex
        halten, werden wir deinen Account temporär Blockieren oder eine
        vollständige Löschung deines Accounts einleiten oder andere Schritte
        einleiten, die wir für Sinnvoll erachten.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontFamily: FontStyle.poppinsBold,
    fontSize: 16,
    color: '#205072',
    marginTop: '5%',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontFamily: FontStyle.poppinsMedium,
    fontSize: 14,
    color: '#205072',
    alignSelf: 'flex-start',
  },
});

export default MemberRule;
