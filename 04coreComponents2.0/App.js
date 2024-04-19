import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ActivityIndicator ,Button, Alert } from 'react-native';

export default function App() {

  const Ahandler=()=>{
    Alert.alert("invalid data","invalid birthdate");
  }

  const Ahandler2=()=>{
    Alert.alert("invalid data","invalid birthdate",[
      {
        text:'cancel',
        onPress:()=>{console.log("cancel pressed")}
      },

      {
        text:'ok',
        onPress:()=>{console.log("ok pressed")}
      }
    ]);
  }
  return (
    <View style={styles.container}>
      
      <StatusBar backgroundColor="yellow" barStyle="light-content" />
      {/* <ActivityIndicator size="medium" color="black" animating={true}/> */}
      <Button title="Alert" onPress={Ahandler}/>

      <Button title="Alert2" onPress={Ahandler2}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
