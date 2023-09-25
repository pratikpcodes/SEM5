import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import {useState} from 'react';

import CustomTextInput from '../CommonAsset/CustomTextInput';
import Commonbutton from '../CommonAsset/Commonbutton';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setbadPassword] = useState(false);
  const [Phone, setPhone] = useState('');
  const [badPhone, setbadPhone] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badconfirmPassword, setbadConfirmPassword] = useState(false);

  const validate = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }
    if (password == '') {
      setbadPassword(true);
    } else {
      setbadPassword(false);
    }
    if (name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }
    if (Phone == '') {
      setbadPhone(true);
    } else {
      setbadPhone(false);
    }
    if (confirmPassword == '' || confirmPassword != password)

      setbadConfirmPassword(true);
    else {
      setbadConfirmPassword(false);
      saveData();
      // if you check false values in savedata it wont work and will be redirected 
    }
   

  };
  const saveData = async () => {
     
      
      await AsyncStorage.setItem('Name', name);
      await AsyncStorage.setItem('Password', password);
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('Phone', Phone);
     
      navigation.goBack();

    
   
   
  };
  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <View style={{flex: 1}}>
        <Image
          source={require('../images/logo.png')}
          style={{
            marginTop: 20,
            width: 50,
            height: 50,
            borderRadius: 50,
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
          Create New Account here
        </Text>
        <CustomTextInput
          placeholder={'Enter Name'}
          icon={require('../images/user.png')}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
        />
        {badName == true && (
          <Text
            style={{
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>
            Please enter your Name !!{' '}
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter Email-id'}
          icon={require('../images/email.png')}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
        />
        {badEmail == true && (
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Please enter correct email !!{' '}
          </Text>
        )}
        <CustomTextInput
          type={'password'}
          placeholder={'Enter Password'}
          icon={require('../images/pass.png')}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
        />
        {badPassword == true && (
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Please enter correct password !!{' '}
          </Text>
        )}

        <CustomTextInput
          placeholder={'Confirm your password'}
          icon={require('../images/pass.png')}
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
        />

        {badconfirmPassword == true && (
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Password does not match !!{' '}
          </Text>
        )}
        <CustomTextInput
          placeholder={'Enter Phone Number'}
          icon={require('../images/call.png')}
          value={Phone}
          onChangeText={txt => {
            setPhone(txt);
          }}
        />
        {badPhone == true && (
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Please enter Phone no !!{' '}
          </Text>
        )}

        <Commonbutton
          title={'Login'}
          bgColor={'#000000'}
          textColor={'#f0ffff'}
          onPress={() => {
            validate();
          }}
        />
        <Text
          style={{
            fontSize: 15,
            fontWeight: 'bold',
            alignSelf: 'center',
            textDecorationLine: 'underline',
            marginTop: 10,
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          Already have Account? Sign in
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;
