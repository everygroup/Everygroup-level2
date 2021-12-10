import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import SearchCard from '../../Common/SearchCard';

const Search = () => {
  const [searchData, setSearchData] = useState([
    {
      id: '0',
      searchTerm: 'Nordsee Gruppe',
      Messenger: 'Alle',
      category: 'Alle',
      language: 'Alle',
      notification: true,
    },
    {
      id: '1',
      searchTerm: 'Kein Suchbegriff',
      Messenger: 'Discord, Snapchat, WhatsApp, Telegram',
      category:
        'Unterhaltung, Dienstleistung, Allgemein, Interessen, Musik, Umgebung, Tiere, Kunst',
      language: 'Deutsch, Spanisch, Türkisch, Englisch, Norwegisch, Französich',
      notification: false,
    },
  ]);

  const onPress = (id, currentValue) => {};
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <FlatList
        data={searchData}
        renderItem={({item: data}) => {
          return (
            <SearchCard
              data={data}
              onPress={() => onPress(data.id, data.notification)}
            />
          );
        }}
      />
    </View>
  );
};

export default Search;
