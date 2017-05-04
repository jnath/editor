"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const injectTapEventPlugin = require("react-tap-event-plugin");
const Main_1 = require("./Main"); // Our custom react component
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();
// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
react_dom_1.render(React.createElement(Main_1.default, null), document.getElementById('app'));
