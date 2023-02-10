import { View } from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";

const ProgressBar = (props) => {
  return (
    <View
      style={{
        marginTop: 4,
        alignItems: "center",
        width: "100%",
        height: 12,
        backgroundColor: props.BgColor != "" ? props.BgColor : "#ababab",
        borderRadius: 10,
        flexDirection: "row",
      }}
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[props?.FirstColor, props?.LastColor]}
        style={{
          maxWidth: "100%",
          minWidth: "0%",
          borderRadius: 10,
          height: 12,
          width: props?.Percentage,
        }}
      ></LinearGradient>
    </View>
  );
};

export default ProgressBar;
