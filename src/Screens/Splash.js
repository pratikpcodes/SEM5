import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate('Login')
      }, 3000);
    },[]);
  
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../images/logo.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          resizeMode: 'contain',
        }}
      />
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
