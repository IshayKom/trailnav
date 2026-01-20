import { useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";
import {
  Images,
  ShapeSource,
  SymbolLayer,
} from "@maplibre/maplibre-react-native";

const CustomMarker = ({Coords}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const MARKER_IMAGE = require("../../../assets/red-marker.png");

  const markerData = {
    type: "FeatureCollection",
    features: Coords
      ? [
          {
            type: "Feature",
            id: "dropped-pin",
            geometry: {
              type: "Point",
              coordinates: Coords, // [lng, lat]
            },
            properties: {
              title: "GOD",
            },
          },
        ]
      : [],
  };
  return (
    <ShapeSource id="longPressSource" shape={markerData}>
      <SymbolLayer
        id="longPressLayer"
        style={{
          iconImage: MARKER_IMAGE,

          iconAnchor: "bottom",

          iconSize: 0.08,
          iconAllowOverlap: true,

          // The text to display from properties
          textField: ["get", "title"],
          textSize: 12,

          // Essential for "locking" the pin to the spot
          textAnchor: "bottom",
          textOffset: [0.1, 1], // Adjust if it looks too high/low

          // Ensures marker is visible even if other labels are nearby
          textAllowOverlap: true,
          textIgnorePlacement: true,
        }}
      />
    </ShapeSource>
  );
};

export default CustomMarker;
