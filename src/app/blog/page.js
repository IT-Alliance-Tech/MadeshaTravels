"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../../styles/aboutus/BlogSection.module.css";
import Link from "next/link";
import blogs from "../../../public/blogs";

export default function BlogSection() {

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
              width={100}
              height={100}
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
