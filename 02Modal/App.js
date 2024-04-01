import { useState } from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Modal,Button } from 'react-native';

export default function App() {

  const [setModal, setsetModal] = useState(false);
  return (
    <View style={{paddingTop:40}}>
      <Text style={{textAlign:'center', fontSize:20}}>Simple View</Text>
      <Button title='Model View' color="midnightblue" onPress={()=>{setsetModal(true)}}/>
      <Modal visible={setModal} onRequestClose={()=>{setsetModal(false)}} animationType='slide'>
        <View style={{backgroundColor:'lightgreen',flex:1}}>
          <Text style={{alignItems:'center',textAlign:'center', paddingTop:30,fontSize:25}}>This is Modal View</Text>
          <Button color="red" title='Close' onPress={()=>{setsetModal(false)}}/>
        </View>
      </Modal>
      
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
