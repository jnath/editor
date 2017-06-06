/**
 * In this file, we create a React component
 */
import * as React from 'react';
import {Component} from 'react';

import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Apps from 'material-ui/svg-icons/navigation/apps';
import SubdirectoryArrowRight from 'material-ui/svg-icons/navigation/subdirectory-arrow-right';

interface NavProps {
  onChange: ( value: string ) => void;
}

export default class NavMenu extends Component<NavProps, any> {

  constructor(props: NavProps, context) {
    super(props, context);

    this.state = {
    };

  }


  render() {

    return (
      <Menu style={{ backgroundColor:"#333333", height:"100vh"}} autoWidth={false} onChange={(evt, value) => this.props.onChange(value)}>
        <MenuItem leftIcon={<Apps />} style={{width:60}} value="components" />
        <MenuItem leftIcon={<SubdirectoryArrowRight />} style={{width:60}} value="treeView" />
      </Menu>
    );
  }
}