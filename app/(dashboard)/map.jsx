import { StyleSheet, Text, View } from "react-native";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import Spacer from "../../components/Spacer";

const map = () => {
  return (
    <ThemedView style={styles.Container}>
      <Spacer />
      <ThemedText title={true} style={styles.heading}>
        HERE IS A BEAUTIFUL MAP
      </ThemedText>

    </ThemedView>
  );
};

export default map;

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
