import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 10 }}>
      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 4 / 2 }}
          source={require("@/assets/week3/room-6.jpg")}
        />
      </View>
    
    </View>
  );
}
