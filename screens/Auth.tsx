import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";

const Auth = () => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:"640421822010-nbcavrurhvsunc8p9bhv84jjinr9u96m.apps.googleusercontent.com",
      offlineAccess:false,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
      // if you want to access Google API on behalf of the user FROM YOUR SERVER
      hostedDomain: "", // specifies a hosted domain restriction
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: "", // [Android] specifies an account name on the device that should be used
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(JSON.stringify(userInfo));
      setUserInfo({ userInfo });
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log("user cancelled the login flow");
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(" operation (e.g. sign in) is in progress already");
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log("play services not available or outdated");

        // play services not available or outdated
      } else {
        console.log(JSON.stringify({ error }));
        console.log("some other error happened");
        // some other error happened
      }
    }
  };
  console.log("wow");
  return (
    <View>
      <GoogleSigninButton
        style={{ width: 230, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default Auth;
