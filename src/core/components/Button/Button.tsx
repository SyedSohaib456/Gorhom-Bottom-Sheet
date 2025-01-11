import React from "react";
import { Pressable, Text } from "react-native";

type ButtonProps = {
title:string,
onPress:()=>void
};

function Button({onPress,title}: ButtonProps) {
  return <Pressable onPress={onPress} className="bg-gray-50 py-3 px-5">
    <Text>{title}</Text>
  </Pressable>;
}

export default Button;
