import { StyleSheet, View } from "react-native";
import Box from "./components/Box";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Box style={{ backgroundColor: "#8e9b00" ,flex:1}}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" ,flex:1}}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" ,flex:1}}>Box 3</Box>
      <Box style={{ backgroundColor: "#ab9156" ,flex:1}}>Box 4</Box>
      <Box style={{ backgroundColor: "#6b0803" ,flex:1}}>Box 5</Box>
      <Box style={{ backgroundColor: "#1c4c56" ,flex:1}}>Box 6</Box>
      <Box style={{ backgroundColor: "#b95f21" ,flex:1}}>Box 7</Box> */}

    <Box style={{ backgroundColor: "#8e9b00" }}>Box 1</Box>
      <Box style={{ backgroundColor: "#b65d1f" }}>Box 2</Box>
      <Box style={{ backgroundColor: "#1c4c56" }}>Box 3</Box>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"flex-start",      //flex-start/end, space-between , space-evenly , center
    flexDirection:"column",        //by default it is column
    alignItems:"center",        // alighn-items do the same thing but in perpendicular direction
    marginTop: 64,
    borderWidth: 6,
    borderColor: "red",
    flexWrap:"wrap",
    height:300,
  },
});