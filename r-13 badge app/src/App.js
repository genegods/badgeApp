import React from "react";
import "./App.css";
import Welcome from "./welcome/Welcome";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Welcome />
      </React.Fragment>
    </Provider>
  );
};

export default App;
