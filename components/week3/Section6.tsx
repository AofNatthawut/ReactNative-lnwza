import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20 }}>
      {/* View ก้อนที่ 1  */}
      <View style={{ flexDirection: "column", padding: 10 }}></View>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20 }}>Location</Text>
        <Text style={{ color: "#444444" }}>
          218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor incididunt ut labore et…
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ flex: 1, resizeMode: "cover", aspectRatio: 3 }}
          source={require("@/assets/week3/map.jpg")}
        />
      </View>
      
    </View>
  );
}
