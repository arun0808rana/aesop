import styles from "./Quote.module.css";

export function Quote() {
  return (
    <section className={styles["quote"]}>
      <div className={styles["quote-text"]}>
        <blockquote>
          ‘Life never becomes a habit to me. It's always a marvel.’
        </blockquote>
        <cite>Katherine Mansfield</cite>
      </div>
    </section>
  );
}
