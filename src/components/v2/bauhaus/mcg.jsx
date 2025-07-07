import styles from "./bauhaus.module.css";

function MCG(props) {
  return (
    <div className={styles["bauhaus-element"]}>
      <div className={styles["mcg-top"]} />
      <div className={styles["mcg-bottom"]} />
    </div>
  );
}

export default MCG;
