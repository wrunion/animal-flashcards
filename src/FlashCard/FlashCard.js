import React from 'react';
import './FlashCard.css';
class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageShowing: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.state.imageShowing ? 
    this.setState({ imageShowing : false }) : this.setState({ imageShowing : true });
  }

  render() {
    const { animalName, animalImage } = this.props;
    return (
      <div className="FlashCard" onClick={this.handleClick}>
        <h2>{this.state.imageShowing ? animalName : null}</h2>
        <img src={this.state.imageShowing? null : animalImage} alt="" />
      </div>
    )
  }
}

export default FlashCard;