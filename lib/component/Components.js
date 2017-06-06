"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file, we create a React component
 */
const React = require("react");
const react_1 = require("react");
const List_1 = require("material-ui/List");
const Avatar_1 = require("material-ui/Avatar");
class ComponentItem extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement(List_1.ListItem, { style: { color: "#CCCCCC" }, hoverColor: "#2a2d2e", leftAvatar: React.createElement(Avatar_1.default, { size: 48, style: { borderRadius: 0 } }, "T"), primaryText: "TextField", secondaryText: React.createElement("p", null, "I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?"), secondaryTextLines: 2 }));
    }
}
class ComponentList extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {};
    }
    render() {
        return (React.createElement("div", { style: { width: 250, height: "100vh", overflow: "auto", backgroundColor: "#252526" } },
            React.createElement(List_1.List, null,
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null),
                React.createElement(ComponentItem, null))));
    }
}
exports.default = ComponentList;
