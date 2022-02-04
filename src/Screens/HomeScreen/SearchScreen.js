import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  FlatList,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Header from '../../Common/Header';
import GroupCard from '../../Common/GroupCard';
import GradientCard from '../../Common/GradientCard';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {useNavigation} from '@react-navigation/native';
import {getSearchResult} from '../../../Slice/SearchResultReducer';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');
const SearchScreen = () => {
  const [selectionOption, setSelectionOption] = useState('');

  const {searchResult, error, loading} = useSelector(state => {
    return state.SearchResultReducer;
  });

  return (
    <View
      style={{
        paddingTop: '25%',
        height: '100%',
        backgroundColor: '#fff',
      }}>
      <Header
        selectionOption={selectionOption}
        closeAddGroup={() => setSelectionOption('')}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: '10%'}}>
        <View style={{backgroundColor: '#fff'}}>
          {searchResult.length > 0 ? (
            <View>
              <Text
                style={{
                  fontSize: 26,
                  color: '#205072',
                  fontFamily: FontStyle.MontBold,
                  alignSelf: 'center',
                  marginTop: 10,
                }}>
                Neu hinzugefügt
              </Text>
              <ScrollView style={{paddingBottom: 20}}>
                {searchResult.map(group => {
                  return <GroupCard group={group} />;
                })}
              </ScrollView>
              <TouchableOpacity style={styles.moreGroupButton}>
                <Text
                  style={{
                    fontFamily: FontStyle.MontBold,
                    fontSize: 14,
                    color: '#fff',
                  }}>
                  Mehr Gruppen
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                backgroundColor: '#fff',
                height: height / 1.1,
                alignItems: 'center',
                marginTop: '10%',
              }}>
              <Image
                source={require('../../Assets/Images/searchNoRecord.png')}
                style={{width: 220, height: 260, resizeMode: 'cover'}}
              />
              <Text
                style={{
                  color: '#205072',
                  fontFamily: FontStyle.MontBold,
                  fontSize: 21,
                  textAlign: 'center',
                  marginTop: '10%',
                }}>
                {`Wir haben wirklich\n überall gesucht aber\n nichts gefunden..`}
              </Text>
              <Text
                style={{
                  color: '#205072',
                  fontFamily: FontStyle.MontSemiBold,
                  fontSize: 17,
                  textAlign: 'center',
                  marginTop: '5%',
                  width: '60%',
                }}>
                Ändere deine Suche oder sei cool und
                <Text
                  onPress={() => setSelectionOption('plus')}
                  style={{color: '#FFA420'}}>
                  {' '}
                  posten{' '}
                </Text>
                als Erster hier eine Gruppe!
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Interface')}
        style={{
          position: 'absolute',
          bottom: '10%',
          alignSelf: 'flex-end',
          right: '8%',
        }}>
        <Image
          source={require('../../Assets/Images/group.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  moreGroupButton: {
    backgroundColor: '#FFA420',
    width: 222,
    height: 39,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
  },
});

export default SearchScreen;
