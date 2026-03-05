import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 40 }} >
        <FlatCards></FlatCards>
        <ElevatedCards></ElevatedCards>
        <FancyCard></FancyCard>
        <ContactList></ContactList>
        <ActionCard></ActionCard>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;