import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className=" h-[30vh] flex items-center justify-center mb-28">
      <span className={styles.loader}></span>
    </div>
  );
}

export default Loader;
