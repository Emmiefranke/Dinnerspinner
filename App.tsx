import {Text, View, Button} from 'react-native';
import {dinners} from './dinners';
import {styles} from './styles';
import {SpinnerButton} from './SpinnerButton';
import {randomItem} from './helpers';
import React from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{randomItem(dinners).name}</Text>
      <SpinnerButton
        onPress={() => {
          alert('Test');
        }}
      />
    </View>
  );
}
