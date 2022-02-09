import React, { Component } from 'react';

export default class Feedback extends Component {
  static defaultProps = {
    initialFeedback: 0,
  };

  static propTypes = {};

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
            <li className="item">Good:{this.state.good}</li>
            <li className="item">Neutral:{this.state.neutral}</li>
            <li className="item">Bad:{this.state.bad}</li>
          </ul>
        </div>
      </section>
    );
  }
}
