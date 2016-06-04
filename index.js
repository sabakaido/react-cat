import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import configureStore from './src/store/configureStore'

import App from './src/containers/App';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = configureStore()

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
)