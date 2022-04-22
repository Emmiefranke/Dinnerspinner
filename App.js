import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { dinners } from "./dinners";
import { styles } from "./styles";
import { SpinnerButton } from "./SpinnerButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{dinners[2].name}</Text>
      <SpinnerButton />
      <StatusBar style="auto" />
    </View>
  );
}
