/**
 * In this file, we create a React component
 */
import * as React from 'react';
import { Component } from 'react';

import SortableTree from 'react-sortable-tree';

export default class TreeView extends Component<any, any> {
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
        return (
            <div style={{ height: "100vh", width:250, backgroundColor:"#FFFFFF" }}>
                <SortableTree
                    treeData={this.state.treeData}
                    onChange={treeData => {
                      console.log(treeData);
                      this.setState({ treeData })
                    }
                  }
                />
            </div>
        );
    }
}