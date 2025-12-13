import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function Heartbeat() {
  const [heart, setHeart] = useState(0);

  const onPressHeart = () => {
    setHeart(heart + 1);
  };

  return (
    <View style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#C7E6F5",
          padding: 20,
          borderRadius: 10,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onPressHeart}>
          <FontAwesome name="heart" size={40} color="orange" />
        </TouchableOpacity>

        <Text style={{ fontSize: 40, fontWeight: "bold" }}>{heart}</Text>
      </View>
    </View>
  );
}
