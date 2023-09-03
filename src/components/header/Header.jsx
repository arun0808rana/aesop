import useWindowDimensions from "../../hooks/useWindowDimensions";
import styles from "./Header.module.css";
import SearchIcon from "@assets/search.svg";
import HeartIcon from "@assets/heart.svg";
import MenuIcon from "@assets/menu.svg";

export function Header() {
  const { width } = useWindowDimensions();

  return (
    <header>
      {width > 640 ? (
        <div className={styles["desktop-header"]}>
          <div className={styles["desktop-header-lhs"]}>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Skin Care
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Body & Hand
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Hair
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Fragrance
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Home
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Kits & Travel
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Gifts
            </a>
            <a href="#" className={styles["links"] + " mobile-links"}>
              Shop
            </a>
            <a href="#" className={styles["links"]}>
              Read
            </a>
            <a href="#" className={styles["links"]}>
              Stores
            </a>
            <a href="#" className={styles["links"] + " desktop-links"}>
              Facial Appointments
            </a>

            <a
              href="#"
              className={styles["links"] + " desktop-links search-icon"}
            >
              <img src={SearchIcon} className={styles["search-icon"]} />
            </a>
            <div className="search-bar"></div>
          </div>

          <div className="desktop-header-rhs">
            <a href="#" className={styles["links"]}>
              Login
            </a>
            <a href="#" className={styles["links"]}>
              Cabinet
            </a>
            <a href="#" className={styles["links"]}>
              Cart
            </a>
          </div>
        </div>
      ) : (
        <nav className={styles["mobile-header"]}>
          <div className={styles["mobile-floating-container"]}>
            <div className="aesop_logo">Aesop</div>
            <div className={styles["mobile-header-rhs"]}>
              <a href="" className={styles["mobile-header-links"]}>
                <SearchIconSVG fill={'#fffef2'} />
              </a>
              <a href="" className={styles["mobile-header-links"]}>
                <img src={HeartIcon} alt="" />
              </a>
              <a href="" className={styles["mobile-header-links"]}>
                Cart
              </a>
              <a href="" className={styles["mobile-header-links"]}>
                <img src={MenuIcon} alt="" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SearchIconSVG({ fill, ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill={fill}
      viewBox="0 0 256 256"
      {...rest}
    >
      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
    </svg>
  );
}
