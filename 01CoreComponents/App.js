import React, { useState } from "react";
import { View, Text, Image, ScrollView, Button, Pressable,Vibration } from "react-native";
const logoimg = require("./assets/favicon.png");
const logoimg2 = require("./assets/icon.png");

export default function App() {
  const [pressIn, setpressIn] = useState(null);

  const handlePressInTime = () => {
    setpressIn(Date.now());
  };

  const handlePressOutLong = () => {
    setpressIn(null); // Corrected the state function name
  };

  const handleLongPress = () => {
    const duration = Date.now() - pressIn;
    if (duration >= 3000) {
      console.log("pressed here for more than 3 sec");
      Vibration.vibrate();
    }
  };

  const handlePressIn = () => {
    setTimeout(() => {
      console.log("Print after 3sec ");
    }, 3000);
  };

  const handlePressOut = () => {
    // Corrected the clearTimeout function
    clearTimeout(timeout);
  };

  let timeout;

  return (
    <ScrollView>
      <View style={{ backgroundColor: "orange", paddingBottom: 60 }}>
        <Image source={logoimg2} style={{ width: "full", height: 500 }} />
        <Text
          style={{
            backgroundColor: "green",
            color: "white",
            alignItems: "center",
            textAlign: "center",
            height: 100,
            paddingTop: 40,
          }}
        >
          Hello
        </Text>

        <Text>
          If you need to generate Lorem Ipsum text with 300 words in a React
          Native application, you can modify the previous example to accommodate
          for that. Instead of limiting the number of words generated to a
          maximum of 30, you'll generate 300 words instead. Here's how you can
          do it:
        </Text>

        <Text>
          This will display Lorem Ipsum text with 300 words in your React Native
          application. Adjust the numWords prop as needed to generate a
          different number of words.
        </Text>

        <Text>
          If you need to generate Lorem Ipsum text with 300 words in a React
          Native application, you can modify the previous example to accommodate
          for that. Instead of limiting the number of words generated to a
          maximum of 30, you'll generate 300 words instead. Here's how you can
          do it:
        </Text>
        <Image source={logoimg} style={{ width: 200, height: 200 }} />
      </View>

      <View style={{ paddingTop: 10 }}>
        <ScrollView>
          <Button
            title="Click"
            onPress={() => {
              console.log("clicked");
            }}
            color="midnightblue"
            disabled
          />

          <Pressable
            style={{
              paddingBottom: 20,
              height: 100,
              backgroundColor: "yellow",
            }}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text
              style={{
                alignItems: "center",
                textAlign: "center",
                paddingTop: 40,
              }}
            >
              Press me for 3 sec
            </Text>
          </Pressable>

          <Pressable
            onPressIn={handlePressInTime}
            onLongPress={handleLongPress}
            delayLongPress={3000}
            onPressOut={handlePressOutLong}
          >
            <Text
              style={{
                alignItems: "center",
                textAlign: "center",
                backgroundColor: "red",
                padding:12
              }}
            >
              Press Duration
            </Text>
          </Pressable>
        </ScrollView>
      </View>
    </ScrollView>
  );
}
