import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";

export default function Event(props: any) {
  const [events, setEvents] = useState<any[]>([]);

  const loadEvents = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json"
      );
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Up Coming Events</Text>
      <Text style={{ color: "grey", marginBottom: 10 }}>
        What's the Worst That Could Happend
      </Text>
      <FlatList
        horizontal={true}
        data={events}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => {
          return (
            <View style={{ marginRight: 15, width: 250 }}>
              <Image
                source={{ uri: item.uri }}
                style={{
                  width: "100%",
                  height: 140,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  borderWidth: 1,
                  borderColor: "#ddd",
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
              >
                <View style={{ padding: 10 }}>
                  <Text
                    style={{
                      fontSize: 16,
                      color: "red",
                      textAlign: "center",
                    }}
                  >
                    {item.month}
                  </Text>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {item.date}
                  </Text>
                </View>
                <View style={{ padding: 10, flex: 1 }}>
                  <Text style={{ fontSize: 14, fontWeight: "bold" }}>
                    {item.title}
                  </Text>
                  <Text style={{ color: "grey" }}>{item.datetime}</Text>
                  <Text style={{ color: "grey" }}>{item.place}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
