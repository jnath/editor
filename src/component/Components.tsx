/**
 * In this file, we create a React component
 */
import * as React from 'react';
import { Component } from 'react';

import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';

class ComponentItem extends Component<any, any> {

  constructor(props, context) {
    super(props, context);

    this.state = {};

  }

  render() {
    return (
      <ListItem style={{ color: "#CCCCCC" }}
        hoverColor="#2a2d2e"
        leftAvatar={<Avatar size={48} style={{ borderRadius: 0 }}>T</Avatar>}
        primaryText="TextField"
        secondaryText={
          <p>
            I&apos;ll in your neighborhood doing errands this weekend. Do you want to grab brunch?
          </p>
        }
        secondaryTextLines={2}
      />
    );
  }
}

export default class ComponentList extends Component<any, any> {

  constructor(props, context) {
    super(props, context);

    this.state = {};

  }

  render() {
    return (
      <div style={{ width: 250, height: "100vh", overflow: "auto", backgroundColor: "#252526" }}>
        <List>
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
          <ComponentItem />
        </List>

      </div>
    );
  }
}
