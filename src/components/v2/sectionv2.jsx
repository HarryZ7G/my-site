import Arrow from "./arrow";
import styles from "./sectionv2.module.css";

function Sectionv2(props) {
  return (
    <div className={styles["section-v2"]}>
      <div className={styles["circle"]}></div>
      <h2 className={styles["invert"]}>{props.title.substring(0, 2)}</h2>
      <h2>{props.title.substring(2)}</h2>
      <Arrow style="section" />
    </div>
  );
}

export default Sectionv2;
