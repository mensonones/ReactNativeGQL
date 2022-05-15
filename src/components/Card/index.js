import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Card = ({ card }) => (
  <View
    activeOpacity={1}
    style={styles.card}
  >
    <Image
      style={styles.image}
      source={{ uri: card.image}}
      resizeMode="contain"
    />
    <View style={styles.imageDescriptionContainer}>
      <Text style={styles.text}>
        {`${card.name}, ${card.gender}`}
      </Text>
    </View>
  </View>
);

export default Card;