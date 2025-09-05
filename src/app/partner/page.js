import Image from "next/image";
import styles from "../../styles/aboutus/PartnerSection.module.css";
import hillImg from "../../assets/image/partner1.png";
import gatewayImg from "../../assets/image/partner3.png";
import tajmahalImg from "../../assets/image/partner2.png";

export default function PartnerSection() {
  const features = {
    title:
      "Looking for a dependable transport partner? We provide Car, Bus, and Tempo Traveller services for:",
    keyFeatures: [
      "Looking for a dependable transport partner? We provide Car, Bus, and Tempo Traveller services for:",
      "Corporate Transfers: Office trips, employee transport, and business travel.",
      "Event Travel: Weddings, functions, and group gatherings with hassle-free transport.",
      "School & College Trips: Safe and reliable  buses & tempo travellers for educational tours.",
      "Tour Operators: Partner with us for group tours and package inclusions.",
    ],
  };

  return (
    <section className={styles.hero}>
      {/* Left Side */}
      <div className={styles.left}>
        <p className={styles.subHeading}>Partner With Us</p>
        <h1>Grow Together with Madesha Tours & Travels</h1>
        <p style={{ textAlign: "start" }}>{features?.title}</p>
        <ul>
          {features?.keyFeatures?.map((item, index) => (
            <li style={{ textAlign: "start" }} key={index}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.buttons}>
          <button className={styles.getStarted}>Get Started</button>
          <button className={styles.register}>Register Now</button>
        </div>
      </div>
      {/* Right Side */}
      <div className={styles.right}>
        <div className={styles.imageLayout}>
          {/* Left column */}
          <div className={styles.leftCol}>
            <div className={styles.imgCard}>
              <Image src={hillImg} alt="Hill Station" placeholder="blur" />
            </div>
            <div className={styles.imgCard}>
              <Image src={tajmahalImg} alt="Taj Mahal" placeholder="blur" />
            </div>
          </div>

          {/* Right column */}
          <div className={styles.rightCol}>
            <div className={styles.imgCardTall}>
              <Image
                src={gatewayImg}
                alt="Gateway of India"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
