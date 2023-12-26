import { View, Text, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../../../assests/data/Search'
import { useNavigation } from '@react-navigation/native';




export default function ScreenLocation() {

  const navigation = useNavigation()

    const [textInput, setTextInput] = useState('')
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder='Where are you going?'
      value={textInput}
      onChangeText={setTextInput}
      style={styles.textinput}
      >
      </TextInput>

      <FlatList 
      data={Search}
      renderItem={({item})=> (
          <Pressable onPress={()=> navigation.navigate('guests') } style={styles.flatlistContainer}>
            <View style={styles.flatlistIcon}>
            <Entypo name="location-pin" size={25} color="black" />
            </View>
            <Text style={styles.flatlistDesc}>{item.description}</Text>
        </Pressable>
      )}
      />
    </View>
  )
}