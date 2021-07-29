import React, { Component } from "react";
import Section from "./section/section";
import FeedbackOptions from "./feedback/feedback";
import Statistics from "./statistic/statistics";

const options = ['good', 'bad', 'neutral'];

class App extends Component {
    state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };

countTotalFeedback = () => {
    const {good, bad, neutral} = this.state;
    const resalt = good + bad + neutral;
    return resalt;
};

countPositiveFeedback = () => {
    const resalt = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / resalt;
    return Math.round(percentage);
}

handleFeedback = ({target}) => {
    const { feedback } = target.dataset;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
}


render() {
    const { good, neutral, bad } = this.state;
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedback();

return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedbackCount}
          positiveFeedbackPercentage={positiveFeedbackPercentage}
        />
      </Section>
    </>
  );
}
}

export default App