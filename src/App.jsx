import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from "redux";
import Login from "./pages/Login/Login";
import Register from "./pages/Register";
import reducers from "./redux/reducers";
import ReduxThunk from 'redux-thunk'
import Verify from "./pages/Verify";
import Home from "./pages/Home";
import Navigation from "./components/Navigation/Navigation";
import FooterArea from "./components/Footer/FooterArea";
import FooterBottom from "./components/Footer/FooterBottom";

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose; 
const enhancer = composeEnhancers(applyMiddleware(ReduxThunk))

const store = createStore(reducers, enhancer);
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Switch>
          <Route path='/register' component = {Register} />
          <Route path='/login' component = {Login} />
          <Route path='/verify' component = {Verify} />
          <Route path='/' component = {Home} />
        </Switch>
        <FooterArea></FooterArea>
        <FooterBottom></FooterBottom>
      </Router>
    </Provider>
  );
}

export default App;
