"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import busImg from "../../assets/image/bus.png";
import carImg from "../../assets/image/car.png";
import tempoImg from "../../assets/image/tempo.png";
import styles from "../../styles/homepage/ServicesSection.module.css";

export default function ServicesSection() {
  const router = useRouter();

  // Array of services
  const services = [
    {
      id: 1,
      title: "Bus Services",
      description: "Budget-friendly connectivity with extensive networks reaching even remote towns.",
      img: busImg,
      link: "bus-service" // <-- link to your Bus Service page
    },
    {
      id: 2,
      title: "Car Services",
      description: "Premium car rental services with professional drivers for business, travel, and personal needs.",
      img: carImg,
      link: "car-service" // <-- link to your Car Service page
    },
    {
      id: 3,
      title: "Tempo Traveller Services",
      description: "Comfortable and reliable Tempo Traveller rentals for group trips, office outings, and family tours.",
      img: tempoImg,
      link: "tempo-service" // <-- link to your Tempo Service page
    }
  ];

  // Handle card click
  const handleClick = (link) => {
    router.push(link); // Navigate to the page
  };

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
        {services.map((service) => (
          <div
            key={service.id}
            className={styles.card}
            onClick={() => handleClick(service.link)}
            style={{ cursor: "pointer" }} // Show pointer on hover
          >
            <Image src={service.img} alt={service.title} className={styles.cardImg} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
