import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const navigate = () => {
  return (
    <ThemedView style={styles.Container} safe = {true}>
      <ThemedText title={true} style={styles.heading}>
        HERE IS A BEAUTIFUL navigate
      </ThemedText>
      <Spacer />

    </ThemedView>
  );
};

export default navigate;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 24
  },
});
