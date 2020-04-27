import React from 'react';

class Machine extends React.Component {
  render() {
    const { s1, s2, s3 } = this.props;
    if (s1 === s2 && s2 === s3) {
      return (
        <div>
          <p>{s1} {s2} {s3}</p>
          <p>You win!</p>
          <br />
        </div>
      );
    } else {
    return (
      <div>
        <p>{s1} {s2} {s3}</p>
        <p>You lose!</p>
        <br />
      </div>
    );
  }
}
}

export default Machine;