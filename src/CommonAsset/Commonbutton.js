import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Commonbutton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        alignSelf:'center',
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
    
        width: '90%',
        height: 50,
        borderRadius: 10,
    

      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor, fontSize: 20, fontWeight: 'bold'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Commonbutton;
