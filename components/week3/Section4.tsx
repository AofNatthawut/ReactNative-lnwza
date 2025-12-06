import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20 }}>
      
      {/* View ก้อนที่ 3 */}
      <View style={{ borderTopWidth: 1, borderBottomWidth:1 }}>
        <Text style={{ fontSize: 20 }}>Hotel Description</Text>
        <Text style={{ color: "#444444" }}>
          218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore
        </Text>
      </View>
    </View>
  );
}
