import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Greet from "./components/greet";

export default function App() {
  return (
    <View style={styles.container}>
      <Greet name="Akshay" />

      <View style={[styles.box1 , styles.androidShadow]}>
        <Text>Box-1</Text>
      </View>

      <View style={[styles.box2 , styles.androidShadow]}>
        <Text>Box-2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  box1:{
    height:100,
    width:100,
    padding:30,
    backgroundColor:"pink",
    margin:10
  },

  box2:{
    height:100,
    width:100,
    padding:30,
    backgroundColor:"lightblue",
    margin:10
  },

  androidShadow:{
    elevation:20
  },

});
