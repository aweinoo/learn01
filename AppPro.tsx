import React, { JSX } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context/lib/typescript/src/SafeAreaView';

function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <Text style={styles.cardTwo}>AppPro</Text>
        </View>
        <View style={isDarkMode ? styles.darkText : styles.lightText}>
          <Text style={styles.cardOne}>AppPro</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.cardOne}>AppPro</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.cardOne}>AppPro</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.cardOne}>AppPro</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
  },
  lightText: {
    color: '#ffffff',
    height: 100,
  },
  darkText: {
    color: '#000000',
    height: 100,
  },
  cardOne: {
    width: 100,
    height: 100,
    color: '#000000',
    backgroundColor: 'pink',
    margin: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTwo: {
    fontSize: 14,
    fontWeight: 400,
  },
});

export default AppPro;
