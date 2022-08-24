import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from "react-native";

function TodoInput(props) {
  const [enteredTodo, setEnteredTodo] = useState("");

  function todoInputHandler(text) {
    setEnteredTodo(text);
  }

  function addTodoHandler() {
    props.onAddTodo(enteredTodo);
    setEnteredTodo("");
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="Enter todo"
          style={styles.textInput}
          onChangeText={todoInputHandler}
          value={enteredTodo}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Todo" onPress={addTodoHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    backgroundColor: "#311b6b",
    alignItems: "center",
    justifyContent: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 5,
    width: "80%",
    padding: 8,
    margin: 16,
    backgroundColor: "#e4d0ff",
    color: "#120438",
  },

  image: {
    width: 100,
    height: 100,
    margin: 8,
  },

  buttonContainer: {
    flexDirection: "row",
  },

  button: {
    width: "30%",
    margin: 8,
  },
});
