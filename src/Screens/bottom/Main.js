import {View, Text, Image, TouchableOpacity, ScrollView,Animated} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../CommonAsset/Header';
import Products from '../Products';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ItemCard from '../../CommonAsset/ItemCard';

const Main = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [Smartwatches, setSmartwatches] = useState([]);
  const [FitnessTrackers, setFitnessTrackers] = useState([]);
  const [Headphones, setHeadphones] = useState([]);
  const [SmartGlasses, setSmartGlasses] = useState([]);
  const [FitnessApparel, setFitnessApparel] = useState([]);
  const [VRHeadsets, setVRHeadsets] = useState([]);
  const [Clothing, setClothing] = useState([]);

  useEffect(() => {
    let temparr = [];
    Products.category.map(item => {
      temparr.push(item);
    });
    setCategoryList(temparr);
    setSmartwatches(Products.category[0].data);
    setFitnessTrackers(Products.category[1].data);
    setHeadphones(Products.category[2].data);
    setSmartGlasses(Products.category[3].data);
    setFitnessApparel(Products.category[4].data);
    setVRHeadsets(Products.category[5].data);
    setClothing(Products.category[6].data);
    console.log('Succeed');
  }, []);
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{flex:1}}>
        <Header title={'E-Commerce App'} />
        <Image
          source={require('../../images/ban.jpg')}
          style={{
            marginTop: 10,
            width: '95%',
            height: 200,
            alignSelf: 'center',
            borderRadius: 10,
          }}
        />
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categoryList}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  style={{
                    padding: 10,
                    borderWidth: 1,
                    marginLeft: 10,
                    borderRadius: 10,
                  }}>
                  <Text>{item.category}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>



        {/* --------------------------------------------------------------------------------------------------------------- */}
        
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 1
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Smartwatches}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 2
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={FitnessTrackers}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 3
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Headphones}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 4
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={SmartGlasses}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 5
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={VRHeadsets}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 6
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={FitnessApparel}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>
        <Text style={{margin: 10, fontWeight: 'bold', alignSelf: 'center'}}>
          Helo there! 7
        </Text>
        <View style={{marginTop: 15}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={Clothing}
            renderItem={({item, index}) => {
              return (
             
                // <TouchableOpacity onPress={()=>{
                //   console.log('Button pressed!')
               
                
                // }
                // }>
                     
                <ItemCard item={item}/>
                
                // </TouchableOpacity>
               
               
                
              );
            }}
          />
        </View>






















      </View>
    </ScrollView>
  );
};

export default Main;
