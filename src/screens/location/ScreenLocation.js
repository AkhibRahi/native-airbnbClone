import { View, Text, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import Search from '../../../assests/data/Search'



export default function ScreenLocation() {

  

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
          <View style={styles.flatlistContainer}>
            <View style={styles.flatlistIcon}>
            <Entypo name="location-pin" size={25} color="black" />
            </View>
            <Text style={styles.flatlistDesc}>{item.description}</Text>
        </View>
      )}
      />
    </View>
  )
}