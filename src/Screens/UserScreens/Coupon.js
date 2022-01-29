import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Header from '../../Common/Header';
import Styles from './Style';
import {useNavigation} from '@react-navigation/native';
import Input from '../../Common/Input';
import Button from '../../Common/Button';
import FontStyle from '../../Assets/Fonts/FontStyle';
import {HelperText} from 'react-native-paper';
import SuccessModal from '../../Common/SuccessModal';
import {useDispatch, useSelector} from 'react-redux';
import {applyCoupon, resetCouponValue} from '../../../Slice/UserGroupReducer';

const Coupon = () => {
  const dispatch = useDispatch();
  const [coupon, setCoupon] = useState('');
  const [couponError, setCouponError] = useState(false);
  const [couponErrorMessage, setCouponErrorMessage] = useState();
  const [modalValue, setModalValue] = useState(false);
  const navigation = useNavigation();

  const submitButton = () => {
    if (coupon == '') {
      setCouponError(true);
    } else {
      dispatch(applyCoupon(coupon));
    }
  };

  const {couponResError, couponSuccess} = useSelector(state => {
    return state.UserGroupReducer;
  });

  useEffect(() => {
    if (couponResError != '') {
      setCouponError(true);
      setCouponErrorMessage(couponResError);
    }
  }, [couponResError]);

  useEffect(() => {
    if (couponSuccess != '') {
      setModalValue(true);
    }
  }, [couponSuccess]);

  const closeModal = () => {
    setModalValue(false);
    dispatch(resetCouponValue());
  };

  return (
    <View style={[Styles.mainContainer, {paddingTop: '25%'}]}>
      <Header />
      <SuccessModal
        modalValue={modalValue}
        closeModal={() => closeModal()}
        reuploads={couponSuccess.reuploads}
        booster={couponSuccess.boost_points}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '5%',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../Assets/Images/back.png')}
            style={{width: 23, height: 23, resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <Text style={Styles.headingText}>Gutschein</Text>
        <View />
      </View>
      <View style={{alignItems: 'center', marginTop: '10%'}}>
        <View style={Styles.errorContainer}>
          {couponError == true ? (
            <HelperText style={[Styles.helperText, {left: '8%'}]} type="error">
              {couponErrorMessage}
            </HelperText>
          ) : null}
        </View>
        <Input
          placeholder="Gutschein"
          placeholderTextColor="#205072"
          bdWidth={couponError ? 2 : 2}
          borderColor={couponError ? 'red' : null}
          onChangeText={text => {
            setCoupon(text);
            setCouponError(false);
          }}
        />
        <Text
          style={{
            fontFamily: FontStyle.MontBold,
            fontSize: 12,
            color: '#C7C7C7',
            width: '78%',
          }}>
          Auf unserem Instagram Account verlosen wir regelmäßig Gutscheine für
          Booster aber auch noch andere tolle Dinge wie Amazon-
          Geschenkgutscheine und vieles mehr!
        </Text>
        <View style={{marginVertical: '10%'}}>
          <Button buttonText="Einlösen" onPress={submitButton} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-start',
            paddingHorizontal: '10%',
          }}>
          <Image
            source={require('../../Assets/Images/instagram.png')}
            style={{height: 30, width: 30, resizeMode: 'contain'}}
          />
          <Text
            style={{
              fontFamily: FontStyle.MontBold,
              color: '#FFA420',
              fontSize: 17,
              left: 10,
            }}>
            everygroup
          </Text>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          flex: 1,
        }}>
        <Image
          source={require('../../Assets/Images/greyLogo.png')}
          style={{
            width: 94,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            bottom: 30,
          }}
        />
      </View>
    </View>
  );
};

export default Coupon;
