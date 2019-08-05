import React, { Component } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  buttonClickListener = e => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  render() {
    return (
      <ImageBackground
        source={require("./app/img/waterbg.jpg")}
        style={styles.container}
      >
        <View style={styles.inner}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "bold",
              textAlign: "center",
              color: "#00bfff"
            }}
          >
            How many glasses of water did you drink today?
          </Text>
          <View style={styles.answer}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "#2F4F4F"
              }}
            >
              I have drunk
            </Text>
            <Text style={{ fontSize: 50 }}>{this.state.counter}</Text>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                color: "#2F4F4F"
              }}
            >
              glasses of water.
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              style={styles.innerbutton}
              onPress={this.buttonClickListener}
              title="Add"
              raised
              outline
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
    backgroundColor: "rgba(255, 255, 255, .7)",
    fontSize: 20,
    color: "#2F4F4F",
    alignContent: "center"
  },
  answer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold"
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerbutton: {
    // width: 100,
    // height: 100,
    // shadowColor: "#2F4F4F",
    // shadowOpacity: 0.7,
    // shadowRadius: 5,
    // shadowOffset: {
    //   height: 1,
    //   width: 1
    // },
    fontSize: 15,
    borderWidth: 0.9,
    borderRadius: 10,
    borderColor: "#d6d7da",
    color: "#00bfff",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  }
});

export default App;
