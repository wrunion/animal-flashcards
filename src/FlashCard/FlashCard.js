import React from 'react';
import './FlashCard.css';
class FlashCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        imageShowing: false
    }
  }

  render() {
    return (
      <div className="FlashCard">
        <h2>Placeholder text</h2>
        <p>{this.props.sample}</p>
      </div>
    )
  }
}

export default FlashCard;