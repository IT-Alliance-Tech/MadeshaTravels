"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/aboutus/BlogSection.module.css"; // ✅ module import

// Import images
import img1 from "../../assets/image/one.png";
import img2 from "../../assets/image/two.png";
import img3 from "../../assets/image/three.png";
import Link from "next/link";

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
  ];

  const [index, setIndex] = useState(0);

  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  const handleNext = () =>
    setIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));

  return (
    <section className={styles.blogSection}>
      <p className={styles.smallHeading}>BLOGS</p>
      <h2 className={styles.mainHeading}>Travel Insights & Inspiration</h2>

      <div className={styles.cardsWrapper}>
        {blogs.map((blog, i) => (
          <div
            key={blog.id}
            className={styles.blogCard}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              className={styles.blogImage}
            />
            <div className={styles.blogContent}>
              <p className={styles.blogTitle}>{blog.title}</p>
              <Link
            href={`/blogDetails/${blog?.id}`} className={styles.knowMore}>
                Know more
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.navButtons}>
        <button className={styles.navBtn} onClick={handlePrev}>
          ←
        </button>
        <button
          className={`${styles.navBtn} ${styles.activeBtn}`}
          onClick={handleNext}
        >
          →
        </button>
      </div>
    </section>
  );
}
