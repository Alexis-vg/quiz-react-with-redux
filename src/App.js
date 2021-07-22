import React from "react";
//redux
import { Provider } from "react-redux";
import { CheckAnswers, Form, NotFound } from "./pages";
import store from "./redux/store";
//router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/check-answers" component={CheckAnswers} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
