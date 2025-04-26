import styles from "./Feedback.module.css";

function Feedback({ good, neutral, bad, total }) {
  const positive = total ? Math.round((good / total) * 100) : 0;

  return (
    <div className={styles.container}>
      <p className={styles.item}>Good: {good}</p>
      <p className={styles.item}>Neutral: {neutral}</p>
      <p className={styles.item}>Bad: {bad}</p>
      <p className={styles.item}>Total: {total}</p>
      <p className={styles.item}>Positive: {positive}%</p>
    </div>
  );
}

export default Feedback;
