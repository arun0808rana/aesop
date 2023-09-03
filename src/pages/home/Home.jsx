import { Header } from "../../components/header/Header";
import styles from "./Home.module.css";
import ArrowRightIcon from "../../assets/arrow-right.svg";
import { Soaps } from "./components/soaps/Soaps";
import { SubCta } from "../../components/subCta/SubCta";

import { AttentionCarousel } from "./components/attentionCarousel/AttentionCarousel";
import { Domestic } from "./components/domestic/Domestic";
import { Sustainablility } from "./components/sustainablility/Sustainablility";
import { StoreLocator } from "./components/storeLocator/StoreLocator";
import { Quote } from "./components/quote/Quote";
import { Footer } from "../../components/footer/Footer";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="top-banners">
        <div className={styles["video-consultation-banner"]}>
          Trained Aesop consultations are available to provide bespoke skin care
          advise. <a href="">Book a video consultation</a>
        </div>
        <a href="" className={styles["second-consultaion-banner"]}>
          Click and Collect is now available at Hong Kong stores. Enjoy
          complimentary shipping on orders over HK$400{" "}
          <span className={styles["plus-icon"]}>+</span>
        </a>
      </div>
      <Header />
      <section className={styles["introduction"]}>
        {width > 640 ? (
          <>
            <h2 className={styles["brands-name"]}>Aesop</h2>
            <div className={styles["brand-details"]}>
              <div className="bar-soaps">Bar Soaps</div>
              <h2 className={styles["tagline"]}>
                A body care classic, reimagined{" "}
              </h2>
              <div className="excerpt">
                Breathing new life into the humble bar soap are Nurture, Polish
                and Refresh—three additions to the range, each imparting a
                unique constellation of benefits.
              </div>
              <a className={styles["cta"]}>
                <div className={styles["cta-text"]}>Discover Bar Soaps</div>
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
            </div>
          </>
        ) : null}
      </section>

      {width < 641 ? (
        <section className={styles["mobile-introduction-details"]}>
          <div className="mobile section-details">
            <div className="mobile section-details-flexbox">
              <div className="mobile section-details-lhs">
                <div className="mobile mini-heading">Bar Soaps</div>
                <h2 className="mobile sections-tagline">
                  A body care classic, reimagined
                </h2>
              </div>
              <div className={styles["section-details-rhs"]}>
                <div className="mobile sections-description">
                  Breathing new life into the humble bar soap are Nurture,
                  Polish and Refresh—three additions to the range, each
                  imparting a unique constellation of benefits.
                </div>
                <a className={styles["cta"]}>
                  <div className={styles["cta-text"]}>Discover Bar Soaps</div>
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
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className={styles["soaps-container"]}>
        <div className="section-details">
          <div className="section-details-flexbox">
            <div className="section-details-lhs">
              <div className="mini-heading">For the body</div>
              <h2 className="sections-tagline">An expression of care</h2>
            </div>
            <div className={styles["section-details-rhs"]}>
              <div className="sections-description">
                Aesop formulations offer the body deserving care, to cleanse,
                replenish, and nourish skin. Each product is a sensory pleasure
                to use with its own delightful aroma.
              </div>
              <a href="" className="sections-cta">
                <div className="soaps-text">See all Body Care</div>
                <img src={ArrowRightIcon} alt="" className="soaps-cta-icon" />
              </a>
            </div>
          </div>
        </div>
        <Soaps />
      </section>

      <section className={styles["warm-up"]}>
        <div className={styles["warm-up-details"] + " section-details"}>
          <div className="mini-heading">The Athenaeum</div>
          <h2 className="sections-tagline">The warm-up </h2>
          <div className="sections-description">
            In The Athenaeum, our digital reading room: a guide to ensuring a
            healthy complexion through the warmer months.
          </div>
          <SubCta subCtaText={"Read More"} />
        </div>
        <div className={styles["warm-up-rhs"] + " section-banners"}>
          {/* <img src={WarmUpBanner} alt="" /> */}
        </div>
      </section>

      <section className="attention">
        <div className="section-details flexbox carousel-details">
          <div className="section-details-lhs">
            <div className="mini-heading">For the skin</div>
            <h2 className="sections-tagline">Attention for all types</h2>
          </div>
          <div className="section-details-rhs">
            <div className="sections-description">
              The well-being of your skin is the product of hydration,
              nourishment, and protection through discerning rituals. Explore
              requisite skin care for all skin types.
            </div>
            <a href="" className="sections-cta">
              <div className="soaps-text">See all Skin Care</div>
              <img src={ArrowRightIcon} alt="" className="soaps-cta-icon" />
            </a>
          </div>
        </div>
        <AttentionCarousel />
      </section>

      <Sustainablility />
      <Domestic />
      <StoreLocator />
      <Quote />
      <Footer />
    </>
  );
}
