import React from 'react';
import {Pressable, Text} from 'react-native';

type ButtonProps = {
  title: string;
  onPress: () => void;
};

function Button({onPress, title}: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="flex-row items-center justify-center bg-pink-400 py-3 px-5">
      <Text className='text-lg text-white'>{title}</Text>
    </Pressable>
  );
}

export default Button;
