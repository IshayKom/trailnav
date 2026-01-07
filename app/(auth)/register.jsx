import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import { Link } from "expo-router";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedInput";
import { useState } from "react";

const register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handeSumbit = () => {
    console.log("Register button pressed", email, password);
    // Handle register logic here
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title={true} style={styles.title}>
          Register for an account
        </ThemedText>

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Email"
          keyboardType="email-address"
          onChangeText={setEmail}
          value={email}
        />

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <ThemedButton onPress={handeSumbit}>
          <Text style={{ color: "white" }}>Register</Text>
        </ThemedButton>

        <Spacer height={20} />
        <Link href="/login">
          <ThemedText style={styles.linkText}>
            Already have an account? Sign In
          </ThemedText>
        </Link>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
