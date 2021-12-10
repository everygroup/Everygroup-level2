import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Input from '../Input';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontStyle from '../../Assets/Fonts/FontStyle';

const AddGroup = () => {
  const [checkedTerms, setCheckedTerms] = useState(false);
  const [checkedConductRules, setConductRules] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={{alignItems: 'center', alignSelf: 'center'}}>
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
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />
        <Input
          placeholder="Titel"
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />

        <Input
          placeholder="Gruppenlink"
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />
        <View
          style={{
            backgroundColor: '#fff',
            width: '80%',
            height: 39,
            borderRadius: 6,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: '5%',
          }}>
          <Text
            style={{
              fontFamily: FontStyle.MontSemiBold,
              color: '#FFA420',
            }}>
            Kategorie
          </Text>
          <Icon name="caret-down" color="#000" size={20} />
        </View>
      </View>
      <View style={[styles.container]}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />

        <Input
          placeholder="Beschreibung"
          placeholderTextColor="#BECCD6"
          bgColor="#fff"
          bdWidth={0.1}
        />
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />

        <Input
          placeholder="#hashtag #nur #wenn #du #willst"
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
          Welche Sprache wird in dieser Gruppe gesprochen?
        </Text>
      </View>
      <View style={styles.container}>
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />

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
        <Image
          source={require('../../Assets/Images/info.png')}
          style={{width: 20, height: 20, resizeMode: 'cover', right: 10}}
        />

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
      <View style={styles.submitButton}>
        <Text
          style={{fontFamily: FontStyle.MontBold, color: '#fff', fontSize: 16}}>
          Gruppe posten
        </Text>
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
});

export default AddGroup;
