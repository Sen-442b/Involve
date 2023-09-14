import { useRef, useState } from "react";
import {
  Text,
  Platform,
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  actions,
  RichEditor,
  RichToolbar,
} from "react-native-pell-rich-editor";

const AddStory = () => {
  const [pageLength, setPageLength] = useState<number>(1);
  const [wordsPerPage, setWordsPerPage] = useState<number>(200);
  const [editorHeight, setEditorHeight] = useState<number>(0);
  const richText = useRef();
  const handleEditorChange = (descriptionElementStr: string) => {
    const descriptionText = descriptionElementStr
      .replace(/<(.|\n)*?>/g, "")
      .trim();
    console.log({ descriptionText });
    const wordLength = descriptionText.split(" ").length;
    if (wordLength > wordsPerPage) {
      setPageLength((prevPageLength) => ++prevPageLength);
      setWordsPerPage((prevWordsPerPage) => prevWordsPerPage + wordsPerPage);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <RichEditor
            onChange={handleEditorChange}
            androidHardwareAccelerationDisabled={true}
            ref={richText}
            editorStyle={styles.pad}
            onHeightChange={(e) => setEditorHeight(e)}
            placeholder="Rich Text Editor"
            pasteAsPlainText={true}
          />
        </KeyboardAvoidingView>
      </ScrollView>

      <Text>Page: {pageLength}</Text>
      <RichToolbar
        selectedIconTint="red"
        editor={richText}
        actions={[
          actions.setBold,
          actions.setItalic,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.setUnderline,
        ]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingLeft: 10,
  },
  pad: {
    backgroundColor: "red",
  },
});

export default AddStory;
