import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import FontStyle from '../../Assets/Fonts/FontStyle';
import Button from '../../Common/Button';

const ReportModal = ({modalValue, closeModal, parentCallBack, groupId}) => {
  const [otherText, setOtherText] = useState('');
  const [selectedOption, setSelectedOption] = useState([]);
  const [reportOption, setReportOption] = useState([
    {
      id: 1,
      description: 'Die Gruppe enthält anstößige Inhalte',
      type: 'Offensive content',
      slug: 'offensive-content',
    },
    {
      id: 2,
      description: 'Der Gruppenlink ist abgelaufen',
      type: 'link has expired',
      slug: 'link-has-expired',
    },
    {
      id: 3,
      description: 'Andere Gründe',
      type: 'Other concern',
      slug: 'other-concern',
    },
  ]);
  const selectOption = item => {
    if (selectedOption.find(el => el.slug == item.slug)) {
      setSelectedOption(selectedOption.filter(el => el.slug !== item.slug));
    } else {
      setSelectedOption(oldData => [...oldData, item]);
    }
  };

  // const submitData = () => {
  //   parentCallBack(selectedOption);
  // };

  return (
    <View>
      <Modal
        isVisible={modalValue}
        onBackButtonPress={closeModal}
        onBackdropPress={closeModal}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          margin: 0,
          opacity: 1,
          backgroundColor: '#00000099',
        }}>
        <View style={styles.mainContainer}>
          <Text
            style={
              styles.titleText
            }>{`Warum willst du die Gruppe\n melden?`}</Text>
          <FlatList
            data={reportOption}
            renderItem={({item}) => {
              return (
                <TouchableWithoutFeedback onPress={() => selectOption(item)}>
                  <View style={[styles.optionContainer, {marginTop: '5%'}]}>
                    {selectedOption.find(el => el.slug == item.slug) ? (
                      <Image
                        source={require('../../Assets/Images/rightBlue.png')}
                        style={{height: 24, width: 24, borderRadius: 12}}
                      />
                    ) : (
                      <View style={styles.circleView} />
                    )}
                    <Text style={styles.descriptionText}>
                      {item.description}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            }}
          />

          <View style={{width: '100%', alignItems: 'center'}}>
            {selectedOption.some(el => el.id == 3) ? (
              <TextInput
                multiline={true}
                placeholderTextColor="#8B8B8B"
                placeholder="Schreib uns gerne den Grund.."
                onChangeText={text => setOtherText(text)}
                style={{
                  borderWidth: 1,
                  height: 100,
                  width: '80%',
                  borderRadius: 5,
                  borderColor: '#DDDFE7',
                  marginVertical: '5%',
                  paddingHorizontal: '2.5%',
                  fontFamily: FontStyle.MontMedium,
                  color: '#205072',
                }}
              />
            ) : null}
            <Button
              buttonText="Melden"
              buttonColor1={selectedOption.length > 0 ? '#FFA420' : '#f1f3f5'}
              buttonColor2={selectedOption.length > 0 ? '#FE7027' : '#f1f3f5'}
              onPress={() => parentCallBack({selectedOption, otherText})}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width: 122,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 21,
    marginHorizontal: '5%',
    marginTop: '10%',
  },
  mainContainer: {
    backgroundColor: '#fff',
    width: '85%',
    minHeight: '38%',
    maxHeight: 'auto',
    paddingVertical: '7%',
    borderRadius: 10,
    paddingHorizontal: '2.5%',
  },
  descriptionText: {
    fontFamily: FontStyle.MontBold,
    fontSize: 11,
    color: '#205072',
    left: 8,
  },
  circleView: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#205072',
    borderWidth: 1,
  },
  titleText: {
    fontFamily: FontStyle.MontExtBold,
    fontSize: 15,
    color: '#205072',
    textAlign: 'center',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 30,
    marginLeft: '10%',
  },
});

export default ReportModal;
