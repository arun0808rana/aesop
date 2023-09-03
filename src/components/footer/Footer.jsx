import ArrowRightIcon from "@assets/arrow-up-right.svg";
import styles from "./Footer.module.css";
import { Checkbox } from "../checkbox/Checkbox";
import { SustainabilityExcerpt } from "./SustainabilityExcerpt";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import InstagramLogo from '@assets/instagram-logo.svg';
import TwitterLogo from '@assets/twitter-logo.svg';
import LinkedinLogo from '@assets/linkedin-logo.svg';
import ChatIcon from '@assets/chat-fill.svg';

export function Footer() {
  const { width } = useWindowDimensions();

  return (
    <footer>
      <div className={styles["footer-top"]}>
        <form className={styles["email-container"]}>
          <h2 className={styles["email-heading"]}>
            Subscribe to Aesop communications
          </h2>
          <div className={styles["email-box"]}>
            <input type="email" placeholder="Email Address" />
            <a className={styles["email-box-icon"]}>
              <img src={ArrowRightIcon} />
            </a>
          </div>
          <div className="subscribe-checkbox">
            <Checkbox />
          </div>
          {width > 1024 ? <SustainabilityExcerpt /> : null}
        </form>

        <div className={styles["site-links"]}>
          <div className={styles["site-links-upper-section"]}>
            <div className={styles["site-link-container"]}>
              <div className="site-link-heading">Orders and support</div>
              <div className="separator"></div>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Contact us</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">FAQ</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Shipping</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Returns</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Order History</div>
              </a>{" "}
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Terms and conditions</div>
              </a>
            </div>

            <div className={styles["site-link-container"]}>
              <div className="site-link-heading">Services</div>
              <div className="separator"></div>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Contact us</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">FAQ</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Shipping</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Returns</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Order History</div>
              </a>{" "}
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Terms and conditions</div>
              </a>
            </div>

            <div className={styles["site-link-container"]}>
              <div className="site-link-heading">Location preferences</div>
              <div className="separator"></div>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Contact us</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">FAQ</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Shipping</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Returns</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Order History</div>
              </a>{" "}
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Terms and conditions</div>
              </a>
            </div>
          </div>

          <div className={styles["site-links-lower-section"]}>
            {width < 1025 ? <SustainabilityExcerpt /> : null}
            <div className={styles["site-link-container"]}>
              <div className="site-link-heading">About</div>
              <div className="separator"></div>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Our Story</div>
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Foundation</div>
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Careers</div>
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Privacy Policy</div>
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Accessibility</div>
              </a>{" "}
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Cookie Policy</div>
              </a>
            </div>

            <div className={styles["site-link-container"]}>
              <div className="site-link-heading">Social Media</div>
              <div className="separator"></div>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Instagram</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Twitter</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">LinkedIn</div>
                <img src={ArrowRightIcon} alt="" className="site-link-icon" />
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">WeChat</div>
              </a>
              <a href="" className={styles["site-link"]}>
                <div className="site-link-text">Weibo</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["footer-chat"]}>
        <img src={ChatIcon} alt="" />
      </div>

      <div className={styles["footer-base"]}>
        <div className="aesop-logo">Aesop</div>
        <div className={styles["footer-socials"]}>
          <a href="" className={styles["social-icon-container"]}>
            <img src={InstagramLogo} alt="" />
          </a>
          <a href="" className={styles["social-icon-container"]}>
            <img src={TwitterLogo} alt="" />
          </a>
          <a href="" className={styles["social-icon-container"]}>
            <img src={LinkedinLogo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
