import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { IngredientsScreenProps } from "../navigation/app-stacks";

export default class Ingredients extends Component<IngredientsScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Ingredients!</Text>
      </View>
    );
  }
}
