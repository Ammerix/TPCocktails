import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  RootStackParamList,
  CocktailsStackScreen,
  IngredientsStackScreen,
} from "./app-stacks";

// Define main tab navigator
const Tab = createBottomTabNavigator<RootStackParamList>();
export const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: any; // TODO: find better type

            if (route.name === "Cocktails") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Ingredients") {
              iconName = focused ? "ios-list-sharp" : "ios-list-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "purple",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Cocktails"
          component={CocktailsStackScreen}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Ingredients" component={IngredientsStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
