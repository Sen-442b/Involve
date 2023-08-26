import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

type AvatarPropsType = { size: "small" | "medium" | "large"; initials: string };
const Avatar = ({ size, initials }: AvatarPropsType) => {
  const [avatarSize, setAvatarSize] = useState(35);

  useEffect(() => {
    switch (size) {
      case "small":
        setAvatarSize(35);
        break;
      case "medium":
        setAvatarSize(70);
        break;
      case "large":
        setAvatarSize(105);
        break;
    }
  }, []);

  return (
    <View style={[styles.avatar, { width: avatarSize, height: avatarSize }]}>
      <Text style={styles.initials}>{initials}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 9999, // Large value to make it round
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  initials: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

export default Avatar;
