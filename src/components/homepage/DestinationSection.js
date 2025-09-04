"use client";  // required because we use useRef & event handlers

import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/homepage/DestinationSection.module.css";

// ✅ Import images
import munnarImg from "../../assets/image/munnar.png";
import kedarnathImg from "../../assets/image/kedarnath.png";
import keralaImg from "../../assets/image/7 hill.png";
// Add 3 more images
import goaImg from "../../assets/image/munnar.png";
import ladakhImg from "../../assets/image/kedarnath.png";
import rajasthanImg from "../../assets/image/7 hill.png";

export default function DestinationSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320 * 3, behavior: "smooth" }); 
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320 * 3, behavior: "smooth" }); 
  };

  return (
    <section className={styles.destinationSection}>
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
            <div className={styles.cardHeader}>
              <h3>
                Munnar Trip <br />
                (3 Days, 2 Nights)
              </h3>
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
              <h3>
                Kedarnath Trip <br />
                (3–4 Days)
              </h3>
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
              <h3>
                7-Day Kerala <br />
                Itinerary
              </h3>
              <span className={styles.price}>₹60,000</span>
            </div>
            <p className={styles.location}>Kerala, India</p>
            <p className={styles.rating}>5.0</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className={styles.card}>
          <Image src={goaImg} alt="Goa" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>
                Goa Beach <br />
                Holiday
              </h3>
              <span className={styles.price}>₹25,000</span>
            </div>
            <p className={styles.location}>Goa, India</p>
            <p className={styles.rating}>4.7</p>
          </div>
        </div>

        {/* Card 5 */}
        <div className={styles.card}>
          <Image src={ladakhImg} alt="Ladakh" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>
                Ladakh <br />
                Adventure
              </h3>
              <span className={styles.price}>₹45,000</span>
            </div>
            <p className={styles.location}>Leh-Ladakh, India</p>
            <p className={styles.rating}>4.9</p>
          </div>
        </div>

        {/* Card 6 */}
        <div className={styles.card}>
          <Image src={rajasthanImg} alt="Rajasthan" className={styles.cardImg} />
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <h3>
                Rajasthan Heritage <br />
                Tour
              </h3>
              <span className={styles.price}>₹35,000</span>
            </div>
            <p className={styles.location}>Jaipur, Jodhpur, Udaipur</p>
            <p className={styles.rating}>4.6</p>
          </div>
        </div>
      </div>
    </section>
  );
}
