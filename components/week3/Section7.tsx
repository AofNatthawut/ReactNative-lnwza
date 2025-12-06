import React from "react";
import { Image, Text, View } from "react-native";

export default function Card() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 10 }}>
        Room Type
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 10 }}
          source={require("@/assets/week3/room-8.jpg")}
        />

        <View
          style={{ paddingLeft: 12, flex: 1, justifyContent: "space-between" }}
        >
          <Text style={{ fontSize: 17, fontWeight: "600" }}>
            Standard Twin Room
          </Text>

          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "700",
                color: "#E76B55",
                marginBottom: 4,
              }}
            >
              $399.99
            </Text>

            <Text style={{ fontSize: 14, color: "#3AA6E9", fontWeight: "500" }}>
              Hurry Up! This is your last room!
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
