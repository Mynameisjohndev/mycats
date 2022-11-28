import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "react-native-gesture-handler";
import { Routes } from "./src/routes";
import store from "./src/store";
import themes from "./src/themes";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <NavigationContainer>
        <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            backgroundColor={themes.COLORS.GREY}
          />
          <Routes />
        </Provider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
