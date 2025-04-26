import styles from "./Options.module.css";

function Options({ updateFeedback }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={styles.button}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={styles.button} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={styles.button}>Reset</button>
    </div>
  );
}

export default Options;
