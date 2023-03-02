import React, { useState } from "react";
import { View, Text, StyleSheet, Button, } from "react-native"
const App = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0)

  const onClickHandler = () => {
    setCount(count + 5)
    setClick(click + 1)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add by 5" onPress={onClickHandler}></Button>
      <Text style={styles.click}>you clicked {click} times</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  body: {
    width: "100%",
    height: "50%",
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 20,
    borderColor: "silver",
    borderRadius: 20,

  },
  text: {
    fontSize: 50,
    fontStyle: "italic",
    color: "white",
    margin: 10,
  },
  click: {
    fontSize: 30,
    color: "white",
    margin: 10,
  },

})
export default App;