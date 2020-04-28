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
        {this.state.imageShowing ?
        <img src={animalImage} alt=""/> : <h1>{animalName}</h1>}
      </div>
    );
  }
}

export default FlashCard;