"use client";

import Image from "next/image";
import busImg from "../../assets/image/bus.png";
import flightImg from "../../assets/image/flight.png";
import trainImg from "../../assets/image/train.png";
import hotelImg from "../../assets/image/hotel.png";
import styles from "../../styles/homepage/ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={styles.servicesSection}>
      {/* Left Content (now scrolls too) */}
      <div className={styles.textContent}>
        <p className={styles.smallHeading}>SERVICES</p>
        <h2 className={styles.mainHeading}>
          Our top value <br /> categories for you
        </h2>
      </div>

      {/* Cards (part of same scroll) */}
      <div className={styles.card}>
        <Image src={busImg} alt="Bus Services" className={styles.cardImg} />
        <h3>Bus Services</h3>
        <p>
          Budget-friendly connectivity with extensive networks reaching even
          remote towns.
        </p>
      </div>

      <div className={styles.card}>
        <Image src={flightImg} alt="Flight Services" className={styles.cardImg} />
        <h3>Flight Services</h3>
        <p>
          Fastest travel option connecting metros, tier-2 cities, and tourist
          hubs nationwide.
        </p>
      </div>

      <div className={styles.card}>
        <Image src={trainImg} alt="Train Services" className={styles.cardImg} />
        <h3>Train Services</h3>
        <p>
          Affordable and comfortable travel with India's vast railway network.
        </p>
      </div>

      <div className={styles.card}>
        <Image src={hotelImg} alt="Hotel Services" className={styles.cardImg} />
        <h3>Hotel Services</h3>
        <p>
          Find the best deals on hotels with comfort and convenience guaranteed.
        </p>
      </div>
    </section>
  );
}
