import styles from "./bauhaus.module.css";

function Triangles() {
  return (
    <div className={styles["bauhaus-triangles"]}>
      <div className={styles["triangle"]} />
      <div className={styles["triangle"] + " " + styles["go-one-eighty"]} />
      <div className={styles["triangle"] + " " + styles["go-ninety"]} />
      <div className={styles["triangle"] + " " + styles["go-two-seventy"]} />
      <div className={styles["triangle"] + " " + styles["go-two-seventy"]} />
      <div className={styles["triangle"] + " " + styles["go-one-eighty"]} />
      <div className={styles["triangle"]} />
      <div className={styles["triangle"] + " " + styles["go-one-eighty"]} />
      <div className={styles["triangle"]} />
      <div className={styles["triangle"] + " " + styles["go-two-seventy"]} />
      <div className={styles["triangle"] + " " + styles["go-two-seventy"]} />
      <div className={styles["triangle"] + " " + styles["go-one-eighty"]} />
    </div>
  );
}

export default Triangles;
