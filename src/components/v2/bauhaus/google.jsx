import styles from "./bauhaus.module.css";

function Google(props) {
  return (
    <div className={styles["bauhaus-element"]}>
      <div className={styles["google-colourful"] + " " + styles[props.theme]} />
      <div className={styles["google-black"]} />
    </div>
  );
}

export default Google;
