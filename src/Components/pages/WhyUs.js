"use client";
import Image from "next/image";
import styles from "../styles/WhyUs.module.css";
import hampiImg from "../public/images/hampi.png"; // ✅ import method

const whyUsPoints = [
  {
    id: 1,
    title: "Trusted Experience",
    desc: "Years of expertise in delivering safe and reliable travel solutions."
  },
  {
    id: 2,
    title: "Comfort & Safety",
    desc: "Well-maintained vehicles with professional drivers."
  },
  {
    id: 3,
    title: "24/7 Support",
    desc: "Always available to assist with bookings, queries, and emergencies."
  },
  {
    id: 4,
    title: "Custom Packages",
    desc: "Flexible travel options tailored to your needs—corporate, family, or solo."
  },
  {
    id: 5,
    title: "Affordable Pricing",
    desc: "Transparent rates with no hidden costs."
  },
  {
    id: 6,
    title: "Pan-India Service",
    desc: "Seamless travel experiences across major cities and destinations."
  }
];

export default function WhyUs() {
  return (
    <section className={styles.whyUsSection}>
      {/* Left Image */}
      <div className={styles.imageContainer}>
        <Image src={hampiImg} alt="Hampi Chariot" className={styles.image} />
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        <p className={styles.subtitle}>WHY US?</p>
        <h2 className={styles.heading}>Your Journey, Our Commitment</h2>
        <ul className={styles.list}>
          {whyUsPoints.map((point) => (
            <li key={point.id} className={styles.listItem}>
              <span className={styles.number}>{point.id}.</span>
              <div>
                <strong>{point.title}: </strong>
                {point.desc}
              </div>
            </li>
          ))}
        </ul>

        <div className={styles.buttons}>
          <button className={styles.primaryBtn}>Get Started</button>
          <button className={styles.secondaryBtn}>Register Now</button>
        </div>
      </div>
    </section>
  );
}
