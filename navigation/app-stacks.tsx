import React from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import CocktailsScreen from "../screens/CocktailsScreen";
import DetailsScreen from "../screens/DetailsScreen";
import IngredientsScreen from "../screens/IngredientsScreen";

// Define view names and associated params
// undefined = no params passed to view
export type RootStackParamList = {
  Cocktails: undefined;
  Details: undefined;
  Ingredients: undefined;
};

// Define view stack inside Cocktails tab
const CocktailsStack = createStackNavigator<RootStackParamList>();
export const CocktailsStackScreen = () => {
  return (
    <CocktailsStack.Navigator>
      <CocktailsStack.Screen name="Cocktails" component={CocktailsScreen} />
      <CocktailsStack.Screen name="Details" component={DetailsScreen} />
    </CocktailsStack.Navigator>
  );
};

// Define view stack inside Ingredients tab
const IngredientsStack = createStackNavigator<RootStackParamList>();
export const IngredientsStackScreen = () => {
  return (
    <IngredientsStack.Navigator>
      <IngredientsStack.Screen name="Ingredients" component={IngredientsScreen} />
      <IngredientsStack.Screen name="Details" component={DetailsScreen} />
    </IngredientsStack.Navigator>
  );
};

export interface CocktailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Cocktails">;
}

export interface DetailsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Details">;
}

export interface IngredientsScreenProps {
  navigation: StackNavigationProp<RootStackParamList, "Ingredients">;
}
