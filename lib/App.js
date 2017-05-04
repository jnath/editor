"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file, we create a React component
 */
const React = require("react");
const react_1 = require("react");
const NavMenu_1 = require("./component/NavMenu");
const Components_1 = require("./component/Components");
const TreeView_1 = require("./component/TreeView");
class App extends react_1.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            tab: "components"
        };
    }
    render() {
        let TabView;
        switch (this.state.tab) {
            case "treeView":
                TabView = TreeView_1.default;
                break;
            default:
            case "components":
                TabView = Components_1.default;
                break;
        }
        return (React.createElement("div", { style: { display: "flex" } },
            React.createElement(NavMenu_1.default, { onChange: (value) => this.setState({ tab: value }) }),
            React.createElement(TabView, null)));
    }
}
exports.default = App;
