import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MapView } from "@maplibre/maplibre-react-native";
import { Colors } from "../../constants/Colors";

function Atlas({ style, ...props }) {
  return (<MapView {...props} style={{ flex: 1 }}></MapView>)
}
export default Atlas;

const styles = StyleSheet.create({});
