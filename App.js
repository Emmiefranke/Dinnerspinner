import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { dinners } from "./dinners";
import { styles } from "./styles";
import { SpinnerButton } from "./SpinnerButton";
import { randomItem } from "./helpers";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{randomItem(dinners).name}</Text>
      <SpinnerButton />
      <StatusBar style="auto" />
    </View>
  );
}
