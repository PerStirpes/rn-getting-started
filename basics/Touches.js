import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {
  _onPressButton() {

  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton} underlayColor="green">
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={this._onPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableOpacity</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Touchable with Long Press</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
})

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Touchables);

// import React, { Component } from "react";
// import {
//   Alert,
//   Button,
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableHighlight,
//   TouchableOpacity,
//   TouchableNativeFeedback,
//   TouchableWithoutFeedback,
//   View,
// } from "react-native";

// export default class ButtonBasics extends Component {
//   _onPressButton() {
    
//   }

//   _onLongPressButton() {
//     Alert.alert('You long-pressed the button!')
//   }


// //   render() {
// //     return (
// //       <View style={styles.container}>
// //       {/* <TouchableHighlight onPress={this._onPressButton} underlayColor="green">
// //         <View style={styles.buttonContainer}>
// //           <Button onPress={this._onPressButton} underlayColor="green" title="Press Me" />
// //         </View>
// //         </TouchableHighlight> */}
// //         <TouchableHighlight onPress={this._onPressButton} underlayColor="green">
// //           <View style={styles.button}>
// //             <Text style={styles.buttonText}>TouchableHighlight</Text>
// //           </View>
// //         </TouchableHighlight>
// //         <View style={styles.buttonContainer}>
// //           <Button
// //             onPress={this._onPressButton}
// //             title="Press Me"
// //             color="#841584"
// //           />
// //         </View>
// //         <View style={styles.alternativeLayoutButtonContainer}>
// //           <Button onPress={this._onPressButton} title="This looks great!" />
// //           <Button onPress={this._onPressButton} title="OK!" color="#841584" />
// //         </View>
// //       </View>
// //     );
// //   }
// // }


// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 60,
//     alignItems: 'center'
//   },
//   button: {
//     marginBottom: 30,
//     width: 260,
//     alignItems: 'center',
//     backgroundColor: '#2196F3'
//   },
//   buttonText: {
//     padding: 20,
//     color: 'white'
//   }
// })

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //   },
// //   buttonContainer: {
// //     margin: 20,
// //   },
// //   alternativeLayoutButtonContainer: {
// //     margin: 20,
// //     flexDirection: "row",
// //     justifyContent: "space-around",
// //   },
// // });

// // // const styles = StyleSheet.create({
// // //   container: {
// // //     flex: 1,
// // //     flexDirection: "row",

// // //     alignItems: "center",
// // //     padding: 10,
// // //     fontSize: 64,
// // //   },
// // // });
