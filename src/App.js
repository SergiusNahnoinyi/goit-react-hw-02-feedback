import React, { Component } from 'react';
import './App.css';

import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Section from './components/Section';
import Notification from './components/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
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
      <div className="container">
        <Section title="Please leave feedback">
          <FeedbackOptions
            state={this.state}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              state={this.state}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
