import React from "react";
import { useLottie } from "lottie-react";
import * as animationData from "../../assets/animation/page-not-found.json";

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);
  return <div>{View}</div>;
};

export default NotFound;
