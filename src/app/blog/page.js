"use client";
import Image from "next/image";
import { useRef } from "react";
import styles from "../../styles/aboutus/BlogSection.module.css";
import Link from "next/link";
import img1 from "../../assets/image/one.png";
import img2 from "../../assets/image/two.png";
import img3 from "../../assets/image/three.png";
import img4 from "../../assets/image/one.png";
import img5 from "../../assets/image/two.png";
import img6 from "../../assets/image/three.png";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: img1,
      title: "Why Tempo Travellers are the Best Choice for Group Travel",
      link: "#",
    },
    {
      id: 2,
      image: img2,
      title: "Top Reasons to Choose a Bus for Your Next Event or Trip",
      link: "#",
    },
    {
      id: 3,
      image: img3,
      title: "Why Car Rentals Make Every Journey Easier and Hassle-Free",
      link: "#",
    },
    {
      id: 4,
      image: img4,
      title: "Discover Hidden Gems: Offbeat Travel Destinations in India",
      link: "#",
    },
    {
      id: 5,
      image: img5,
      title: "Essential Travel Hacks to Save Time and Money",
      link: "#",
    },
    {
      id: 6,
      image: img6,
      title: "Top Family-Friendly Destinations You Must Visit",
      link: "#",
    },
  ];

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(`.${styles.blogCard}`);
      if (card) {
        const cardWidth = card.offsetWidth + 20; // include gap
        scrollRef.current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector(`.${styles.blogCard}`);
      if (card) {
        const cardWidth = card.offsetWidth + 20; // include gap
        scrollRef.current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className={styles.blogSection}>
      <div className={styles.headingContainer}>
        <span>
          <p className={styles.smallHeading}>BLOGS</p>
          <h2 className={styles.mainHeading}>Travel Insights & Inspiration</h2>
        </span>
        <div className={styles.navButtons}>
          <button className={styles.navBtn} onClick={scrollLeft}>
            ←
          </button>
          <button
            className={`${styles.navBtn} ${styles.activeBtn}`}
            onClick={scrollRight}
          >
            →
          </button>
        </div>
      </div>

      {/* Mobile Nav Buttons */}
      <div className={styles.mobNavButtons}>
        <button className={styles.navBtn} onClick={scrollLeft}>
          ←
        </button>
        <button
          className={`${styles.navBtn} ${styles.activeBtn}`}
          onClick={scrollRight}
        >
          →
        </button>
      </div>

      {/* Blog Cards */}
      <div className={styles.cardsWrapper} ref={scrollRef}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.blogCard}>
            <Image
              src={blog.image}
              alt={blog.title}
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <p className={styles.blogTitle}>{blog.title}</p>
              <Link
                href={`/blogDetails/${blog?.id}`}
                className={styles.knowMore}
              >
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
