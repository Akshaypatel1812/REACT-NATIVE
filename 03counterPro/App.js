import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const [counter, setcounter] = useState(0)
  const [message, setmessage] = useState('')
  const increment=()=>{
    if(counter>=20){
      setmessage("Maximum Limit Reached");
      setTimeout(() => {
        setmessage('');
      }, 2000);
   }
   else{
    setcounter(counter+1)
   }
  }

  const decrement=()=>{
    if(counter<=0){
      setmessage("Manimum Limit Reached");
      setTimeout(() => {
        setmessage('');
      }, 2000);
   }
   else{
    setcounter(counter-1)
   }
  }
  
  return (
    <View style={{backgroundColor:"gray",flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{color:'white',fontSize:30}}>count is:{counter}</Text>
        <View style={{ flexDirection: 'row',marginTop: 20}}>
        <Button
          title="+"
          onPress={increment}
          style={{ marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'blue', borderRadius: 5, marginHorizontal: 10}}
        />
       <Text>     </Text>
       <Button
          title="-"
          onPress={decrement}
          style={{ marginHorizontal: 10, paddingHorizontal: 20, paddingVertical: 10, backgroundColor: 'blue', borderRadius: 5 , marginHorizontal: 10}}
        />
        </View>

        <Text style={{color:'red',fontSize:20}}>{message}</Text>
    </View>
  );
}


