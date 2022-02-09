import React, { Component } from 'react';

export default class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  handleGood = evt => {
    console.log('Good button was clicked!', evt);
  };

  handleNeutral = evt => {
    console.log('Neutral button was clicked!', evt);
  };

  handleBad = evt => {
    console.log('Bad button was clicked!', evt);
  };

  render() {
    return (
      <section className="feedback">
        <div className="service-assessment">
          <h2 className="title">Please leave feedback</h2>

          <button type="button" onClick={this.handleGood}>
            Good
          </button>
          <button type="button" onClick={this.handleNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleBad}>
            Bad
          </button>
        </div>

        <div className="statistics">
          <h2 className="title">Statistics</h2>

          <ul className="list">
            <li className="item">Good</li>
            <li className="item">Neutral</li>
            <li className="item">Bad</li>
          </ul>
        </div>
      </section>
    );
  }
}
