import styles from './feedbackoptions.module.css';
import  PropTypes  from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.btnWrapper}>
      {options.map((btnName, id) => (
        <button key={id} onClick={() => onLeaveFeedback(btnName)}>
          {btnName}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}