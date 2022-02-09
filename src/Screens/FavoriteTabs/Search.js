import React, {useState, useEffect} from 'react';
import {View, FlatList, Animated, Easing} from 'react-native';
import SearchCard from '../../Common/SearchCard';
import {useSelector, useDispatch} from 'react-redux';
import {getSearch} from '../../../Slice/SearchReducer';

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch());
  }, [getAllSearch]);

  const {getAllSearch} = useSelector(state => {
    return state.SearchReducer;
  });

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        data={getAllSearch}
        listKey={(item, index) => index.toString()}
        renderItem={({item: data}) => {
          return (
            <SearchCard
              key={data.id}
              data={data}
              onPress={data.id}
              bellPress={() => bellPress(data.id)}
            />
          );
        }}
      />
    </View>
  );
};

export default Search;
