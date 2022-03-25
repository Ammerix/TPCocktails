import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { CocktailsScreenProps } from "../navigation/app-stacks";

export default class CocktailsScreen extends Component<CocktailsScreenProps, {}> {
  render() {
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Nothing to drink yet!</Text>
      </View>
    );
  }
}
