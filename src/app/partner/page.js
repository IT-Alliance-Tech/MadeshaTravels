"use client";
import Image from "next/image";
import styles from "../../styles/aboutus/PartnerSection.module.css"; // ✅ CSS import

// Import images
import img1 from "../../assets/image/partner1.png"; 
import img2 from "../../assets/image/partner3.png";
import img3 from "../../assets/image/partner2.png";
import worldmap from "../../assets/image/image4.png"; // ✅ world map import

export default function PartnerSection() {
  const services = [
    {
      title: "Corporate Transfers:",
      desc: "Office trips, employee transport, and business travel.",
    },
    {
      title: "Event Travel:",
      desc: "Weddings, functions, and group gatherings with hassle-free transport.",
    },
    {
      title: "School & College Trips:",
      desc: "Safe and reliable buses & tempo travellers for educational tours.",
    },
    {
      title: "Tour Operators:",
      desc: "Partner with us for group tours and package inclusions.",
    },
  ];

  return (
    <section className={styles.partnerSection}>
      {/* Left Content */}
      <div className={styles.textContent}>
        <p className={styles.smallHeading}>PARTNER WITH US</p>
        <h2 className={styles.mainHeading}>
          Grow Together with <br /> Madesha Tours & Travels
        </h2>
        <p className={styles.description}>
          Looking for a dependable transport partner? We provide Car, Bus, and Tempo Traveller services for:
        </p>

        <ul className={styles.list}>
          {services.map((service, index) => (
            <li key={index}>
              <strong>{service.title}</strong> {service.desc}
            </li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Register Now</button>
        </div>
      </div>

      {/* Right Images */}
      <div className={styles.imageGrid}>
        <Image src={worldmap} alt="World Map" className={styles.worldMap} />

        <div className={styles.imageWrapper}>
          <Image src={img1} alt="Partner Image 1" className={styles.partnerImage} />
        </div>
        <div className={`${styles.imageWrapper} ${styles.middleImage}`}>
          <Image src={img2} alt="Partner Image 2" className={styles.partnerImage} />
        </div>
        <div className={styles.imageWrapper}>
          <Image src={img3} alt="Partner Image 3" className={styles.partnerImage} />
        </div>
      </div>
    </section>
  );
}
