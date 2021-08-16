import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

class CustomScrollbar extends Component<{}> {

  constructor(props: {}, ...rest: any) {
    super(props, [...rest]);
    this.renderView = this.renderView.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderView({ style, ...props }) {
    const viewStyle = {
      padding: 15,
      color: 'rgb(255, 255, 255)'
    };
    return (
      <div
        className="box"
        style={{ ...style, ...viewStyle }}
        {...props}
      />
    );
  }

  renderThumb({ style, ...props }) {
    const thumbStyle = {
      backgroundColor: '#AEFFD8'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}
      />
    );
  }

  render() {
    return (
      <Scrollbars
        renderView={this.renderView}
        renderThumbHorizontal={this.renderThumb}
        renderThumbVertical={this.renderThumb}
        {...this.props}/>
    );
  }
}

export default CustomScrollbar
