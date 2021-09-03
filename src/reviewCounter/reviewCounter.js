import React from 'react';
import './reviewCounter.module.css';

class ReviewCounter extends React.Component {
  handleIncrement = event => {
    const { checkBtn } = event.target.name;

    if (checkBtn === 'Good') {
      console.log('click in Good');
    } else if (checkBtn === 'Neutral') {
      console.log('click in Neutral');
    } else {
      console.log('click in Bad');
    }
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button type="button" name="Good" onClick={this.handleIncrement}>
          Good
        </button>
        <button type="button" name="Neutral" onClick={this.handleIncrement}>
          Neutral
        </button>
        <button type="button" name="Bad" onClick={this.handleIncrement}>
          Bad
        </button>
        <h2>Statistics</h2>
        <p>Good: 3</p>
        <p>Neutral: 2</p>
        <p>Bad: 2</p>
      </div>
    );
  }
}

export default ReviewCounter;
