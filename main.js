import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import OverviewScreen from "./screens/OverviewScreen";
import AddProfile from "./screens/AddProfile";
import AddInvestment from "./screens/AddInvestment";

const Stack = createStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Overview"
          component={OverviewScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddProfile"
          component={AddProfile}
          options={{ headerTitle: "Add Profile" }}
        />
        <Stack.Screen
          name="AddInvestment"
          component={AddInvestment}
          options={{ headerTitle: "Add Investment" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
