import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";

import Home from "./src/screens/home";
import store from "./src/store";
import themes from "./src/themes";

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <Provider store={store}>
        <Home />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
