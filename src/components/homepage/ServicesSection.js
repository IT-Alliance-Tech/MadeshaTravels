"use client";

import Image from "next/image";
import busImg from "../../assets/image/bus.png";
import carImg from "../../assets/image/car.png";
import tempoImg from "../../assets/image/tempo.png";
import styles from "../../styles/homepage/ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section id="services" className={styles.servicesSection}>
      {/* Left Content */}
      <div className={styles.textContent}>
        <p className={styles.smallHeading}>SERVICES</p>
        <h2 className={styles.mainHeading}>
          Our top value <br /> categories for you
        </h2>
      </div>

      {/* Cards Wrapper */}
      <div className={styles.cardsWrapper}>
        {/* Card 1 */}
        <div className={styles.card}>
          <Image src={busImg} alt="Bus Services" className={styles.cardImg} />
          <h3>Bus Services</h3>
          <p>
            Budget-friendly connectivity with extensive networks reaching even
            remote towns.
          </p>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <Image src={carImg} alt="Car Services" className={styles.cardImg} />
          <h3>Car Services</h3>
          <p>
            Premium car rental services with professional drivers for business,
            travel, and personal needs.
          </p>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <Image src={tempoImg} alt="Tempo Traveller Services" className={styles.cardImg} />
          <h3>Tempo Traveller Services</h3>
          <p>
            Comfortable and reliable Tempo Traveller rentals for group trips,
            office outings, and family tours.
          </p>
        </div>
      </div>
    </section>
  );
}
