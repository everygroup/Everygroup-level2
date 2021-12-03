import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const Menu = () => {
  const [pages, setPages] = useState([
    'Profil',
    'Meine Gruppen',
    'Favoriten',
    'Hilfe',
    'Sprache',
  ]);
  return (
    <FlatList
      data={pages}
      scrollEnabled={false}
      renderItem={({item}) => {
        return (
          <View style={{width: '100%', alignItems: 'center', height: 50}}>
            <Text style={styles.textStyle}>{item}</Text>
            <View
              style={{
                backgroundColor: '#fff',
                height: 1,
                width: 40,
                marginTop: 10,
              }}
            />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 21,
    color: '#fff',
  },
});

export default Menu;
