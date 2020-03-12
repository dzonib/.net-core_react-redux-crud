import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import DCandidates from "./components/DCandidates";
// import DCandidateForm from "./components/DCandidateForm";

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <DCandidates />
      </Container>
    </Provider>
  );
}

export default App;
