import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../section/Section';
import Statistics from '../statistics/Statistics';
import Analitics from '../analitics/Analitics';
import Notification from '../notification/Notification';

class ReviewCounter extends React.Component {
  static defaultProps = {
    initialValueGood: 0,
    initialValueNeutral: 0,
    initialValueBad: 0,
  };

  static propTypes = {
    initialValueGood: PropTypes.number,
    initialValueNeutral: PropTypes.number,
    initialValueBad: PropTypes.number,
  };

  state = {
    good: this.props.initialValueGood,
    neutral: this.props.initialValueNeutral,
    bad: this.props.initialValueBad,
  };

  // -------------------------------------------- v1 --------------------------------------------
  // handleIncrement = event => {
  //   const checkedBtn = event.target.name;

  //   if (checkedBtn === 'Good') {
  //     this.setState(prevState => ({ good: prevState.good + 1 }));
  //   } else if (checkedBtn === 'Neutral') {
  //     this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  //   } else {
  //     this.setState(prevState => ({ bad: prevState.bad + 1 }));
  //   }
  // };

  // -------------------------------------------- v2 --------------------------------------------
  handleIncrement = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
  };
  // --------------------------------------------------------------------------------------------

  countTotalFeedback() {
    const totalReviews = this.state.good + this.state.neutral + this.state.bad;

    return totalReviews;
  }

  countPositiveFeedbackPercentage() {
    const totalReviews = this.state.good + this.state.neutral + this.state.bad;
    const positiveReviews = this.state.good;

    return `${Math.round((positiveReviews / totalReviews) * 100)} %`;
  }

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            handleIncrement={this.handleIncrement}
          />
        </Section>

        {this.countTotalFeedback() > 0 ? (
          <div>
            <Section title={'Reviews statistics'}>
              <Statistics
                onReviewGood={this.state.good}
                onReviewNeutral={this.state.neutral}
                onReviewBad={this.state.bad}
              />
            </Section>
            <Section title={'Reviews analitics'}>
              <Analitics
                onTotalReviews={this.countTotalFeedback()}
                onPositiveReviews={this.countPositiveFeedbackPercentage()}
              />
            </Section>
          </div>
        ) : (
          <div>
            <Section title={'Reviews statistics'}>
              <Notification message="🤷‍♀️ No feedback given yet 🤷‍♂️" />
            </Section>
          </div>
        )}
      </div>
    );
  }
}

export default ReviewCounter;
