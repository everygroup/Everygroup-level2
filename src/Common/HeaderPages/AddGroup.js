import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/Feather';

const AddGroup = () => {
  return (
    <ScrollView>
      <Text style={{color: '#fff', fontSize: 19, alignSelf: 'center'}}>
        Gruppe hinzufügen
      </Text>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Titel" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Gruppenlink" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Kategorie" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Allgemein" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="#hashtag #nur #wenn #du #willst" />
      </View>
      <View style={{width: '70%', alignSelf: 'center', marginVertical: '5%'}}>
        <Text style={{color: '#fff', textAlign: 'center'}}>
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="sprache auswählen" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Titel" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Titel" />
      </View>
      <View style={styles.container}>
        <Icon name="info" color="#fff" size={16} />

        <Input placeholder="Titel" />
      </View>
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
  },
});

export default AddGroup;
