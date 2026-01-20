import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedMapButton({style, mapType}) {
  const { id, mapname, url } = mapType

  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
    ></Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 6,
    marginVertical: 10,
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ThemedMapButton;
