import {
  Keyboard,
  StyleSheet,
  useColorScheme,
  TouchableWithoutFeedback,
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import ThemedTextInput from "../../components/ThemedTextInput";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemedRoundButton from "../../components/ThemedRoundButton";
import { SafeAreaView } from "react-native-safe-area-context";

const navigate = () => {
  // Gets current color scheme
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchViewVisible, setIsSearchViewVisible] = useState(false);

  const handleSearch = () => {
    // Search logic goes here but this .trim is just shit and doesnt work
    searchQuery.trim()
    if (searchQuery !== "") {
      console.log("Searching for:", searchQuery);
    }
    else {
      console.log("searchQuery is empty");
    }
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => (setIsSearchViewVisible(false), Keyboard.dismiss())}
    >
      <ThemedView style={styles.Container} safe={true}>
        <SafeAreaView>
          <Pressable onPress={(e) => e.stopPropagation()}>
            <View>
              <ThemedTextInput
                placeholder="Search for a location"
                style={styles.searchInput}
                onChangeText={setSearchQuery}
                onSubmitEditing={handleSearch}
                returnKeyType="search"
                onFocus={() => setIsSearchViewVisible(true)}
              />
              <ThemedRoundButton
                style={styles.searchButton}
                onPress={handleSearch}
              >
                <Ionicons
                  size={30}
                  name={"search-outline"}
                  color={theme.iconColor}
                />
              </ThemedRoundButton>
              {isSearchViewVisible && (
                <ThemedView style={styles.searchResultsContainer}>
                  <ThemedText>Search Results Here</ThemedText>
                </ThemedView>
              )}
            </View>
          </Pressable>
        </SafeAreaView>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default navigate;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  searchButton: {
    top: 5,
    height: 66,
  },
  searchInput: {
    top: 5,
    height: 66,
    width: 300,
    borderRadius: 10,
  },
  searchResultsContainer: {
    position: "absolute",
    top: 80,
    width: 300,
    height: 200,
    borderRadius: 15,
    backgroundColor: "purple",
    padding: 10,
  },

  heading: {
    fontWeight: "bold",
    fontSize: 24,
  },
});
