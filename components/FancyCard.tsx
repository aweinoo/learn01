import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  card: {},

  cardElevated: {},
});
