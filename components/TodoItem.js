import { Pressable, StyleSheet, Text, View } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoContainer}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.todo}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todo: {
    fontSize: 20,
    color: "white",
    marginHorizontal: 8,
    padding: 8,
  },

  todoContainer: {
    marginVertical: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
