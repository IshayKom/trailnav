import { StyleSheet, useColorScheme, ScrollView } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../constants/Colors";
import ThemedButton from "../../ThemedButton";
import ThemedText from "../../ThemedText";

const LAYER_TYPES = [
  { id: "hiking_trail", name: "Hiking Trails", url: "topo-v4" },
  { id: "4x4_trail", name: "4X4 Trails", url: "base-v4" },
  { id: "street_road", name: "Streets", url: "hybrid-v4" },
  { id: "highway", name: "Highways", url: "outdoor-v4" },
];

const ThemedMapLayersList = ({currentType, setCurrentType}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={styles.scrollContainer}
      contentContainerStyle={styles.scrollContent}
      pointerEvents="box-none"
    >
      {LAYER_TYPES.map((layerType) => (
        <ThemedButton
          key={layerType.id}
          onPress={() => setCurrentType(layerType.url)}
          style={[
            styles.styleButton,
            currentType === layerType.url && styles.pressed,
          ]}
        >
          <ThemedText style={styles.mapname}>{layerType.name}</ThemedText>
        </ThemedButton>
      ))}
    </ScrollView>
  );
};

export default ThemedMapLayersList;

const styles = StyleSheet.create({
  scrollContainer: {
    position: "absolute",
    top: 90,
    left: 10,
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
