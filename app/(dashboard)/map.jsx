import {
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  useColorScheme,
} from "react-native";
import { useState } from "react";
import ThemedView from "../../components/ThemedView";
import ThemedText from "../../components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import ThemedRoundButton from "../../components/ThemedRoundButton";
import Spacer from "../../components/Spacer";
import { Colors } from "../../constants/Colors";
import Atlas from "../../components/maps/Atlas";
import {
  Annotation,
  Camera,
  MapView,
  MarkerView,
  SymbolLayer,
} from "@maplibre/maplibre-react-native";
import ThemedButton from "../../components/ThemedButton";

const MAP_TYPES = [
  { id: "topo", name: "Topology", url: "topo-v4" },
  { id: "streets", name: "Streets", url: "base-v4" },
  { id: "satellite", name: "Satellite", url: "hybrid-v4" },
  { id: "outdoor", name: "Outdoor", url: "outdoor-v4" },
];

const map = () => {
  // Gets current color scheme
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const [currentType, setCurrentType] = useState(MAP_TYPES[0].url);
  const MAPTILER_API_KEY = "DcdHRYjDQxH3znvUsFqb"; // CHANGE ASAP WHEN POSSIBLE PLS
  const [markerCoord, setMarkerCoord] = useState();
  const [areMapButtonsVisible, setAreMapButtonVisible] = useState(false);

  const handleLongPress = async (e) => {
    try {
      const { geometry } = e;
      if (geometry && geometry.coordinates) {
        setMarkerCoord(geometry.coordinates);
        console.log("Map long pressed at:", geometry.coordinates);
      }
    } catch (error) {
      console.error("Error handling long press:", error);
    }
  };

  const handleMapLayers = async () => {
    setAreMapButtonVisible(!areMapButtonsVisible);
  };

  return (
    <ThemedView style={styles.Container}>
      //Map View Components using MapTiler at the moment
      <TouchableWithoutFeedback onPressIn={() => setAreMapButtonVisible(false)}>
        <MapView
          style={{ flex: 1 }}
          onLongPress={handleLongPress}
          mapStyle={`https://api.maptiler.com/maps/${currentType}/style.json?key=${MAPTILER_API_KEY}`}
          compassViewPosition={3}
        >
          <Camera
            defaultSettings={{
              zoomLevel: 6.5,
              animationMode: "moveTo",
              centerCoordinate: [35.081831, 31.4117], //Israel Coords
            }}
          />
          // need to add handler for after inputing text/image
          {markerCoord && (
            <MarkerView coordinate={markerCoord}>
              <ThemedText style={styles.markerText}>📍 אלוהים</ThemedText>
            </MarkerView>
          )}
        </MapView>
      </TouchableWithoutFeedback>
      // Choose Type of Map:
      <ThemedRoundButton
        style={[
          styles.floatingButton,
          areMapButtonsVisible === true && styles.pressed,
        ]}
        onPress={handleMapLayers}
      >
        <Ionicons
          size={20}
          name={areMapButtonsVisible ? "map" : "map-outline"}
          color={areMapButtonsVisible ? theme.iconColorFocused : theme.iconColor}
        />
      </ThemedRoundButton>
      {areMapButtonsVisible && (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}
          contentContainerStyle={styles.scrollContent}
          pointerEvents="box-none"
        >
          {MAP_TYPES.map((mapType) => (
            <ThemedButton
              key={mapType.id}
              onPress={() => setCurrentType(mapType.url)}
              style={[
                styles.styleButton,
                currentType === mapType.url && styles.pressed,
              ]}
            >
              <ThemedText style={styles.mapname}>{mapType.name}</ThemedText>
            </ThemedButton>
          ))}
        </ScrollView>
      )}
    </ThemedView>
  );
};

export default map;

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    flex: 1,
  },
  floatingButton: {
    top: 40,
    right: 10,
    elevation: 5,
  },
  map: {
    flex: 1,
  },
  scrollContainer: {
    position: "absolute",
    top: 90,
    right: 10,
    width: 120,
    backgroundColor: "transparent",
  },
  scrollContent: {
    paddingVertical: 10,
    gap: 7,
    flexDirection: "column",
    alignItems: "stretch",
  },
  pressed: {
    opacity: 0.75,
  },
  mapname: {
    textAlign: "center",
  },
  markerText: {
    color: "blue",
  }
});
