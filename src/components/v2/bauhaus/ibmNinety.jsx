import styles from "./bauhaus.module.css";

function IBM(props) {
  return (
    <div className={styles["bauhaus-element"]}>
      <div
        className={styles["ibm-ninety-primary"] + " " + styles[props.theme]}
      />
      <div
        className={styles["ibm-ninety-secondary"] + " " + styles[props.theme]}
      />
    </div>
  );
}

export default IBM;
