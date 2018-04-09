import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={{ height: 64 }}
          placeholder="type text here"
          onChangeText={text => this.setState({ text })}
        />
        <Text>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  
    alignItems: "center",
    padding: 10,
    fontSize: 64,
  },
});
