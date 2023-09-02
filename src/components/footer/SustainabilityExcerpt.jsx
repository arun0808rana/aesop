import styles from "./Footer.module.css";

export function SustainabilityExcerpt() {
  return (
    <div className={styles["sustainability-excerpt"]}>
      <div className="site-link-heading">Sustainability</div>
      <div className="separator"></div>
      <div className="sustainability-text">
        All Aesop products are vegan, and we do not test our formulations or
        ingredients on animals. We are Leaping Bunny approved and a Certified B
        Corporation. Learn more
      </div>
    </div>
  );
}
