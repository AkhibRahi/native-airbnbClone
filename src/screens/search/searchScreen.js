import { View, FlatList } from 'react-native'
import React from 'react'
import Feed from '../../../assests/data/Feed'
import Post from '../../components/post/post'

export default function SearchScreen() {
  return (
    <View>
      <FlatList 
      data={Feed}
      renderItem={({item})=> <Post post={item} />}
      />
    </View>
  )
}