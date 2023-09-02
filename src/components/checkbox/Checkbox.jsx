import styles from './Checkbox.module.css';

export function Checkbox() {
  return (
    <label className={styles["checkbox-container"]}>
      Subscribe to receive communications from Aesop. By subscribing, you
      confirm you have read and understood our <a href="#">privacy policy</a>.
      <input type="checkbox"  />
      <span className={styles["checkmark"]}></span>
    </label>
  );
}
