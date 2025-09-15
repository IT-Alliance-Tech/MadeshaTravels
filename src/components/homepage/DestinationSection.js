"use client"; // required because we use useRef & event handlers

import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/homepage/DestinationSection.module.css";

// ✅ Import images
import munnarImg from "../../assets/image/hero1.png";
import kedarnathImg from "../../assets/image/hero2.png";
import keralaImg from "../../assets/image/des5.png";
import goaImg from "../../assets/image/des1.png";
import ladakhImg from "../../assets/image/des.png";
import rajasthanImg from "../../assets/image/des3.png";

export default function DestinationSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320 * 3, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320 * 3, behavior: "smooth" });
  };

  return (
    <section id="discover" className={styles.destinationSection}>
      {/* Header */}
      <div className={styles.header}>
        <div>
          <p className={styles.smallHeading}>Top Destination</p>
          <h2 className={styles.mainHeading}>Explore top destination</h2>
        </div>
        <div className={styles.arrows}>
          <button onClick={scrollLeft} className={styles.arrowBtn}>←</button>
          <button onClick={scrollRight} className={styles.arrowBtnActive}>→</button>
        </div>
      </div>

      {/* Cards Wrapper */}
      <div className={styles.cardsWrapper} ref={scrollRef}>
        {/* Card 1 */}
        <div className={styles.card}>
          <Image src={munnarImg} alt="Munnar" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
              Murudeshwara<br />
            
            </h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className={styles.card}>
          <Image src={kedarnathImg} alt="Kedarnath" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
             Dharmasthala <br />
              
            </h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className={styles.card}>
          <Image src={keralaImg} alt="Kerala" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
             Mysore
            </h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <Image src={goaImg} alt="Goa" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
              Gokarna
            </h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className={styles.card}>
          <Image src={ladakhImg} alt="Ladakh" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
              Udupi
            </h3>
          </div>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <Image src={rajasthanImg} alt="Rajasthan" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <h3>
              Chikmagalur
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
