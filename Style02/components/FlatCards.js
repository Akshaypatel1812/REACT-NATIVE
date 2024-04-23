import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity, ImageBackground } from "react-native";

export default FlatCards = () => {
  return (
    <View style={styles.meal}>
      <Text style={styles.heading}>Meals</Text>
      <View style={styles.container}>
        <TouchableOpacity style={styles.touch}>
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/2662875/pexels-photo-2662875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }} // Use uri instead of require
            style={[styles.box, styles.box1]}
          ></ImageBackground>
          <Text style={styles.text}>Breakfast</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/674574/pexels-photo-674574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }} // Use uri instead of require
            style={[styles.box, styles.box1]}
          ></ImageBackground>
          <Text style={styles.text}>Lunch</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touch}>
          <ImageBackground
            source={{
              uri: "https://images.pexels.com/photos/3493579/pexels-photo-3493579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            }} // Use uri instead of require
            style={[styles.box, styles.box1]}
          ></ImageBackground>
          <Text style={styles.text}>Dinner</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 7,
  },

  meal: {
    marginTop: 7,
  },

  container: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 6,
  },

  box1: {
    color: "white",
    height: 100,
    width: 120,
    borderBlockColor: "white",
    borderRadius: 3,
  },

  box2: {
    color: "white",
    height: 100,
    width: 120,
    borderBlockColor: "white",
    backgroundColor: "lightblue",
    borderRadius: 3,
  },

  text: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 2,
  },

  box3: {
    color: "white",
    height: 100,
    width: 120,
    borderBlockColor: "white",
    backgroundColor: "lightgreen",
    borderRadius: 3,
  },

  box: {
    justifyContent: "center",
    alignItems: "center",
  },

  touch: {
    alignItems: "center",
  },
});
