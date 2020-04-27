import React from 'react';

class ButtonClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked : false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.clicked ? this.setState({ clicked : false }) : this.setState({clicked: true});
    // this.setState({ clicked:true });
  }
  render() {
    return (
      <React.Fragment>
      <h1>{this.state.clicked? 'Clicked!!' : 'Not Clicked'}</h1>
      <button onClick={this.handleClick}>Click Me!</button>
      </React.Fragment>
    );
  }
}

export default ButtonClick;