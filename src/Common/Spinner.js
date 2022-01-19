import React from "react";
import { View, Image, StyleSheet, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Spinner = ({
  size,
  backgroundColor,
  spinnercolor,
  width,
  height,
  marginTop,
  borderRadius,
}) => {
  return (
    <LinearGradient
      colors={["#FFA420", "#FE7027"]}
      style={[
        styles.linearGradient,
        { width: width || 206, borderRadius: borderRadius || 20 },
      ]}
    >
      <ActivityIndicator
        size={size || "large"}
        color={spinnercolor || "#fff"}
      />
    </LinearGradient>
  );
};

var styles = StyleSheet.create({
  linearGradient: {
    minHeight: 40,
    maxHeight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Spinner;
