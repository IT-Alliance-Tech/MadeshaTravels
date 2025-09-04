import Image from "next/image";
import styles from "../../styles/homepage/HeroSection.module.css";

// Images
import hillImg from "../../assets/image/image3.png";
import gatewayImg from "../../assets/image/image2.png";
import tajmahalImg from "../../assets/image/image1.png";

// ✅ Background / Icons
import suitcaseIcon from "../../assets/icons/icon.png";
import arrowIcon from "../../assets/icons/object.png";
import userIcon from "../../assets/icons/add-user 1.png";

// Icons
import { FaPaperPlane } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      {/* Left Side */}
      <div className={styles.left}>
        <button className={styles.exploreBtn}>
          Explore Ultimate India!
          <Image src={suitcaseIcon} alt="Suitcase" width={24} height={24} />
        </button>
        <h1 className={styles.heading}>
          <span className={styles.travel}>Travel</span>{" "}
          <span className={styles.top}>top</span>{" "}
          <span className={styles.destination}>destination</span>{" "}
          <span className={styles.india}>of India</span>
        </h1>
        <p>
          We always make our customer happy by providing as many choices as
          possible
        </p>
        <div className={styles.buttons}>
          <button className={styles.getStarted}>Get Started</button>
          <button className={styles.register}>Register Now</button>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.right}>
        {/* Image Layout */}
        <div className={styles.imageLayout}>
          {/* Left column (Hill + Taj) */}
          <div className={styles.leftCol}>
            <div className={styles.imgCard}>
              <Image src={hillImg} alt="Hill Station" placeholder="blur" />
              <div className={styles.iconOverlay}>
                <FaPaperPlane />
              </div>
            </div>
            <div className={styles.imgCard}>
              <Image src={tajmahalImg} alt="Taj Mahal" placeholder="blur" />
            </div>
          </div>

          {/* Right column (Gateway) */}
          <div className={styles.rightCol}>
            <div className={styles.imgCardTall}>
              <Image
                src={gatewayImg}
                alt="Gateway of India"
                placeholder="blur"
              />
              <span className={styles.badge}>Top Places</span>
            </div>
            <Image
              height={40}
              width={40}
              className={`${styles.userProfileIcon}`}
              src={userIcon}
              alt="userIcon"
            />
          </div>
        </div>
      </div>

      {/* ✅ Decorative arrows (hidden only in mobile via CSS) */}
      <div className={styles.decorArrows}>
        <Image src={arrowIcon} alt="Arrow Icon" width={20} height={20} />
      </div>
    </section>
  );
}
