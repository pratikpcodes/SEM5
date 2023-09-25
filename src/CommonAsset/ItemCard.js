import {View, Text,Image, TouchableOpacity} from 'react-native';
import React from 'react';

const ItemCard = ({item}) => {
  return (
    
    <View
      style={{
        height: 280,
        width: 200,
        elevation: 5,
        borderWidth: 0,
        backgroundColor: 'white',
        marginLeft: 20,
        borderRadius: 5,
       
        
      }}>
       
      <Image source ={item.image} style={{width:'100%',height:220, borderRadius:10}}/>
      <Text style={{alignSelf:'center', fontSize:16, fontWeight:'bold'}}>{item.name}</Text>
      <View style={{justifyContent:'space-between',marginTop:5,fontSize:15, fontWeight:'bold', flexDirection:'row',paddingLeft:10,paddingRight:10,alignItems:'center'}} >
      <Text >{"Rs "+item.price}</Text>

      <TouchableOpacity >
        <Text style={{borderWidth:0, fontSize:15, padding:5,borderRadius: 5}}>AddtoCart</Text>
      </TouchableOpacity>

      </View>
      
    </View>
    
  );
};

export default ItemCard;
