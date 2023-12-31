import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Post = (props) => {

  const post = props.post

  return (
    <View style={styles.Container}>
      <Image
        source={{
          uri: post.image }}
        style={styles.Image}
      />
      <Text style={styles.bedroom}>{post.bed} bed . {post.bedroom} bedroom </Text>
      <Text style={styles.desc}>
        {post.title}
      </Text>
      <Text style={styles.price}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>
        / night
      </Text>
      <Text style={styles.total}>${post.totalPrice} / total</Text>
    </View>
  );
};
export default Post;
