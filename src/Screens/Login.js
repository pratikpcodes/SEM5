import {View, Text, Image, TextInput} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../CommonAsset/CustomTextInput';
import Commonbutton from '../CommonAsset/Commonbutton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPassword, setbadPassword] = useState(false);

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
    getData();

  };
  const getData = async () => {
    const storeEmail = await AsyncStorage.getItem('email');
    const storePassword = await AsyncStorage.getItem('Password');
  
    if(storeEmail==email&&storePassword==password){
      navigation.navigate('Home');
      // setTimeout(() => {
      //   navigation.navigate('Login');
        
      // }, 3000);
      // alert('wapas ja rha hu jald hi');
    }
    else{
      alert('Enter correct details');
    }
   

  };
  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/logo.png')}
        style={{
          marginTop: 100,
          width: 50,
          height: 50,
          borderRadius: 50,
          resizeMode: 'contain',
          alignSelf: 'center',
        }}
      />
      <Text style={{alignSelf: 'center', fontSize: 15, fontWeight: 'bold'}}>
        Login here
      </Text>
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
          }}>
          Please enter correct password !!{' '}
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
          navigation.navigate('SignUp');
        }}>
        Create your Account
      </Text>
    </View>
  );
};

export default Login;
