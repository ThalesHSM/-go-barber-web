import React from "react";

import GlobalStyle from "./styles/global";
// import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import AppProvider from "./context/index";

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
