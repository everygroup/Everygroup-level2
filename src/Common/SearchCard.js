import React from 'react';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';

const SearchCard = ({data, onPress, bellPress}) => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <View style={[styles.spacing, {paddingTop: '2.5%'}]}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleText}>Suchbegriff:</Text>
            <Icons
              name={'close'}
              color="#EF3E36"
              light
              size={26}
              onPress={onPress}
            />
          </View>
          <Text style={styles.descriptionText}>{data.query}</Text>
        </View>
        <View style={styles.spacing}>
          <Text style={styles.titleText}>Messenger:</Text>
          <FlatList
            listKey="1.1"
            numColumns={4}
            data={data.group_type}
            renderItem={({item}) => {
              return <Text style={styles.descriptionText}>{item},</Text>;
            }}
          />
        </View>
        <View style={styles.spacing}>
          <Text style={styles.titleText}>Kategorie:</Text>
          <FlatList
            listKey="1.2"
            numColumns={4}
            data={data.group_category}
            renderItem={({item}) => {
              return <Text style={styles.descriptionText}>{item},</Text>;
            }}
          />
        </View>
        <View style={styles.spacing}>
          <Text style={styles.titleText}>Sprache:</Text>
          <FlatList
            listKey="1.3"
            numColumns={4}
            data={data.group_language}
            renderItem={({item}) => {
              return <Text style={styles.descriptionText}>{item},</Text>;
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: '#F2F2F2',
            height: 50,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: '3%',
            width: '100%',
          }}>
          <Text style={styles.titleText}>Benachrichtigung</Text>
          <Icon
            name={data.notification ? 'bell' : 'bell-slash'}
            color="#205072"
            solid
            size={24}
            bellPress={bellPress}
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
    marginTop: '5%',
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
    textDecorationLine: 1,
  },
  descriptionText: {
    fontSize: 17,
    color: '#205072',
    fontFamily: FontStyle.MontMedium,
  },
  spacing: {paddingHorizontal: '2.5%', paddingBottom: '2.5%'},
});

export default SearchCard;
