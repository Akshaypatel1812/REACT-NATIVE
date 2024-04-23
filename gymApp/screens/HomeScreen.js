// screens/HomeScreen.js
import React from 'react';
import { Button, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

export default HomeScreen;
