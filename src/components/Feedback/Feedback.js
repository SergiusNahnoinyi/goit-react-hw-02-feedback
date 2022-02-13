import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Feedback extends Component {
  static defaultProps = {
    initialFeedback: 0,
  };

  static propTypes = {
    initialFeedback: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialFeedback,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.currentTarget;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <section className="feedback">
        <div className="service-assessment">
          <h2 className="title">Please leave feedback</h2>
          <div className="button-container">
            {Object.keys(this.state).map(key => (
              <button
                key={key}
                type="button"
                name={key}
                onClick={this.handleClick}
              >
                {key[0].toUpperCase() + key.substring(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="statistics">
          <h2 className="title">Statistics</h2>

          <ul className="list">
            {Object.entries(this.state).map(([key, value]) => {
              return (
                <li key={key} className="item">
                  {key[0].toUpperCase() + key.substring(1)}: {value}
                </li>
              );
            })}
          </ul>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
      </section>
    );
  }
}
