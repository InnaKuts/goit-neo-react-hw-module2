import styles from "./Options.module.css";

function Options() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Good</button>
      <button className={styles.button}>Neutral</button>
      <button className={styles.button}>Bad</button>
      <button className={styles.button}>Reset</button>
    </div>
  );
}

export default Options;
