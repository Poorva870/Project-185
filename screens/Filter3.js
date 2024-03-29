import React from "react";
import { Image, View } from "react-native";

const Filter3 = ({
  face: {
    bounds: {
      size: { width: faceWidth, height: faceHeight }
    },
    leftEyePosition,
    rightEyePosition,
    noseBasePosition
    },
    source,
    width,
    height,
    left,
    right,
    top
}) => {
  const filterWidth = faceWidth * 2;
  const filterHeight = faceHeight * 0.6;

  const transformAngle = (
    angleRad = Math.atan(
      (rightEyePosition.y - leftEyePosition.y) /
        (rightEyePosition.x - leftEyePosition.x)
    )
  ) => (angleRad * 180) / Math.PI;

  return (
    <View
      style={{
        position: "absolute",
        left: leftEyePosition.x - filterWidth * 0.36,
        right: rightEyePosition.x - filterWidth * 0.15,
        top: noseBasePosition.y - filterHeight * 1.5
      }}
    >
      <Image
        source={require("../assets/crown-pic3.png")}
        style={{
          width: filterWidth,
          height: filterHeight,
          resizeMode: "contain",
          transform: [{ rotate: `${transformAngle()}deg` }]
        }}
      />
    </View>
  );
};

export default Filter3;
