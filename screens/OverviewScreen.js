import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import InvestmentOverview from "./overviewScreen/InvestmentOverview";
import ProfileOverview from "./overviewScreen/ProfileOverview";
import Settings from "./overviewScreen/Settings";

import { MaterialIcons } from "@expo/vector-icons";
import { myColors } from "../const/myColors";

const Tab = createMaterialBottomTabNavigator();

const OverviewScreen = () => {
  return (
    <Tab.Navigator
      activeColor={myColors.tabActive}
      inactiveColor={myColors.tabInactive}
      barStyle={{ backgroundColor: myColors.barBg }}
    >
      <Tab.Screen
        name="InvestmentOverview"
        component={InvestmentOverview}
        options={{
          tabBarLabel: "Overview",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-books" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileOverview"
        component={ProfileOverview}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="settings" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default OverviewScreen;
