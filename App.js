import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  function startAddTodoHandler() {
    setModalVisible(true);
  }

  function endAddTodoHandler() {
    setModalVisible(false);
  }

  function addTodoHandler(enteredTodo) {
    setTodoList((currentList) => [
      ...currentList,
      { text: enteredTodo, id: Math.random().toString() },
    ]);
    endAddTodoHandler();
  }

  function deleteTodoHandler(id) {
    setTodoList((currentList) => currentList.filter((item) => item.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add New Todo"
          color="#a065ec"
          onPress={startAddTodoHandler}
        />
        <TodoInput
          visible={modalVisible}
          onAddTodo={addTodoHandler}
          onCancel={endAddTodoHandler}
        />
        <View style={styles.listContainer}>
          <FlatList
            data={todoList}
            renderItem={(itemData) => {
              return (
                <TodoItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteTodoHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },

  listContainer: {
    flex: 5,
    marginTop: 16,
    marginHorizontal: 8,
  },
});
