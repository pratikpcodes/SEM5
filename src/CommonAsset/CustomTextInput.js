import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({icon, placeholder, type, value, onChangeText}) => {
  return (
    <View
      style={{
        paddingLeft: 10,
        paddingRight: 10,

        marginTop: 40,
        borderWidth: 0.5,
        width: '90%',
        height: 50,
        flexDirection: 'row',
        borderRadius: 10,
        resizeMode: 'contain',
        alignSelf: 'center',
      }}>
      <Image source={icon} style={{height: 25, width: 25, marginTop: 10}} />
      <TextInput
        value={value}
        onChangeText={(txt) => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        style={{marginLeft: 10, marginBottom: 3}}
        //   keyboardType={type?type:'default'}
        secureTextEntry={type ? true : false}
      />
    </View>
  );
};

export default CustomTextInput;
