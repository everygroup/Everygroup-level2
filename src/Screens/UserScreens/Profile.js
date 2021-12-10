import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import {useNavigation} from '@react-navigation/native';

const Profile = () => {
  const navigation = useNavigation();

  const [pageOption, setPageOption] = useState([
    {displayName: 'Accountdaten', navigationName: 'AccountData'},
    {displayName: 'Benachrichtigungen', navigationName: 'Notification'},
    {displayName: 'Gutschein', navigationName: 'Coupon'},
    {displayName: 'Abmelden', navigationName: 'SignOut'},
  ]);

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <Text style={Styles.headingText}>Profil</Text>
      <FlatList
        data={pageOption}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(item.navigationName)}
              style={Styles.textContainer}>
              <Text style={Styles.textStyle}>{item.displayName}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Profile;
