import { StyleSheet, useColorScheme } from "react-native";
import React, { useState } from "react";
import ThemedView from "../ThemedView";
import { Colors } from "../constants/Colors";
import { ScrollView } from "react-native/types_generated/index";
import ThemedButton from "../ThemedButton";
import ThemedMapButton from "./ThemedMapButton";

const ThemedMapList = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [types, setType] = useState(data);

  return (
    <ThemedView>
      <ScrollView>
        {data.map((data) => (
          <ThemedMapButton {...data} />
        ))}
      </ScrollView>

      
    </ThemedView>
  );
};

export default ThemedMapList;

const styles = StyleSheet.create({});
