import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onBtnClick }) => (
  <div>
    <button className={s.btn} type="button" name="Good" onClick={onBtnClick}>
      Good
    </button>
    <button className={s.btn} type="button" name="Neutral" onClick={onBtnClick}>
      Neutral
    </button>
    <button className={s.btn} type="button" name="Bad" onClick={onBtnClick}>
      Bad
    </button>
  </div>
);

FeedbackOptions.propTypes = {
  onBtnClick: PropTypes.func,
};

export default FeedbackOptions;
