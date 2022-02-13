import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ state, total, positivePercentage }) {
  return (
    <div className="statistics-container">
      <ul className={s.list}>
        {Object.entries(state).map(([key, value]) => {
          return (
            <li key={key} className="item">
              {key[0].toUpperCase() + key.substring(1)}: {value}
            </li>
          );
        })}
      </ul>

      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </div>
  );
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,

  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
