export function SubCta({subCtaText}) {
  return (
    <a className="sub-cta">
      <div className="sub-cta-text">{subCtaText}</div>
      {/* <img src={ArrowRightIcon} className={styles["cta-arrow"]} /> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="current"
        viewBox="0 0 256 256"
      >
        <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
      </svg>
    </a>
  );
}
