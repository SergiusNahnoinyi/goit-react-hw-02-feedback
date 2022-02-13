import React, { Component } from 'react';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';

export default class App extends Component {
  state = {
    good: 0,
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

    return Math.round((good / this.countTotalFeedback()) * 100) || 0;
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          state={this.state}
          onLeaveFeedback={this.handleClick}
        />
        <Statistics
          state={this.state}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
