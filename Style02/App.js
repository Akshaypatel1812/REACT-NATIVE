import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View ,SafeAreaView} from "react-native";
import FlatCards from "./components/FlatCards";
import Search from "./components/Search";

export default function App() {
  return( 
  <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" style="light" />
      <Search/>
      <FlatCards/>
  </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#2D2D2D',
    flex:1,
    marginTop:36
  }
});
