/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import "react-native-gesture-handler";
import Home from "./src/screens/home";
import store from "./src/store";
import themes from "./src/themes";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Provider store={store}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={themes.COLORS.GREY}
        />
        <Home />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
