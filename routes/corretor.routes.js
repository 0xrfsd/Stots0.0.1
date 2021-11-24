import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";

import Corretor from "../screens/Corretor/index";
import Mapa from "../screens/Corretor/mapa";

const CorretorStack = createNativeStackNavigator();

const CorretorRoutes = () => {
  return (
    <CorretorStack.Navigator>
      <CorretorStack.Screen
        name="Home"
        component={Corretor}
        options={{ headerShown: false }}
      />
      <CorretorStack.Group screenOptions={{ presentation: "modal" }}>
        <CorretorStack.Screen
          name="Mapa"
          component={Mapa}
          options={{ headerShown: false }}
        />
      </CorretorStack.Group>
    </CorretorStack.Navigator>
  );
};

export default CorretorRoutes;