import {Pressable, StyleSheet} from "react-native";
import { Colors } from "../constants/Colors";

function ThemedButton ({style, ...props}) {
    return (
        <Pressable 
        {...props} 
        style={({pressed}) => [styles.btn, style, pressed && styles.pressed]}>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    btn: {
      backgroundColor: Colors.primary,
      padding: 15,
      borderRadius: 6,
    },
    pressed: {
      opacity: 0.75,
    },
});

export default ThemedButton;