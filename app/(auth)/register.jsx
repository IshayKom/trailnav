import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { useState } from "react";
import { Colors } from "../../constants/Colors";


import Spacer from "../../components/Spacer";
import ThemedButton from "../../components/ThemedButton";
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedText from "../../components/ThemedText";
import ThemedView from "../../components/ThemedView";
import { useUser } from "../../hooks/useUser";

const register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);

  const {register} = useUser()

  const handleSumbit = async () => {
    setError(null);

    console.log("Register button pressed", email, password, name);
    try {
      await register(email, password, name);
    } catch (error) {
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container}>
        
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

        <ThemedTextInput
          style={{ width: "80%", marginBottom: 20 }}
          placeholder="Full Name"
          onChangeText={setName}
          value={name}
        />

        <ThemedButton onPress={handleSumbit}>
          <Text style={{ color: "white" }}>Register</Text>
        </ThemedButton>

        <Spacer/>

        {error && <Text style={styles.error}>{error}</Text>}

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
  error: {
      colors: Colors.warning,
      padding: 10,
      backgroundColor: '#f5c1c8',
      borderColor: Colors.warning,
      borderWidth: 1,
      borderRadius: 6,
      marginHorizontal: 10, 
    }
});
