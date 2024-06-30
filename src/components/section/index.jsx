import styles from './section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, Children }) => {
  return (
    <section className={styles.section}>
      <h1 className={styles.sectionHeader}>{title}</h1>
      {Children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  Children: PropTypes.object,
};
