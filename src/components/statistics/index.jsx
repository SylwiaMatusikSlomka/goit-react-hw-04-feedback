import styles from './statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercontage,
}) => {
  return (
    <div className={styles.statistics}>
      <h2 className={styles.statisticsHeader}>Statistics</h2>
      <div className={styles.statisticsWrapper}>
        <ul className={styles.statisticsList}>
          <li className={styles.statisticsListItem}>Good: {good}</li>
          <li className={styles.statisticsListItem}>Neutral: {neutral}</li>
          <li className={styles.statisticsListItem}>Bad: {bad}</li>
          <li className={styles.statisticsListItem}>Total: {total}</li>
          <li className={styles.statisticsListItem}>
            Positive feedback: {positivePercontage}%
          </li>
        </ul>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercontage: PropTypes.number.isRequired,
};
