import React from 'react';
import {
  View,
  Text,
  LayoutAnimation,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontStyle from '../Assets/Fonts/FontStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Category = onPress => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../Assets/Images/info.png')}
          style={{
            width: 20,
            height: 20,
            resizeMode: 'cover',
            right: 10,
            bottom: 5,
          }}
        />
      </TouchableOpacity>
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
});

export default Category;
