import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

import { ThemeProvider, createTheme  } from "@material-ui/core/styles";

const theme = createTheme ({
  overrides: {
    MuiInputBase: {
      input: {
        fontSize: "1.6rem!important",
        backgroundColor: 'unset!important'
      }
    },
    MuiInputLabel: {
      root: {
        fontSize: '1.6rem!important'
      }
    },
    MuiButton: {
      root: {
        fontSize: '1.4rem!important'
      }
    },
    MuiFormHelperText: {
      root: {
        fontSize: '1.2rem!important'
      }
    }
  }
});

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}



ReactDOM.render(

  <Provider store={store} >
    <AlertProvider template={AlertTemplate} {...options}>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
