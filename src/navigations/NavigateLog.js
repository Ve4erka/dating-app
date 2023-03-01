import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BackHandler } from "react-native";
import Login from "../components/Login";
import Signin from "../components/Signin";
import Profile from "../components/Profile";
import Settings from "../components/Settings";
import People from "../components/People"
import Likers from "../components/Likers"
import Edit from "../components/Edit";
import Test from "../components/Test";
import ChangePhoneNumber from "../components/ChangePhoneNumber";
import ChangePassword from "../components/ChangePassword";
import Quiz from "../components/Quiz";

const Stack = createNativeStackNavigator();

export default function NavigateLog() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false }}
      >
        <Stack.Screen
          name = "Login"
          component={Login}
        />
        <Stack.Screen
          name = "SignIn"
          component={Signin}
        />
        <Stack.Screen
          name = "Profile"
          component={Profile}
        />
        <Stack.Screen
          name = "People"
          component={People}
        />
        <Stack.Screen
          name = "Likers"
          component={Likers}
        />
        <Stack.Screen
          name = "Settings"
          component={Settings}
        />
        <Stack.Screen
          name = "Edit"
          component={Edit}
        />
        <Stack.Screen
          name = "ChangePhoneNumber"
          component={ChangePhoneNumber}
        />
        <Stack.Screen
          name = "ChangePassword"
          component={ChangePassword}
        />
        <Stack.Screen
          name = "Test"
          component={Test}
        />
        <Stack.Screen
          name = "Quiz"
          component={Quiz}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

