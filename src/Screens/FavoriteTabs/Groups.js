import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';
import GroupCard from '../../Common/GroupCard';
import {useDispatch, useSelector} from 'react-redux';
import {
  deleteFavouriteGroup,
  getFavouriteGroup,
} from '../../../Slice/FavouriteGroupReducer';

const Groups = () => {
  const dispatch = useDispatch();
  const [groupArray] = useState([
    // {
    //   groupName: 'Nordsee Gruppe',
    //   category: ['Dienstleistungen', 'Interessen', 'Unterhaltung'],
    //   hashtagData: ['#test', '#test', '#test', '#test', '#test'],
    //   description: 'Hey, wir sind eine nette Gruppe',
    //   group_type: 'snapchat',
    //   favorite: true,
    // },
  ]);

  useEffect(() => {
    dispatch(getFavouriteGroup());
  }, []);

  const {favouriteGroupList} = useSelector(state => {
    return state.FavouriteGroupReducer;
  });

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <FlatList
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
