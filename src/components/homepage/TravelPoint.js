import Image from "next/image";
import styles from "../../styles/homepage/TravelPoint.module.css";
import travelImg from "../../assets/image/travel.png";

export default function TravelPoint() {
  return (
    <section className={styles.travelPointSection}>
      <div className={styles.container}>
        {/* Left Side Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={travelImg}
            alt="Travel Collage"
            width={696}
            height={697}
            className={styles.travelImage}
          />
        </div>

        {/* Right Side Content */}
        <div className={styles.content}>
          <p className={styles.smallHeading}>Travel Point</p>
          <h2 className={styles.mainHeading}>
            We helping you find your dream location
          </h2>
          <p className={styles.description}>
            From serene hill stations to vibrant cities, we make it easy for you
            to explore, experience, and enjoy every corner of India with
            reliable travel services tailored to your needs.
          </p>

          {/* Stats Grid */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>500+</h3>
              <p>Holiday Package</p>
            </div>
            <div className={styles.statCard}>
              <h3>100</h3>
              <p>Luxury Hotel</p>
            </div>
            <div className={styles.statCard}>
              <h3>7</h3>
              <p>Premium Airlines</p>
            </div>
            <div className={styles.statCard}>
              <h3>2k+</h3>
              <p>Happy Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
