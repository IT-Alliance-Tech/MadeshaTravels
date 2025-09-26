"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/homepage/destinationSection.module.css";
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
          <button onClick={scrollLeft} className={styles.arrowBtn}>
            ←
          </button>
          <button onClick={scrollRight} className={styles.arrowBtnActive}>
            →
          </button>
        </div>
      </div>
      <div className={styles.cardsWrapper} ref={scrollRef}>
        {destinationCards?.map((item, index) => (
          <div key={index} className={styles.card}>
            <Image
              src={item?.img}
              alt={`${item?.name}`}
              className={styles.cardImg}
            />
            <div className={styles.cardContent}>
              <h3>{item?.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const destinationCards = [
  {
    img: munnarImg,
    name: "Murudeshwara",
  },
  {
    img: kedarnathImg,
    name: "Dharmasthala",
  },
  {
    img: keralaImg,
    name: "Mysore",
  },
  {
    img: goaImg,
    name: "Gokarna",
  },
  {
    img: ladakhImg,
    name: "Udupi",
  },
  {
    img: rajasthanImg,
    name: "Chikmagalur",
  },
];
