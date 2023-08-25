import { View, Text } from "react-native";
import React, { useState } from "react";
import SearchBar from "@/components/SearchBar";

const Discover = () => {
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState(false);

  return (
    <View>
      <SearchBar
        clicked={clicked}
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        setClicked={setClicked}
      />
    </View>
  );
};

export default Discover;
