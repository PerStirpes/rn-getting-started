import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return <Text> Hello {this.props.name}!</Text>;
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    let pic = {
      uri:
        "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg",
    };

    return (
      <View style={styles.container}>
        <Image source={pic} style={{ width: 193, height: 110 }} />
        <Greeting name="Rex" />
        <Greeting name="Bill" />
        <Greeting name="Lorena" />
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

AppRegistry.registerComponent("AwesomeProject", () => LotsOfGreetings);
