import React from 'react';
import {Pressable, Text} from 'react-native';

interface Props {
  onPress: () => void;
}

export const SpinnerButton = ({onPress}: Props) => {
  return (
    <Pressable onPress={onPress}>
      <Text>Test</Text>
    </Pressable>
  );
};
