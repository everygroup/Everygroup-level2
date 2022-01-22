import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  LayoutAnimation,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import ModalDropdown from 'react-native-modal-dropdown';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Deutsch');
  const [expand, setExpand] = useState(false);
  const [language] = useState([
    'Deutsch',
    // 'Englisch',
    // 'Spanisch',
    // 'Indisch',
    // 'Polnisch',
    // 'Türkisch',
    // 'Russisch',
    // 'Portugiesisch',
  ]);

  const expandOption = () => {
    setExpand(!expand);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  return (
    <View style={{paddingTop: '25%', height: '100%', backgroundColor: '#fff'}}>
      <Header />
      <Text style={Styles.headingText}>Sprache</Text>

      <View
        style={[
          styles.containerStyle,
          {
            height: expand ? 50 : 50,
          },
        ]}>
        <TouchableWithoutFeedback onPress={expandOption}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              height: 50,
              paddingRight: 10,
              alignItems: 'center',
            }}>
            <Text style={styles.languageText}>{selectedLanguage}</Text>

            <Icon
              name={expand ? 'chevron-up' : 'chevron-down'}
              size={20}
              color="#205072"
            />
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#DDDFE7',
          }}
        />
        {expand ? (
          <FlatList
            data={language}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <View>
                  <TouchableOpacity
                    onPress={() => setSelectedLanguage(item)}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      height: 50,
                      alignItems: 'center',
                      paddingRight: 10,
                    }}>
                    <Text style={styles.languageText}>{item}</Text>

                    {selectedLanguage == item ? (
                      <Icon
                        name={'check-circle'}
                        size={20}
                        color="#205072"
                        solid
                      />
                    ) : (
                      <Icon name={'circle'} size={20} color="#205072" />
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
            }}
          />
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    width: '90%',
    backgroundColor: '#fff',
    marginVertical: '5%',
    alignSelf: 'center',
    borderRadius: 7,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 2,
  },
  languageText: {
    fontSize: 19,
    fontFamily: FontStyle.MontSemiBold,
    color: '#FFA420',
    paddingHorizontal: '5%',
  },
});

export default Language;
