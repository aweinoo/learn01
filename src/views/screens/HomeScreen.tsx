import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useUserViewModel } from '../../viewModels/useUserViewModel';

const HomeScreen = () => {
  const { users, loading } = useUserViewModel();

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <Text> (item.name)</Text>}
      />
    </View>
  );
};

export default HomeScreen;
