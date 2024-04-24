import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>Box1</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.box2}>
        <Text>Box2</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.box3}>
        <Text>Box3</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.box4}>
        <Text>Box4</Text>
        <StatusBar style="auto" />
      </View>
 
      <View style={styles.box5}>
        <Text>Box5</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.box6}>
        <Text>Box6</Text>
        <StatusBar style="auto" />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 10,
    flexDirection:'row',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
    marginBottom:10,
  },
  box1: {
    backgroundColor: "pink",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  box2: {
    backgroundColor: "lightyellow",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  box3: {
    backgroundColor: "lightblue",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  box4: {
    backgroundColor: "lightgreen",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },

  box5: {
    backgroundColor: "orange",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },

  box6: {
    backgroundColor: "yellow",
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop:10,
  },
});
