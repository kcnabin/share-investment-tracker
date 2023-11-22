import { View, Text, Button } from "react-native";

const InvestmentOverview = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("AddInvestment");
  };

  return (
    <View>
      <Text>InvestmentOverview</Text>

      <Button onPress={handleNavigation} title="Add Investment" />
    </View>
  );
};

export default InvestmentOverview;
