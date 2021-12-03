import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Input from '../Input';

const Search = () => {
  return (
    <View>
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Search;
