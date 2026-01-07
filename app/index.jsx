import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

// Themed Components
import ThemedView from "../components/ThemedView";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const Home = () => {
  return (
    <ThemedView style={styles.Container}>
      <Text style={styles.title}>Navigation App</Text>
      <Spacer />
      <Text>
        <ThemedText>Welcome to TrailNav!</ThemedText>
      </Text>

      <Link href="/login" style={styles.link}>
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" style={styles.link}>
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/about" style={styles.link}>
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/map" style={styles.link}>
        <ThemedText>Map Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  img: {
    marginBottom: 10,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: "blue",
  },
});
