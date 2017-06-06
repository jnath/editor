"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file, we create a React component
 */
const React = require("react");
const react_1 = require("react");
const Menu_1 = require("material-ui/Menu");
const MenuItem_1 = require("material-ui/MenuItem");
const apps_1 = require("material-ui/svg-icons/navigation/apps");
const subdirectory_arrow_right_1 = require("material-ui/svg-icons/navigation/subdirectory-arrow-right");
class NavMenu extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(Menu_1.default, { style: { backgroundColor: "#333333", height: "100vh" }, autoWidth: false, onChange: (evt, value) => this.props.onChange(value) },
            React.createElement(MenuItem_1.default, { leftIcon: React.createElement(apps_1.default, null), style: { width: 60 }, value: "components" }),
            React.createElement(MenuItem_1.default, { leftIcon: React.createElement(subdirectory_arrow_right_1.default, null), style: { width: 60 }, value: "treeView" })));
    }
}
exports.default = NavMenu;
