import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
export default function Hotel() {
  return (
    <View style={{ margin : 30 , padding : 15, borderWidth : 1, borderColor : 'gray', borderRadius : 10 , backgroundColor: "white" }}>
      {/* View ก้อนที่ 3 */}
      <View> 
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight:'bold' }}>
          Hilton San Francisco
        </Text>
      </View>
      {/* View ก้อนที่ 4 */}
     
        <View style={{ flexDirection: "row", justifyContent: 'center' }}>
          <FontAwesome name="star" size={20} color="#ff8a24ff" />
          <FontAwesome name="star" size={20} color="#ff8a24ff" />
          <FontAwesome name="star" size={20} color="#ff8a24ff" />
          <FontAwesome name="star" size={20} color="#ff8a24ff" />
          <FontAwesome name="star-half" size={20} color="#ff8a24ff" />
        </View>
        <View style={{ marginTop: 10 ,flexDirection: "row"}}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
            Facilities provided may range from a modest quality mattress in a
            small room to large suites
          </Text>
        </View>
      
      {/* View ก้อนที่ 5 */}
    </View>
  );
}
