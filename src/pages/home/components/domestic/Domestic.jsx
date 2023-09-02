import { DomesticCarousel } from "./components/domesticCarousel/DomesticCarousel";
import ArrowRightIcon from "../../../../assets/arrow-right.svg";

export function Domestic() {
  return (
    <section className="domestic">
      <div className="section-details flexbox carousel-details">
        <div className="section-details-lhs">
          <div className="mini-heading">For the home</div>
          <h2 className="sections-tagline">Domestic pleasures</h2>
        </div>
        <div className="section-details-rhs">
          <div className="sections-description">
            Our range of aromatic formulations for the home are practical and
            pleasing in equal measure.
          </div>
          <a href="" className="sections-cta">
            <div className="soaps-text">See all Home</div>
            <img src={ArrowRightIcon} alt="" className="soaps-cta-icon" />
          </a>
        </div>
      </div>
      <DomesticCarousel />
    </section>
  );
}
