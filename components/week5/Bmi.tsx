import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [description, setDescription] = useState("Normal");

  const onPressButton = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);

    let output = w / (((h / 100) * h) / 100);
    const bmiValue = output.toFixed(2);
    setBmi(bmiValue);

    const thisBMI = output;

    let desc = "";
    if (thisBMI < 18.5) {
      desc = "Underweight";
    } else if (thisBMI >= 18.5 && thisBMI <= 24.99) {
      desc = "Normal";
    } else if (thisBMI >= 25 && thisBMI <= 29.99) {
      desc = "Overweight";
    } else if (thisBMI >= 30 && thisBMI <= 34.99) {
      desc = "Obese";
    } else {
      desc = "Extremely Obese";
    }

    setDescription(desc);
  };

  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput
          onChangeText={(newWeight) => setWeight(newWeight)}
          value={weight}
          keyboardType="numeric"
          placeholder="Input your weight"
        />
      </View>

      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          onChangeText={(newHeight) => setHeight(newHeight)}
          value={height}
          keyboardType="numeric"
          placeholder="Input your height"
        />
      </View>

      <View style={{ flexDirection: "row", marginVertical: 20 }}>
        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 24 }}>{bmi}</Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            flex: 1,
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>{description}</Text>
        </View>
      </View>

      <TouchableOpacity onPress={onPressButton}>
        <View
          style={{ padding: 20, backgroundColor: "blue", borderRadius: 40 }}>
          <Text style={{ fontSize: 30, textAlign: "center", color: "white" }}>
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
