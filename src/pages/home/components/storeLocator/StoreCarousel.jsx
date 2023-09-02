import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import FacialCream from "@assets/single_c_1.avif";
import FacialConcentrate from "@assets/single_c_2.avif";
import NutFacial from "@assets/single_c_3.avif";
import styles from "./StoreCarousel.module.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1367 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1366, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function StoreCarousel() {
  return (
    <div className={styles["store-carousel"]}>
      <Carousel responsive={responsive}>
        <div className={styles["store-carousel-item"]}>
          <img
            src={FacialConcentrate}
            className="section-carousel-images-quirk"
          />
        </div>

        <div className={styles["store-carousel-item"]}>
          <img src={FacialCream} className="section-carousel-images-quirk" />
        </div>

        <div className={styles["store-carousel-item"]}>
          <img src={NutFacial} className="section-carousel-images-quirk" />
        </div>

        <div className={styles["store-carousel-item"]}>
          <img
            src={FacialConcentrate}
            className="section-carousel-images-quirk"
          />
        </div>

        <div className={styles["store-carousel-item"]}>
          <img
            src={FacialConcentrate}
            className="section-carousel-images-quirk"
          />
        </div>
      </Carousel>
    </div>
  );
}
