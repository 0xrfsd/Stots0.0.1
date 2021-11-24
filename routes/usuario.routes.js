import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Usuario from "../screens/Usuario/index";

const UsuarioStack = createNativeStackNavigator();

const UsuarioRoutes = () => {
  return (
    <UsuarioStack.Navigator>
      <UsuarioStack.Screen
        name="Home"
        component={Usuario}
        options={{ headerShown: false }}
      />
    </UsuarioStack.Navigator>
  );
};

export default UsuarioRoutes;
