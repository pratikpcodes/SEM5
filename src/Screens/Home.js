import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import Cart from './bottom/Cart';
import Account from './bottom/Account';
import Wishlist from './bottom/Wishlist';
import Main from './bottom/Main';
import Search from './bottom/Search';
const Home = () => {
  const [tab, setTab] = useState(0);

  return (
    <View style={{flex: 1,}}>
      {tab == 0 ? (
        <Main />
      ) : tab == 1 ? (
        <Cart />
      ) : tab == 2 ? (
        <Search />
      ) : tab == 3 ? (
        <Wishlist />
      ) : (
        <Account />
      )}
      <View
        style={{
          marginTop:10,
          padding: 0,
          width: '100%',
          height: 60,
          alignItems: 'center',
          position:'relative',

          bottom: 0,
          flexDirection: 'row',
          backgroundColor: '#fff',
        }}>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            setTab(0);
          }}>
          <Image
            source={require('../images/home.png')}
            style={{
              width: 24,
              height: 24,  tintColor:tab==0?'#000':'#8e8e8e'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            setTab(1);
          }}>
          <Image
            source={require('../images/add-cart.png')}
            style={{
              width: 24,
              height: 24,  tintColor:tab==1?'#000':'#8e8e8e'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: '25%',

            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            setTab(2);
          }}>
          <Image
            source={require('../images/search.png')}
            style={{
              width: 24,
              height: 24,  tintColor:tab==2?'#000':'#8e8e8e'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            setTab(3);
          }}>
          <Image
            source={require('../images/wishlist.png')}
            style={{
              width: 24,
              height: 24,  tintColor:tab==3?'#000':'#8e8e8e'
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: '20%',
            height: 24,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
          }}
          onPress={() => {
            setTab(4);
          }}>
          <Image
            source={require('../images/profile-user.png')}
            style={{
              width: 24,
              height: 24,
              tintColor:tab==4?'#000':'#8e8e8e'
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
