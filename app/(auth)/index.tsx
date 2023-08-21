import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { useStore } from "@/store/client/useStore";

const Auth = () => {
  const [username, setUserName] = useState("");
  const setAuth = useStore((store) => store.setUser);

  const onBtnPress = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <Text>Sign in </Text>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setUserName(e)}
        placeholder="Enter username"
      />

      <Button
        onPress={() => setAuth({ authToken: "123", username })}
        title="Login"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: "60%",
  },
});

export default Auth;
