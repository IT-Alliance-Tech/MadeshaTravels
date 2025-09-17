"use client";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// ✅ Import images
import test1 from "../../assets/Images/test2.png";
import test2 from "../../assets/Images/test1.png";
import test3 from "../../assets/Images/test.png";
import test4 from "../../assets/Images/5.png";
// ✅ Import CSS
import "../../Styles/Testimonial.css";

const testimonials = [
  {
    img: test1,
    name: "Smitha",
    role: "Travel Enthusiast",
    review:
      'Our Kerala backwaters trip was absolutely breathtaking. The houseboat stay was so peaceful, and everything was perfectly arranged by Madesha Tour and Travels.',
  },
  {
    img: test2,
    name: "Rahul",
    role: "Photographer",
    review:
      'Thanks to Madesha Tour and Travels, we finally visited Kashmir! The snow in Gulmarg and the hospitality were unforgettable. A truly hassle-free trip.',
  },
  {
    img: test3,
    name: "Anita",
    role: "Designer",
    review:
      'Our trip to Himachal Pradesh was a dream come true. Trekking in Manali and camping in Kasol were highlights. Everything was well managed by Madesha Tour and Travels',
  },
  {
    img: test4,
    name: "Chaya",
    role: "Dancer",
    review:
      'We went to Andaman for our anniversary, and the beach resort was amazing. Scuba diving was once-in-a-lifetime! A big thank you to Madesha Tour and Travels for the smooth planning.',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // ✅ Auto-slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <h4 className="subtitle">TESTIMONIALS</h4>
      <h2 className="title">Trust our clients</h2>

      <div className="testimonial-content fade">
        <img
          src={testimonials[current].img.src}
          alt={testimonials[current].name}
          className="testimonial-img"
        />

        <h3 className="name">
          {testimonials[current].name}{" "}
          <span className="role">/ {testimonials[current].role}</span>
        </h3>

        <div className="stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} color="#fbbf24" />
          ))}
        </div>

        <p className="review">“{testimonials[current].review}”</p>

        {/* Arrows */}
        <button className="arrow left" onClick={prevTestimonial}>
          ←
        </button>
        <button className="arrow right" onClick={nextTestimonial}>
          →
        </button>

        {/* Dots */}
        <div className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}
