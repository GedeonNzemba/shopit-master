import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux'
import store from './store'

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic'

import { ThemeProvider, createTheme  } from "@material-ui/core/styles";
import './language/i18n';

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
    },
    MuiTypography: {
      subtitle2: {
        fontSize: '1.6rem'
      }
    },
    MuiMenuItem: {
      root: {
        fontSize: '1.6rem'
      }
    }
  }
});

const options = {
  timeout: 20000,
  position: positions.BOTTOM_CENTER,
  transition: transitions.SCALE
}



ReactDOM.render(

  <Provider store={store} >
    <AlertProvider template={AlertTemplate} {...options}>
    <ThemeProvider theme={theme}>
      <Suspense fallback="...is loading">
        <App />
      </Suspense>
      </ThemeProvider>
    </AlertProvider>
  </Provider>,
  document.getElementById('root')
);
