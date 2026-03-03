import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FlatCards() {
  return (
      <SafeAreaView>
        <View>
          <Text style={styles.headingText}>FlatCards</Text>
          <View style={styles.container}>
            <View style={[styles.card, styles.pinkCard]}>
              <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.greenCard, ]}>
              <Text>Green</Text>
            </View>
            <View style={[styles.card, styles.aquaCard]}>
              <Text>Blue</Text>
            </View>
            <View style={[styles.card, styles.yellowCard]}>
              <Text>Yellow</Text>
            </View>
          </View>
        </View>
        <ScrollView></ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  headingText: {
    paddingHorizontal: 12,
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
  container: {
   flex: 1,
   flexDirection: 'row',
   padding: 8
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 8, 
  },
  pinkCard: {
    backgroundColor: 'pink',
  },
  aquaCard: {
    backgroundColor: 'aqua',
  },
  greenCard: {
    backgroundColor: 'green',
  },
  yellowCard: {
    backgroundColor: 'yellow',
  },
});


