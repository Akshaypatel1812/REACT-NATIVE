import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';
import { useState } from 'react';

export default function App() {
  
  const [darkMode, setdarkMode] = useState(true)
  return (
    <ScrollView>
    <View style={[styles.container,darkMode ? styles.dark : styles.light]}>
      <Card Theme={darkMode}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Text>Hello</Text>
      <StatusBar backgroundColor={darkMode ? "#222222" : "#ffffff"} barStyle={darkMode ? "dark" : "light"} />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:15,
  
    alignItems: 'center',
    justifyContent: 'center',
  },

  light:{
    backgroundColor:"white",
    text:"black",
  },

  dark:{
    backgroundColor:"black",
    text:'#222222',
  }
});
