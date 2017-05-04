"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * In this file, we create a React component
 */
const React = require("react");
const react_1 = require("react");
const react_sortable_tree_1 = require("react-sortable-tree");
class TreeView extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            treeData: [
                {
                    title: 'main',
                    subtitle: 'sub'
                }, {
                    title: 'value2',
                    expanded: true,
                    children: [{
                            title: 'value3'
                        }]
                }
            ],
        };
    }
    render() {
        return (React.createElement("div", { style: { height: "100vh", width: 250, backgroundColor: "#FFFFFF" } },
            React.createElement(react_sortable_tree_1.default, { treeData: this.state.treeData, onChange: treeData => {
                    console.log(treeData);
                    this.setState({ treeData });
                } })));
    }
}
exports.default = TreeView;
