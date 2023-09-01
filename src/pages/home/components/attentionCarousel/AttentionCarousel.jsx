import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRightIcon from "../../../../assets/arrow-right.svg";
import styles from "./AttentionCarousel.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1367 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1366, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

import FacialCream from "../../../../assets/facia_cream.webp";
import FacialConcentrate from "../../../../assets/facial_concentrate.png";
import NutFacial from "../../../../assets/nut_facial.webp";

export function AttentionCarousel() {
  return (
    <div className={styles["attention-carousel"]}>
      <Carousel responsive={responsive}>
        <div className="section-details">
          <div className="mini-heading">For the skin</div>
          <h2 className="sections-tagline">Attention for all types</h2>
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

        <div className="attention-carousel-item">
          <img
            src={FacialConcentrate}
            className={styles["atttention-carousel-images"]}
          />
          <div className="attention-item-name">Lucent Facial Concentrate</div>
          <div className="attention-item-description">A vitamin-c rich layer serum</div>
        </div>
        
        <div className="attention-carousel-item">
          <img
            src={FacialCream}
            className={styles["atttention-carousel-images"]}
          />
          <div className="attention-item-name">Purifying Facial Cream Cleanser</div>
          <div className="attention-item-description">A daily cream cleanser for dry skin</div>
        </div>

        <div className="attention-carousel-item">
          <img
            src={NutFacial}
            className={styles["atttention-carousel-images"]}
          />
          <div className="attention-item-name">Camellia Nut Facial Hydrating Cream</div>
          <div className="attention-item-description">For normal dry or sensitive skin</div>
        </div>

        <div className="attention-carousel-item">
          <img
            src={FacialConcentrate}
            className={styles["atttention-carousel-images"]}
          />
          <div className="attention-item-name">Lucent Facial Concentrate</div>
          <div className="attention-item-description">A vitamin-c rich layer serum</div>
        </div>

        <div className="attention-carousel-item">
          <img
            src={FacialConcentrate}
            className={styles["atttention-carousel-images"]}
          />
          <div className="attention-item-name">Lucent Facial Concentrate</div>
          <div className="attention-item-description">A vitamin-c rich layer serum</div>
        </div>
      </Carousel>
    </div>
  );
}
