import * as React from "react";
import * as ReactDOM from "react-dom";
import App from './components/App';
import './assets/index.scss';
import Root from "./components/Root";
import configureStore from "./store";

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);

const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Hot Reload for style: https://github.com/facebook/create-react-app/issues/7561