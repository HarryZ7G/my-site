import styles from "./bauhaus.module.css";

function Binance(props) {
  return (
    <div className={styles["bauhaus-element"]}>
      <div className={styles["binance-colourful"]} />
      <div className={styles["binance-black-middle"]} />
      <div className={styles["binance-black-bottom"]} />
    </div>
  );
}

export default Binance;
