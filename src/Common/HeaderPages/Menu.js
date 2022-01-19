import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
const Menu = ({onPressMenu}) => {
  const [pages, setPages] = useState([
    {displayName: 'Profil', navigationName: 'UserNavigator'},
    {displayName: 'Meine Gruppen', navigationName: 'MyGroup'},
    {displayName: 'Favoriten', navigationName: 'MyFavorite'},
    {displayName: 'Hilfe', navigationName: 'HelpNavigator'},
    {displayName: 'Sprache', navigationName: 'Language'},
  ]);
  const navigation = useNavigation();
  return (
    <FlatList
      data={pages}
      scrollEnabled={false}
      contentContainerStyle={{top: '10%'}}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => {
              onPressMenu();
              navigation.navigate(item.navigationName);
            }}
            style={{width: '100%', alignItems: 'center', height: 50}}>
            <Text style={styles.textStyle}>{item.displayName}</Text>
            <View
              style={{
                backgroundColor: '#fff',
                height: 1,
                width: 40,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 23,
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
});

export default Menu;
