import Image from "next/image";
import styles from "../../../styles/aboutus/BlogDetails.module.css";
import travellersImg from "../../../assets/image/car1.png";

export default function BlogDetails() {
  return (
    <div className={styles.container}>
      {/* Left Image */}
      <div className={styles.imageWrapper}>
        <Image
          src={travellersImg}
          alt="Tempo Travellers"
          className={styles.image}
          priority
        />
      </div>

      {/* Right Content */}
      <div className={styles.content}>
        <p className={styles.blogTag}>BLOG</p>
        <h1 className={styles.heading}>
          Why Tempo Travellers <br /> are the Best Choice <br /> for Group Travel
        </h1>
        <p className={styles.description}>
          When planning a trip with friends, family, or colleagues, transportation can make or break the journey. At
          Madosha Tours & Travels, our Tempo Travellers offer:
        </p>

        <ul className={styles.list}>
          <li>
            <b>Spacious Seating:</b> Comfort for groups without feeling cramped.
          </li>
          <li>
            <b>Cost-Effective:</b> Share the cost, save more compared to multiple cars.
          </li>
          <li>
            <b>Professional Drivers:</b> Ensuring safe and stress-free journeys.
          </li>
          <li>
            <b>Convenience:</b> Everyone travels together—no splitting up.
          </li>
          <li>
            <b>Perfect for Events:</b> Weddings, tours, picnics, and office outings.
          </li>
        </ul>

        {/* Buttons */}
        <div className={styles.buttons}>
          <button className={styles.getStarted}>Get Started</button>
          <button className={styles.register}>Register Now</button>
        </div>
      </div>
    </div>
  );
}
