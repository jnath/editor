/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import * as React from 'react';
import { Component } from 'react';

import * as colors from 'material-ui/styles/colors';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

const muiTheme = getMuiTheme({
  listItem:{
    secondaryTextColor: "#b2b2b2",
  }
});

export default class Main extends Component<any, any> {

  constructor(props, context) {
    super(props, context);
  }

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <App />
      </MuiThemeProvider>
    );
  }
}