import React, { Component } from 'react';
import Divider from 'material-ui/Divider';

import './sidebar.css';

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className={`sidebar-item ${this.props.activeItem === 'upsale' ? 'active' : ''}`} onClick={() => this.props.handleSidebarItemClicked('upsale')}>upsale</div>
        <Divider />
        <div className={`sidebar-item ${this.props.activeItem === 'newIcons' ? 'active' : ''}`} onClick={() => this.props.handleSidebarItemClicked('newIcons')}>icons</div>
        <Divider />
        <div className={`sidebar-item ${this.props.activeItem === 'sentences' ? 'active' : ''}`} onClick={() => this.props.handleSidebarItemClicked('sentences')}>sentences</div>
        <Divider />
        <div className={`sidebar-item ${this.props.activeItem === 'triggers' ? 'active' : ''}`} onClick={() => this.props.handleSidebarItemClicked('triggers')}>triggers</div>
        <Divider />
      </div>
    );
  }
}

export default Sidebar;