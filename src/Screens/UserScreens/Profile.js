import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
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
              style={[Styles.textContainer, {flexDirection: 'row'}]}>
              <Text style={Styles.textStyle}>{item.displayName}</Text>
              {item.displayName == 'Gutschein' ? (
                <Image
                  source={require('../../Assets/Images/couponIcon.png')}
                  style={{
                    width: 24,
                    height: 14,
                    resizeMode: 'contain',
                    left: 5,
                    transform: [{rotate: '-25deg'}],
                  }}
                />
              ) : null}
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Profile;
