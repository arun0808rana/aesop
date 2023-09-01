import styles from './Header.module.css'

export function Header() {
  return (
    <header>
      <div className={styles['desktop-header']}>
        <div className="desktop-header-lhs">
          <a href="#" className={styles["links"]}>
            Skin Care
          </a>
          <a href="#" className={styles["links"]}>
            Body & Hand
          </a>
          <a href="#" className={styles["links"]}>
            Hair
          </a>
          <a href="#" className={styles["links"]}>
            Fragrance
          </a>
          <a href="#" className={styles["links"]}>
            Home
          </a>
          <a href="#" className={styles["links"]}>
            Kits & Travel
          </a>
          <a href="#" className={styles["links"]}>
            Gifts
          </a>
          <a href="#" className={styles["links"]}>
            Read
          </a>
          <a href="#" className={styles["links"]}>
            Stores
          </a>
          <a href="#" className={styles["links"]}>
            Facial Appointments
          </a>
          <div className="search-bar"></div>
        </div>

        <div className="desktop-header-rhs">
          <a href="#" className={styles["links"]}>
            Skin Care
          </a>
          <a href="#" className={styles["links"]}>
            Body & Hand
          </a>
          <a href="#" className={styles["links"]}>
            Hair
          </a>
        </div>
      </div>
    </header>
  );
}
