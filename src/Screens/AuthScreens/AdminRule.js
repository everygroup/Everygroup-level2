import React from 'react';
import {Text, StyleSheet, ScrollView} from 'react-native';
import Styles from '../UserScreens/Style';
import FontStyle from '../../Assets/Fonts/FontStyle';

const AdminRule = () => {
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', paddingBottom: '5%'}}
      style={{
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
      }}>
      <Text style={Styles.headingText}>Verhatlensregeln für Gruppenadmins</Text>

      <Text style={styles.descriptionText}>
        Als Admin trägst du die Verantwortung über die Gruppe und deren
        Mitglieder.
      </Text>
      <Text style={styles.descriptionText}>
        Mit dem Hochladen deiner Gruppe, stimmst du zu, dass du dich an unseren
        Verhaltenskodex hältst und deiner Position als Admin verantwortungsvoll
        nachgehst, um damit eine sichere und friedliche Atmosphäre in der Gruppe
        zu schaffen.
      </Text>
      <Text style={styles.headingText}>Gruppe hochladen</Text>
      <Text style={styles.descriptionText}>
        Es dürfen keine Gruppen hochgeladen werden, dessen Inhalte gegen die
        geltenden Gesetze verstoßen oder gegen unseren Verhaltenskodex. Bei
        einem Verstoß führt es zur Löschung der Gruppe oder anderen Maßnahmen.
      </Text>
      <Text style={styles.headingText}>Bestehende Gruppe hochladen</Text>
      <Text style={styles.descriptionText}>
        Bevor du eine bestehende Gruppe hochlädst, musst du die
        Gruppenmitglieder darüber aufklären, dass durch Hochladen der Gruppe,
        die Handynummer sichtbar für andere außerhalb der Gruppe der ist. Die
        Gruppe darf erst hochgeladen werden, wenn alle Mitglieder damit
        einverstanden sind.
      </Text>
      <Text style={styles.headingText}>Moderation der Gruppe</Text>
      <Text style={styles.descriptionText}>
        Mit dem Hochladen der Gruppe auf everygroup stimmst du zu, dass du nach
        besten Gewissen die Gruppe moderierst und dich dabei an den
        Verhaltenskodex orientierst. Kommt es im Chat zu heftigen
        Auseinandersetzungen oder wirst du um Hilfe gebeten, versuchst du den
        Streit zu schlichten. Wenn du im Gruppenchat zeuge, von Mobbing wirst
        und dieser nicht geschlichtet werden kann, entfernst du das/die
        Mitglied/er aus der Gruppe von denen das Mobbing ausgeht.
      </Text>
      <Text style={styles.descriptionText}>
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
    fontSize: 14,
    color: '#205072',
    marginTop: '5%',
    alignSelf: 'flex-start',
  },
  descriptionText: {
    fontFamily: FontStyle.poppinsMedium,
    fontSize: 12,
    color: '#205072',
    alignSelf: 'flex-start',
  },
});

export default AdminRule;
