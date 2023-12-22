import React, { useState } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/home/index';
import Post from './src/components/post/post';
import Feed from './assests/data/Feed';
import SearchScreen from './src/screens/search/searchScreen';
import ScreenLocation from './src/screens/location/ScreenLocation';
import Guest from './src/screens/guest/Guest';

import 'react-native-gesture-handler';
import Router from './src/navigations/Router';



const YourApp = () => {

 const post2 = Feed[2]
  
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <SafeAreaView style={{flex:1}}>
      {/* <HomeScreen/> */}
      {/* <Post post={post2}/> */}
      {/* <SearchScreen/> */}
      {/* <ScreenLocation/> */}
      {/* <Guest/> */}
      <Router/>
    </SafeAreaView> 
    </>
  );
};

export default YourApp;