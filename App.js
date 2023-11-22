import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, StatusBar as SBar } from "react-native";

import { Provider } from "react-redux";
import { store } from "./app/store";

import Main from "./main";

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Main />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: SBar.currentHeight,
  },
});
