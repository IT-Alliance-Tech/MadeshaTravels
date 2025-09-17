"use client";
import Image from "next/image";
import styles from "../../styles/aboutus/TempoTraveller.module.css";
import tempoImg from "../../assets/image/tempo1.png"; // replace with your actual image

export default function TempoTraveller() {
  const details = [
    "Enjoy Non-AC rides at ₹18/km or AC rides at ₹22/km.",
    "A minimum of 300 km per day is required.",
    "Driver Bata is ₹500/day (from 6:00 AM to 10:00 PM).",
    "If travel extends before 6:00 AM or after 10:00 PM, an extra driver bata of ₹700 will be applicable.",
    "Road toll and parking charges are additional.",
  ];

  return (
    <div className={styles.container}>
      {/* Left Side - Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={tempoImg}
          alt="Tempo Traveller"
          className={styles.image}
          priority
        />
      </div>

      {/* Right Side - Content */}
      <div className={styles.content}>
        <p className={styles.subheading}>TEMPO TRAVELLERS SERVICES</p>
        <h2 className={styles.heading}>
          Our 13+1 Seater Tempo <br />
          Traveller is perfect for <br />
          small groups and <br />
          family trips.
        </h2>

        <ol className={styles.list}>
          {details.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}
