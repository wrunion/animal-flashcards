import React from 'react';

class Hello extends React.Component {
  render() {
    return (
      <div>
        Hi {this.props.to} from {this.props.from}
      </div>
    );
  }
}

export default Hello;