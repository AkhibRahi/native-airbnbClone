import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function Guest() {
  return (
    <View>
      <View style={styles.guestContainer}>
        <View style={styles.icon}>
          <Fontisto name="arrow-left" size={16} color="black" />
        </View>
        <View style={styles.guestTitleContainer}>
          <Text style={styles.guestTitle}>Tenerife,Spain</Text>
          <Text style={styles.guestDate}>11-14 Dec</Text>
        </View>
      </View>
      <View style={styles.category}>
        <View>
          <Text style={styles.categoryAdults}>Adults</Text>
          <Text style={styles.categoryAge}>Age 13 or above</Text>
        </View>
        <View style={styles.counts}>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>-</Text>
          </Pressable>
          <Text style={styles.number}>0</Text>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.category}>
        <View>
          <Text style={styles.categoryAdults}>Children</Text>
          <Text style={styles.categoryAge}>Age 2-12</Text>
        </View>
        <View style={styles.counts}>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>-</Text>
          </Pressable>
          <Text style={styles.number}>0</Text>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.category}>
        <View>
          <Text style={styles.categoryAdults}>Infants</Text>
          <Text style={styles.categoryAge}>Under 2</Text>
        </View>
        <View style={styles.counts}>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>-</Text>
          </Pressable>
          <Text style={styles.number}>0</Text>
          <Pressable style={styles.countButton}>
            <Text style={{fontSize: 20}}>+</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
