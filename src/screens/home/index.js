import {View, ImageBackground, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation()
  return (
    <View style={{flex: 1}}>

      <ImageBackground
        source={require('../../../assests/image/wallpaper.jpg')}
        style={styles.image}>
        <Pressable
          style={styles.searchButton}
          onPress={() => navigation.navigate('location')}>
            <Fontisto name="search" size={16} color={'#000'} />
          <Text style={styles.searchText}>
            {' '}
            Where are you going?
          </Text>
        </Pressable>

        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('explore clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
