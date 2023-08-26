import React, { Dispatch, SetStateAction } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Pressable,
  Text,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
type SearchBarPropsType = {
  clicked: boolean;
  searchPhrase: string;
  setSearchPhrase: Dispatch<SetStateAction<string>>;
  setClicked: Dispatch<SetStateAction<boolean>>;
};
const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}: SearchBarPropsType) => {
  return (
    <View style={styles.container}>
      <View
        style={clicked ? styles.searchBar__clicked : styles.searchBar__blur}
      >
        {/* search Icon */}
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {/* cross Icon, depending on whether the search bar is clicked & non empty input */}
        {clicked && searchPhrase && (
          <Entypo
            name="cross"
            size={20}
            color="black"
            style={{ padding: 1 }}
            onPress={() => {
              setSearchPhrase("");
            }}
          />
        )}
      </View>
      {/* cancel button, depending on whether the search bar is clicked or not */}
      {clicked && (
        <View style={styles.cancelContainer}>
          <Pressable
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Cancel</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    gap: 8,
  },
  searchBar__blur: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#f4f8f6",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "85%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
  cancelContainer: {
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    // marginLeft: 8,
  },
});
