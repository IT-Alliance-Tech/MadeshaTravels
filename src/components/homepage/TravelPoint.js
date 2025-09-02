"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../../styles/homepage/TravelPoint.module.css";
import travelImg from "../../assets/image/travel.png";
import { MdConfirmationNumber } from "react-icons/md"; // ✅ Ticket icon

// ✅ Stats array
const statsData = [
  { value: 500, suffix: "+", label: "Holiday Package" },
  { value: 100, suffix: "", label: "Luxury Hotel", highlight: true }, // Yellow circle here
  { value: 7, suffix: "", label: "Premium Airlines" },
  { value: 2000, suffix: "+", label: "Happy Customer" },
];

export default function TravelPoint() {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  // ✅ Counter Animation
  useEffect(() => {
    statsData.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000; // 2s
      const increment = Math.ceil(end / (duration / 30));

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[i] = start;
          return updated;
        });
      }, 30);
    });
  }, []);

  return (
    <section className={styles.travelPointSection}>
      <div className={styles.container}>
        {/* Left Side Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={travelImg}
            alt="Travel Collage"
            width={600}
            height={600}
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
            {statsData.map((stat, i) => (
              <div key={i} className={styles.statCard}>
                {/* ✅ Yellow circle with ticket icon */}
                {stat.highlight && (
                  <div className={styles.yellowCircle}>
                    <MdConfirmationNumber size={28} color="#fff" />
                  </div>
                )}
                <h3>
                  {counts[i]}
                  {stat.suffix}
                </h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
