import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const profile = () => {
  return (
    <ThemedView style={styles.Container}>
      <ThemedText title={true} style={styles.heading}>
        HERE IS A BEAUTIFUL PROFILE
      </ThemedText>
      <Spacer />

    </ThemedView>
  );
};

export default profile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
  },
});
