import React from "react";
import { Provider } from "react-redux";

import RootNavigator from "./src/navigation/RootNavigator";
import { store } from "./src/store/store";

import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </AuthProvider>
  );
}