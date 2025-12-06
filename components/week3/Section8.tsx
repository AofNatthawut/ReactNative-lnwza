import React from "react";
import { Alert, Text, View, TouchableOpacity } from "react-native";

export default function Hotel() {
  return (
    <View
      style={{padding: 20,borderTopWidth: 1,borderBottomWidth: 1,borderColor: "#ddd",flexDirection: "row",justifyContent: "space-between",alignItems: "center",}}
    >

      <View>
        <Text style={{ fontSize: 15, color: "#333",fontWeight: "600" }}>Price</Text>

        <Text
          style={{fontSize: 22,color: "#E76B55",fontWeight: "bold",marginTop: 5,}} >$399.99</Text>

        <Text
          style={{fontSize: 14,color: "#444",marginTop: 5,fontWeight: "600",}} >AVG/Night</Text>
      </View>

      
      <TouchableOpacity
        onPress={() => Alert.alert("Booked!")}
        style={{backgroundColor: "#E76B55", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10 }}
        activeOpacity={0.8}
      >
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }} >Book Now</Text>
      </TouchableOpacity>
    </View>
  );
}
