import {
  StyleSheet,
  TouchableWithoutFeedback,
  useColorScheme,
  PermissionsAndroid,
  Platform,
  View,
} from "react-native";
import { useEffect, useRef, useState } from "react";
import ThemedView from "../../components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import ThemedRoundButton from "../../components/ThemedRoundButton";
import { Colors } from "../../constants/Colors";
import {
  Camera,
  MapView,
  UserLocation,
} from "@maplibre/maplibre-react-native";
import CustomMarker from "../../components/maps/markers/CustomMarker";
import ThemedMapTypeList from "../../components/maps/controls/ThemedMapTypeList";
import ThemedMapLayersList from "../../components/maps/controls/ThemedMapLayersList";

const map = () => {
  // Gets current color scheme
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const cameraRef = useRef(null);

  const [currentMapType, setCurrentMapType] = useState("topo-v4");

  const MAPTILER_API_KEY = "DcdHRYjDQxH3znvUsFqb"; // CHANGE ASAP WHEN POSSIBLE PLS

  // Map Overlay States
  const [areMapButtonsVisible, setAreMapButtonVisible] = useState(false);
  const [areLayersButtonsVisible, setAreLayersButtonsVisible] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);

  //Marker Coordinates State
  const [markerCoord, setMarkerCoord] = useState();

  //Request Location Permission on Android
  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === "android") {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: "Location Permission",
              message: "This app needs access to your location.",
              buttonNeutral: "Ask Me Later",
              buttonNegative: "Cancel",
              buttonPositive: "OK",
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Location permission granted");
          } else {
            console.log("Location permission denied");
          }
        } catch (error) {
          console.warn(error);
        }
      }
    };
    requestLocationPermission();
  }, []);

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


  return (
    <ThemedView style={styles.Container}>
      <TouchableWithoutFeedback
        onPressIn={() => {
          setAreMapButtonVisible(false);
          setIsFollowing(false);
          setAreLayersButtonsVisible(false);
        }}
      >
        <MapView
          style={{ flex: 1 }}
          onLongPress={(e) => {
            handleLongPress(e);
          }}
          mapStyle={`https://api.maptiler.com/maps/${currentMapType}/style.json?key=${MAPTILER_API_KEY}`}
          compassViewPosition={3}
        >
          <UserLocation
            renderMode="native"
            androidRenderMode="compass"
            minDisplacement={1}
          />
          <Camera
            ref={cameraRef}
            followUserLocation={isFollowing}
            followUserMode={"normal"}
            followZoomLevel={15}
            defaultSettings={{
              centerCoordinate: [35.081831, 31.4117],
              zoomLevel: 6,
            }}
          />

          {/* VectorSource goes Here in the future*/}

          {markerCoord && <CustomMarker Coords={markerCoord} />}
        </MapView>
      </TouchableWithoutFeedback>

      {/* MAP OVERLAY STUFF: */}

      <View style={styles.mapOverlay}>
        {/* Follow User Location Button */}
        {!isFollowing && (
          <ThemedRoundButton
            style={styles.followButton}
            onPress={() => {
              setAreMapButtonVisible(false);
              setIsFollowing(true);
              setAreLayersButtonsVisible(false);
            }}
          >
            <Ionicons size={20} name="locate" color={theme.iconColor} />
          </ThemedRoundButton>
        )}

        {/* Map Type Button */}

        <ThemedRoundButton
          style={[
            styles.floatingButton,
            areMapButtonsVisible === true && styles.pressed,
          ]}
          onPress={() => setAreMapButtonVisible(!areMapButtonsVisible)}
        >
          <Ionicons
            size={20}
            name={areMapButtonsVisible ? "map" : "map-outline"}
            color={
              areMapButtonsVisible ? theme.iconColorFocused : theme.iconColor
            }
          />
        </ThemedRoundButton>
        {areMapButtonsVisible && (
          <ThemedMapTypeList
            currentType={currentMapType}
            setCurrentType={setCurrentMapType}
          />
        )}

        {/* Map Layers Button */}
        <ThemedRoundButton
          style={[
            styles.layersButton,
            areLayersButtonsVisible === true && styles.pressed,
          ]}
          onPress={() => setAreLayersButtonsVisible(!areLayersButtonsVisible)}
        >
          <Ionicons
            size={20}
            name={areLayersButtonsVisible ? "layers" : "layers-outline"}
            color={
              areLayersButtonsVisible ? theme.iconColorFocused : theme.iconColor
            }
          />
        </ThemedRoundButton>
        {areLayersButtonsVisible && (
          <ThemedMapLayersList
          // Add Functionality to layers - in the form of check boxes probably
          />
        )}
      </View>
      {/* END OF MAP OVERLAY STUFF */}
    </ThemedView>
  );
};

export default map;

const styles = StyleSheet.create({
  Container: {
    justifyContent: "center",
    flex: 1,
  },
  mapOverlay: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  floatingButton: {
    top: 40,
    right: 5,
    elevation: 5,
  },
  followButton: {
    bottom: 5,
    right: 55,
    elevation: 5,
  },
  layersButton: {
    top: 40,
    left: 5,
    elevation: 5,
  },
  map: {
    flex: 1,
  },
  pressed: {
    opacity: 0.75,
  },
});
