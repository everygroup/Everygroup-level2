import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import GroupCard from '../../Common/GroupCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteFavouriteGroup,
  getFavouriteGroup,
} from '../../../Slice/FavouriteGroupReducer';
import MainLoader from '../../Common/MainLoader';

const Groups = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavouriteGroup());
  }, []);

  const {favouriteGroupList, dataLoading} = useSelector(state => {
    return state.FavouriteGroupReducer;
  });

  return dataLoading ? (
    <MainLoader heightValue={1.6} />
  ) : (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
        keyExtractor={(item, index) => item.id}
        showsVerticalScrollIndicator={false}
        data={favouriteGroupList}
        contentContainerStyle={{backgroundColor: '#fff', paddingBottom: 100}}
        renderItem={({item: group}) => {
          return (
            <GroupCard
              group={group}
              favourite={true}
              removeFavourite={() => dispatch(deleteFavouriteGroup(group.id))}
            />
          );
        }}
      />
    </View>
  );
};

export default Groups;
