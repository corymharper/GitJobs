import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux'
import { store } from './store'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      type: 'dark',
    },
  });

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <App />
        <CssBaseline />
    </MuiThemeProvider>
  </Provider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
