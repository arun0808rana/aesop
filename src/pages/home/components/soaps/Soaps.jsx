import NurtureSoap from "../../../../assets/nurture_soap.webp";
import PolishSoap from "../../../../assets/polish_soap.avif";
import RefreshSoap from "../../../../assets/refresh_soap.webp";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from './Soaps.module.css';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 1920, min: 1377 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1366, min: 1024 },
    items: 3,
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

export function Soaps() {
  return (
    <div className={styles["soaps-carousel"]}>
      <Carousel responsive={responsive}>
        <a href="#" className={styles["nurture-soap-container"]} draggable="false">
          <img src={NurtureSoap} draggable="false" />
        </a>
        <a href="#" className={styles["polish-soap-container"]} draggable="false">
          <img src={PolishSoap} draggable="false" />
        </a>
        <a href="#" className={styles["refresh-soap-container"]} draggable="false">
          <img src={PolishSoap} draggable="false" />
        </a>
      </Carousel>
    </div>
  );
}
