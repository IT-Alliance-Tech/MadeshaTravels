"use client";
import React from "react";
import "../../styles/GallerySection.css";

import img1 from "../../assets/image/gallery1.png";
import img2 from "../../assets/image/g1.png";
import img3 from "../../assets/image/gallery3.png";
import img4 from "../../assets/image/bus2.png";
import Image from "next/image";

// ✅ Gallery data array
const galleryImages = [
  { id: 1, src: img1.src, alt: "First", className: "img1" },
  { id: 2, src: img2.src, alt: "Second", className: "img2" },
  { id: 3, src: img3.src, alt: "Third", className: "img3" },
  { id: 4, src: img4.src, alt: "Fourth", className: "img4" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="gallery">
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
            <Image src={img.src} alt={img.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
