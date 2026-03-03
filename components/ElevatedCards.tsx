import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View >
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Here</Text>
        </View> 
        <View style={[styles.card, styles.cardElevated]}>
          <Text>To</Text>
        </View> 
        <View style={[styles.card, styles.cardElevated]}>
          <Text>See</Text>
        </View> 
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Elevated</Text>
        </View> 
        <View style={[styles.card, styles.cardElevated]}>
          <Text>Scroll List</Text>
        </View> 

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  container: {
    padding: 8,
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    marginRight: 8,
  },

  cardElevated: {
    backgroundColor: '#CAD5E2',
    elevation: 4,
    shadowOffset: {
        width: 1,
        height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    shadowRadius: 2
  },
});
