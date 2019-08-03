import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground, Button } from "react-native";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
    this.buttonClickListener = this.buttonClickListener.bind(this);
  }

  buttonClickListener = () => {
    this.setState({
      counter: counter++
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("./app/img/waterbg.jpg")}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Text style={styles.headerText}>
            How many glasses of water did you have today?
          </Text>
          <Text>{this.state.counter}</Text>
          <View style={styles.button}>
            <Button
              style={styles.innerbutton}
              onPress={this.buttonClickListener}
              title="Add"
              color="#00bfff"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inner: {
    width: "75%",
    height: "75%",
    backgroundColor: "rgba(255, 255, 255, .7)"
  },
  headerText: {
    fontSize: 20,
    color: "#2F4F4F",
    textAlign: "center",
    fontWeight: "bold"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // marginBottom: 50
  },
  innerbutton: {
    margin: 20
  }
});
