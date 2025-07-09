import Triangles from "./triangle";
import Arrow from "../arrow";
import styles from "./bauhaus.module.css";

function University() {
  return (
    <div className={styles["university"]}>
      <Triangles />
      <div className={styles["toronto"]}>
        <div className={styles["the-annex"]}>
          <div className={styles["st-george"]}>
            <span className={styles["uoft-small"]}>
              UNIVERSITY OF
              <br />
            </span>
            <span className={styles["uoft-large"]}>TORONTO</span>
          </div>
          <div className={styles["rosedale"]}>
            <Arrow style="uni" />
            <div className={styles["class-badge"]}>
              <span className={styles["class-year"]}>Class of 2023</span>
            </div>
          </div>
        </div>
        <div className={styles["yonge-finch"]}>
          <span className={styles["program-faded"]}>
            Honours Bachelor of&nbsp;
          </span>
          <span className={styles["program"]}>Computer Science</span>
        </div>
        <div className={styles["bloor-yonge"]}>
          <span className={styles["program"]}>Software Engineering&nbsp;</span>
          <span className={styles["program-faded"]}>Specialist</span>
        </div>
      </div>
    </div>
  );
}

export default University;
