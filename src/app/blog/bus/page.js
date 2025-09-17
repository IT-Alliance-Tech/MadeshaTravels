"use client";
import Image from "next/image";
import styles from "../../../styles/aboutus/BusService.module.css";
import busImg from "../../../assets/image/bus1.png"; // same image, you can replace with bus image if needed

export default function BusService() {
  return (
    <div className={styles.container}>
      {/* Left Side - Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={busImg}
          alt="Bus Service"
          className={styles.image}
          priority
        />
      </div>

      {/* Right Side - Content */}
      <div className={styles.content}>
        <p className={styles.subheading}>BUS SERVICE</p>
        <h2 className={styles.heading}>
          Choose from 21 to 50-seater <br />
          buses, AC or Non-AC, perfect <br />
          for group trips, events, and <br />
          corporate travel.
        </h2>

        {/* Bus Details */}
        <div className={styles.busDetails}>
          <h3 className={styles.busType}>21 Seater</h3>
          <p className={styles.busDesc}>
            A great option for smaller groups, the 21-Seater Bus offers comfort
            and affordability.
          </p>
          <ul className={styles.list}>
            <li>Non-AC at ₹27/km and AC at ₹30/km.</li>
            <li>Driver Bata: ₹700/day.</li>
          </ul>

          <h3 className={styles.busType}>25 Seater</h3>
          <p className={styles.busDesc}>
            Perfect for school trips or small functions, the 25-Seater Bus
            ensures a smooth ride.
          </p>
          <ul className={styles.list}>
            <li>Non-AC at ₹30/km and AC at ₹34/km.</li>
            <li>Driver Bata: ₹700/day.</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className={styles.buttonGroup}>
          <button className={styles.activeBtn}>21–25 Seater</button>
          <button className={styles.inactiveBtn}>30–35 Seater</button>
        </div>
      </div>
    </div>
  );
}
