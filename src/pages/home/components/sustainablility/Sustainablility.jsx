import { SubCta } from "../../../../components/subCta/SubCta";
import SustainBanner from "../../../../assets/sustain.avif";
import styles from "./Sustainability.module.css";

export function Sustainablility() {
  return (
    <section className={styles["sustainability"]}>
      <div
        className={styles["sustainability-banner"] + " section-banners"}
      ></div>
      <div className="section-details">
        <div className="section-details-lhs">
          <h2 className="sections-tagline">Post-Poo Drops has returned</h2>
        </div>
        <div className="">
          <div className="sections-description">
            Here to make the malodorous melodious once again. Dispense this
            favoured formulation into the toilet bowl after flushing to
            effectively mask disagreeable odours.
          </div>
          <SubCta subCtaText={"Discover Post-Poo Drops"} />
        </div>
      </div>
    </section>
  );
}
