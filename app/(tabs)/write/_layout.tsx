import { View, Text } from "react-native";

import { Slot, Stack } from "expo-router";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { TransitionPresets } from "@react-navigation/stack";

const WriteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default WriteLayout;
