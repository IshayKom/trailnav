import { StyleSheet, useColorScheme, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/Colors";
import ThemedButton from "../../ThemedButton";
import ThemedText from "../../ThemedText";

const MAP_TYPES = [
  { id: "topo", name: "Topology", url: "topo-v4" },
  { id: "streets", name: "Streets", url: "base-v4" },
  { id: "satellite", name: "Satellite", url: "hybrid-v4" },
  { id: "outdoor", name: "Outdoor", url: "outdoor-v4" },
];

const ThemedMapTypeList = ({currentType, setCurrentType}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      pointerEvents="box-none"
    >
      {MAP_TYPES.map((mapType) => (
        <ThemedButton
          key={mapType.id}
          onPress={() => setCurrentType(mapType.url)}
          style={[
            styles.styleButton,
            currentType === mapType.url && styles.pressed,
          ]}
        >
          <ThemedText style={styles.mapname}>{mapType.name}</ThemedText>
        </ThemedButton>
      ))}
    </ScrollView>
  );
};

export default ThemedMapTypeList;

const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    top: 90,
    right: 10,
    width: 120,
    backgroundColor: "transparent",
  },
  scrollContent: {
    paddingVertical: 10,
    gap: 7,
    flexDirection: "column",
    alignItems: "stretch",
  },
  pressed: {
    opacity: 0.75,
  },
  mapname: {
    textAlign: "center",
  },
});
