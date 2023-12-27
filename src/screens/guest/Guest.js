import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './style';

import { useNavigation } from '@react-navigation/native';

export default function Guest() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation()
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      {/* <View style={styles.guestContainer}>
        <View style={styles.icon}>
          <Fontisto name="arrow-left" size={16} color="black" />
        </View>
        <View style={styles.guestTitleContainer}>
          <Text style={styles.guestTitle}>Tenerife,Spain</Text>
          <Text style={styles.guestDate}>11-14 Dec</Text>
        </View>
      </View> */}
      <View>
        <View style={styles.category}>
          <View>
            <Text style={styles.categoryAdults}>Adults</Text>
            <Text style={styles.categoryAge}>Age 13 or above</Text>
          </View>
          <View style={styles.counts}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.countButton}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={styles.number}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.countButton}>
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
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.countButton}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={styles.number}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.countButton}>
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
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.countButton}>
              <Text style={{fontSize: 20}}>-</Text>
            </Pressable>
            <Text style={styles.number}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(adults + 1)}
              style={styles.countButton}>
              <Text style={{fontSize: 20}}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>

      <Pressable onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'searchResults',
            },
          })
        } style={styles.searchButton}>
        <Text style={styles.searchText}>
          Search
        </Text>
      </Pressable>
    </View>
  );
}
