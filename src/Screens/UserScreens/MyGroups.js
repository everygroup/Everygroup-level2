import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, LayoutAnimation} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import GroupCard from '../../Common/GroupCard';
import InfoModal from '../../Common/InfoModal';
import {useDispatch, useSelector} from 'react-redux';
import {getUserGroup} from '../../../Slice/UserGroupReducer';

const MyGroup = () => {
  const dispatch = useDispatch();
  const [groupId, setGroupId] = useState('');
  const [eyeValue, setEyeValue] = useState(true);
  const [bellValue, setBellValue] = useState(true);
  const [infoModalValue, setInfoModalValue] = useState(false);

  useEffect(() => {
    dispatch(getUserGroup());
  }, []);

  const {loading, error, userGroupData} = useSelector(state => {
    return state.UserGroupReducer;
  });

  const expandOption = group => {
    if (group == groupId) {
      setGroupId('');
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    } else {
      setGroupId(group);

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
  };

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <InfoModal
        closeModal={() => setInfoModalValue(false)}
        modalValue={infoModalValue}
        message={`Mit dem Booster wird deine Gruppe 5 Tage lang alle 8 Stunden automatisch wieder hoch geladen ohne, dass du dafür ein Video schauen musst.\n \n Um einen Booster zu erhalten, muss deine Gruppe genug Boosts von anderen Nutzern sammeln.`}
      />
      <Text style={Styles.headingText}>Meine Gruppen</Text>
      <FlatList
        data={userGroupData}
        contentContainerStyle={{backgroundColor: '#fff'}}
        renderItem={({item: group}) => {
          return (
            <GroupCard
              group={group}
              boosterValue={true}
              onPress={() => expandOption(group.id)}
              selectedGroupName={groupId}
              eyePress={() => setEyeValue(!eyeValue)}
              eyeValue={eyeValue}
              bellPress={() => setBellValue(!bellValue)}
              bellValue={bellValue}
              infoPress={() => setInfoModalValue(true)}
            />
          );
        }}
      />
    </View>
  );
};

export default MyGroup;
