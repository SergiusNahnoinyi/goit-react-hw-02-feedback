import React, { Component } from 'react';

export default class Feedback extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return (
      <section className="feedback">
        <div className="service-assessment">
          <h2 className="title">Please leave feedback</h2>

          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
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
