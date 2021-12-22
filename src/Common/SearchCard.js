import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchCard = ({data, onPress}) => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <View style={{padding: '2.5%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleText}>Suchbegriff:</Text>
            <Icon
              name={'times'}
              color="#EF3E36"
              light
              size={24}
              onPress={onPress}
            />
          </View>
          <Text style={styles.descriptionText}>{data.searchTerm}</Text>
        </View>
        <View style={{padding: '2.5%'}}>
          <Text style={styles.titleText}>Messenger:</Text>
          <Text style={styles.descriptionText}>{data.Messenger}</Text>
        </View>
        <View style={{padding: '2.5%'}}>
          <Text style={styles.titleText}>Kategorie:</Text>
          <Text style={styles.descriptionText}>{data.category}</Text>
        </View>
        <View style={{padding: '2.5%'}}>
          <Text style={styles.titleText}>Sprache:</Text>
          <Text style={styles.descriptionText}>{data.language}</Text>
        </View>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '2.5%',
          }}>
          <Text style={styles.titleText}>Benachrichtigung</Text>
          <Icon
            name={data.notification ? 'bell' : 'bell-slash'}
            color="#205072"
            solid
            size={24}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    minHeight: 170,
    maxHeight: 'auto',
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
  titleText: {
    fontSize: 18,
    color: '#205072',
    fontFamily: FontStyle.MontBold,
  },
  descriptionText: {
    fontSize: 17,
    color: '#205072',
    fontFamily: FontStyle.MontMedium,
  },
});

export default SearchCard;
