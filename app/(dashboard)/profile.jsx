import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import { useUser } from "../../hooks/useUser";
import ThemedButton from "../../components/ThemedButton";

const profile = () => {
  const [error, setError] = useState(null);

  const { logout, user } = useUser();
  
  const handleSubmit = async () => {
    setError(null);
    try {
      await logout();
    } catch (error) {
      setError(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <ThemedView style={styles.Container}>
      <ThemedText title={true} style={styles.heading}>
        HERE IS A BEAUTIFUL PROFILE
      </ThemedText>
      <Spacer />

      <ThemedText title={true} style={styles.heading}> {user.email} </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <ThemedText style={{ color: "white" }}>Logout</ThemedText>
      </ThemedButton>

      {error && <Text style={styles.error}>{error}</Text>}
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
  error: {
    colors: Colors.warning,
    padding: 10,
    backgroundColor: "#f5c1c8",
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,
  },
});
