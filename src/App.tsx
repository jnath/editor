/**
 * In this file, we create a React component
 */
import * as React from 'react';
import {Component} from 'react';

import NavMenu from './component/NavMenu';
import Components from './component/Components';
import TreeView from './component/TreeView';

export default class App extends Component<any, any> {

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
        TabView = TreeView;
      break;
      default:
      case "components":
        TabView = Components;
      break;
    }
    return (
      <div style={{display:"flex"}}>
        <NavMenu onChange={( value:string ) => this.setState({ tab: value })}/>
        <TabView />
      </div>
    );
  }
}