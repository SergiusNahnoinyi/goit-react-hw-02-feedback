import PropTypes from 'prop-types';

export default function FeedbackOptions({ state, onLeaveFeedback }) {
  return (
    <div className="button-container">
      {Object.keys(state).map(key => (
        <button key={key} type="button" name={key} onClick={onLeaveFeedback}>
          {key[0].toUpperCase() + key.substring(1)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,

  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
