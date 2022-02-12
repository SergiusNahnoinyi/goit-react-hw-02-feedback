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

  handleGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    return (
      <section className="feedback">
        <div className="service-assessment">
          <h2 className="title">Please leave feedback</h2>
          <div className="button-container">
            {Object.keys(this.state).map(key => (
              <button key={key} type="button">
                {key}
              </button>
            ))}
          </div>
        </div>

        <div className="statistics">
          <h2 className="title">Statistics</h2>

          <ul className="list">
            <li className="item">Good:{this.state.good}</li>
            <li className="item">Neutral:{this.state.neutral}</li>
            <li className="item">Bad:{this.state.bad}</li>
          </ul>
        </div>
      </section>
    );
  }
}
