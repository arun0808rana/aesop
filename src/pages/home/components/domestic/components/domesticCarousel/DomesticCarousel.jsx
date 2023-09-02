import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRightIcon from "../../../../../../assets/arrow-right.svg";

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

import PostPooDropsImage from "../../../../../../assets/poo_drops.avif";
import Aganice from "../../../../../../assets/aganice.webp";
import useWindowDimensions from "../../../../../../hooks/useWindowDimensions";

export function DomesticCarousel() {
  const { width } = useWindowDimensions();
  return (
    <div className="domestic-carousel">
      <Carousel responsive={responsive}>
        {width > 1024 ? (
          <div className="section-details">
            <div className="mini-heading">For the home</div>
            <h2 className="sections-tagline">Domestic pleasures</h2>
            <div className="sections-description">
              Our range of aromatic formulations for the home are practical and
              pleasing in equal measure.
            </div>
            <a href="" className="sections-cta">
              <div className="soaps-text">See all Home</div>
              <img src={ArrowRightIcon} alt="" className="soaps-cta-icon" />
            </a>
          </div>
        ) : null}

        <div className="attention-carousel-item">
          <img src={Aganice} className="section-carousel-images" />
          <div className="attention-item-name">Lucent Facial Concentrate</div>
          <div className="attention-item-description">
            A vitamin-c rich layer serum
          </div>
        </div>

        <div className="attention-carousel-item">
          <img src={PostPooDropsImage} className="section-carousel-images" />
          <div className="attention-item-name">
            Purifying Facial Cream Cleanser
          </div>
          <div className="attention-item-description">
            A daily cream cleanser for dry skin
          </div>
        </div>

        <div className="attention-carousel-item">
          <img src={Aganice} className="section-carousel-images" />
          <div className="attention-item-name">
            Camellia Nut Facial Hydrating Cream
          </div>
          <div className="attention-item-description">
            For normal dry or sensitive skin
          </div>
        </div>

        <div className="attention-carousel-item">
          <img src={Aganice} className="section-carousel-images" />
          <div className="attention-item-name">Lucent Facial Concentrate</div>
          <div className="attention-item-description">
            A vitamin-c rich layer serum
          </div>
        </div>

        <div className="attention-carousel-item">
          <img src={Aganice} className="section-carousel-images" />
          <div className="attention-item-name">
            Camellia Nut Facial Hydrating Cream
          </div>
          <div className="attention-item-description">
            For normal dry or sensitive skin
          </div>
        </div>
      </Carousel>
    </div>
  );
}
