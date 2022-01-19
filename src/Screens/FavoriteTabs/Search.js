import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import SearchCard from '../../Common/SearchCard';
import {useSelector, useDispatch} from 'react-redux';
import {getSearch, deleteSearch} from '../../../Slice/SearchReducer';

const Search = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSearch());
  }, [getAllSearch]);

  const {getAllSearch} = useSelector(state => {
    return state.SearchReducer;
  });

  const deleteSearchData = searchId => {
    dispatch(deleteSearch(searchId));
  };

  const bellPress = id => {};

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        contentContainerStyle={{paddingBottom: 100}}
        showsVerticalScrollIndicator={false}
        data={getAllSearch}
        renderItem={({item: data}) => {
          return (
            <SearchCard
              data={data}
              onPress={() => deleteSearchData(data.id)}
              bellPress={() => bellPress(data.id)}
            />
          );
        }}
      />
    </View>
  );
};

export default Search;
