import { Pressable, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

function ThemedRoundButton({ style, ...props }) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [styles.btn, style, pressed && styles.pressed]}
    ></Pressable>
  );
}
const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderCurve: "circular",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default ThemedRoundButton;
