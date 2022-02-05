import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableWithoutFeedback} from 'react-native';
import PersonCard from '../../Common/HeaderPages/PersonCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getFavouriteUsers} from '../../../Slice/FavouriteUserReducer';

const Persons = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {getDataError, getDataLoading, getFavouriteData} = useSelector(
    state => {
      return state.FavouriteUserReducer;
    },
  );

  useEffect(() => {
    dispatch(getFavouriteUsers());
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 100}}
        data={getFavouriteData}
        renderItem={({item: data}) => {
          return <PersonCard data={data} />;
        }}
      />
    </View>
  );
};

export default Persons;
