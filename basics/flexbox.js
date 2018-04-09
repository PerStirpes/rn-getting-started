import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default class FlexDrirectionBasics extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
