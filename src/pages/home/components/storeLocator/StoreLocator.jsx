import { SubCta } from "../../../../components/subCta/SubCta";
import { StoreCarousel } from "./StoreCarousel";

export function StoreLocator() {
  return (
    <section className="store-locator">
      <div className="section-details">
        <h2 className="sections-tagline">Store locator </h2>
        <div className="sections-description">
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </div>
        <SubCta subCtaText={"Read More"} />
      </div>

      <StoreCarousel />
    </section>
  );
}
