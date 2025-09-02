"use client";
import React from "react";
import "../../Styles/GallerySection.css";

import img1 from "../../assets/Images/gallery1.png";
import img2 from "../../assets/Images/gallery2.png";
import img3 from "../../assets/Images/gallery3.png";
import img4 from "../../assets/Images/gallery4.png";

// ✅ Gallery data array
const galleryImages = [
  { id: 1, src: img1.src, alt: "First", className: "img1" },
  { id: 2, src: img2.src, alt: "Second", className: "img2" },
  { id: 3, src: img3.src, alt: "Third", className: "img3" },
  { id: 4, src: img4.src, alt: "Fourth", className: "img4" }
];

const GallerySection = () => {
  return (
    <section className="gallery">
      <div className="gallery-header">
        <p className="gallery-subtitle">OUR GALLERY</p>
        <h2 className="gallery-title">
          Discover the Beauty <br /> We’ve Seen
        </h2>
      </div>

      <div className="gallery-grid">
        {/* ✅ Map through images */}
        {galleryImages.map((img) => (
          <div key={img.id} className={`gallery-item ${img.className}`}>
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
