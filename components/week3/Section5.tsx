import React from "react";
import {  View, } from "react-native";
import MyIcon from "./MyIcon";


export default function Menu() {
  return (
    <View
  style={{flexDirection: "row", justifyContent: "space-between",}}>
  <MyIcon title="wifi" name="wifi" size={30} color="#338b76ff" />
  <MyIcon title="coffee" name="coffee" size={30} color="#338b76ff" />
  <MyIcon title="bath" name="bath" size={30} color="#338b76ff" />
  <MyIcon title="car" name="car" size={30} color="#338b76ff" />
  <MyIcon title="paw" name="paw" size={30} color="#338b76ff" />
</View>
  );
}
