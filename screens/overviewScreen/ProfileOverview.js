import { View, Text, Button } from "react-native";

const ProfileOverview = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("AddProfile");
  };

  return (
    <View>
      <Text>ProfileOverview</Text>

      <Button onPress={handleNavigation} title="Add Profile" />
    </View>
  );
};

export default ProfileOverview;
