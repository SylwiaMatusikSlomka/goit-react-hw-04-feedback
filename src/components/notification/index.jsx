import styles from './notification.module.css'
export const Notification = ({ message }) => {
    return <p className={styles.paragraph}>{message}</p>;
}