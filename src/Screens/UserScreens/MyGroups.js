import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, LayoutAnimation, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import GroupCard from '../../Common/GroupCard';
import InfoModal from '../../Common/InfoModal';
import {useDispatch, useSelector} from 'react-redux';
import {getUserGroup} from '../../../Slice/UserGroupReducer';
import MainLoader from '../../Common/MainLoader';
import FontStyle from '../../Assets/Fonts/FontStyle';

const MyGroup = () => {
  const dispatch = useDispatch();
  const [groupId, setGroupId] = useState('');
  const [eyeValue, setEyeValue] = useState(true);
  const [bellValue, setBellValue] = useState(true);
  const [infoModalValue, setInfoModalValue] = useState(false);
  const [selectionOption, setSelectionOption] = useState('');

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

  const {boostError} = useSelector(state => {
    console.log(state.UserGroupReducer);
    return state.UserGroupReducer;
  });

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header
        selectionOption={selectionOption}
        closeAddGroup={() => setSelectionOption('')}
      />
      <InfoModal
        closeModal={() => setInfoModalValue(false)}
        modalValue={infoModalValue}
        message={`Mit dem Booster wird deine Gruppe 5 Tage lang alle 8 Stunden automatisch wieder hoch geladen ohne, dass du dafür ein Video schauen musst.\n \n Um einen Booster zu erhalten, muss deine Gruppe genug Boosts von anderen Nutzern sammeln.`}
      />

      {boostError ? alert(boostError) : null}

      {loading ? (
        <MainLoader heightValue={1.1} />
      ) : (
        <>
          <Text style={Styles.headingText}>Meine Gruppen</Text>
          {userGroupData.length > 0 ? (
            <FlatList
              data={userGroupData}
              showsVerticalScrollIndicator={false}
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
          ) : (
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../../Assets/Images/Idea.png')}
                style={{
                  height: 200,
                  width: 200,
                  resizeMode: 'contain',
                  marginVertical: '10%',
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 19,
                  fontFamily: FontStyle.MontBold,
                  color: '#205072',
                  width: '80%',
                }}>
                Hier ist noch keine Gruppe aber wir haben da eine Idee.{' '}
                <Text
                  onPress={() => setSelectionOption('plus')}
                  style={{color: '#FFA420'}}>
                  Poste{' '}
                </Text>
                einfach deine Erste!
              </Text>
            </View>
          )}
        </>
      )}
    </View>
  );
};

export default MyGroup;
