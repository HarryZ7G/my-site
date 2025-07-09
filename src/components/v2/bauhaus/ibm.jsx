import styles from "./bauhaus.module.css";

function IBM(props) {
  return (
    <div className={styles["bauhaus-element"]}>
      <div className={styles["ibm-primary"] + " " + styles[props.theme]} />
      <div className={styles["ibm-secondary"] + " " + styles[props.theme]} />
    </div>
  );
}

export default IBM;
