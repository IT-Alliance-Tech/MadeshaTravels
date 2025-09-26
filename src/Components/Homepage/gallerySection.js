"use client";
import React from "react";
import styles from "../../styles/gallerySection.module.css";

import img1 from "../../assets/image/gallery1.png";
import img2 from "../../assets/image/g1.png";
import img3 from "../../assets/image/gallery3.png";
import img4 from "../../assets/image/bus2.png";
import Image from "next/image";

// ✅ Gallery data array
const galleryImages = [
  { id: 1, src: img1.src, alt: "First" },
  { id: 2, src: img2.src, alt: "Second" },
  { id: 3, src: img3.src, alt: "Third" },
  { id: 4, src: img4.src, alt: "Fourth" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className={`${styles.gallery}`}>
      <div className={`${styles.gallery_header}`}>
        <p className={`${styles.gallery_subtitle}`}>OUR GALLERY</p>
        <h2 className={`${styles.gallery_title}`}>
          Discover the Beauty <br /> We’ve Seen
        </h2>
      </div>

      <div className={`${styles.gallery_grid}`}>
        {/* ✅ Map through images */}
        {galleryImages.map((img) => (
          <div
            key={img.id}
            className={`${styles.gallery_item} ${
              img.id === 1
                ? styles.img1
                : img.id === 2
                ? styles.img2
                : img.id === 3
                ? styles.img3
                : styles.img4
            }`}
          >
            <Image src={img.src} alt={img.alt} width={800} height={800} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
