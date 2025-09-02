import Image from "next/image";
import styles from "../../styles/homepage/DestinationSection.module.css";

// ✅ Import images
import munnarImg from "../../assets/image/munnar.png";
import kedarnathImg from "../../assets/image/kedarnath.png";
import keralaImg from "../../assets/image/7 hill.png";

export default function DestinationSection() {
  return (
    <section className={styles.destinationSection}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <p className={styles.smallHeading}>Top Destination</p>
          <h2 className={styles.mainHeading}>Explore top destination</h2>
        </div>
        <div className={styles.arrows}>
          <button className={styles.arrowBtn}>←</button>
          <button className={styles.arrowBtnActive}>→</button>
        </div>
      </div>

      {/* Cards */}
      <div className={styles.cardsWrapper}>
        {/* Card 1 */}
        <div className={styles.card}>
          <Image src={munnarImg} alt="Munnar" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>Munnar Trip (3 Days, 2 Nights)</h3>
              <span className={styles.price}>₹15,500</span>
            </div>
            <p className={styles.location}>Cochin (Kochi), ~130 km away</p>
            <p className={styles.rating}>4.8</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <Image src={kedarnathImg} alt="Kedarnath" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>Kedarnath Trip (3–4 Days)</h3>
              <span className={styles.price}>₹18,500</span>
            </div>
            <p className={styles.location}>Garhwal Himalayas (North India)</p>
            <p className={styles.rating}>4.5</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <Image src={keralaImg} alt="Kerala" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>7-Day Kerala Itinerary</h3>
              <span className={styles.price}>₹60,000</span>
            </div>
            <p className={styles.location}>Kerala, India</p>
            <p className={styles.rating}>5.0</p>
          </div>
        </div>
      </div>
    </section>
  );
}
