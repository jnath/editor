"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
const React = require("react");
const react_1 = require("react");
const getMuiTheme_1 = require("material-ui/styles/getMuiTheme");
const MuiThemeProvider_1 = require("material-ui/styles/MuiThemeProvider");
const App_1 = require("./App");
const muiTheme = getMuiTheme_1.default({
    listItem: {
        secondaryTextColor: "#b2b2b2",
    }
});
class Main extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.handleToggle = () => this.setState({ open: !this.state.open });
        this.handleClose = () => this.setState({ open: false });
    }
    render() {
        return (React.createElement(MuiThemeProvider_1.default, { muiTheme: muiTheme },
            React.createElement(App_1.default, null)));
    }
}
exports.default = Main;
