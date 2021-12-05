import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path = '/register'>
          <Register />
        </Route>
        <Route path = '/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
