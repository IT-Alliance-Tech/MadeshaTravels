"use client";
import React from "react";
import { MapPin, Calendar, CalendarCheck2 } from "lucide-react";

// ✅ Import image
import beachImg from "../../assets/Images/Background.jpg";

import "../../Styles/FeatureSection.css";
import Image from "next/image";

const features = [
  {
    id: 1,
    icon: <MapPin size={28} />,
    color: "orange",
    title: "Smart Destinations",
    desc: "Discover locations curated just for you with our intelligent suggestions."
  },
  {
    id: 2,
    icon: <Calendar size={28} />,
    color: "yellow",
    title: "Schedule your trip",
    desc: "It has roots in a piece of classical."
  },
  {
    id: 3,
    icon: <CalendarCheck2 size={28} />,
    color: "pink",
    title: "Easy Planner",
    desc: "Schedule your trips with a simple calendar that fits your lifestyle."
  }
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      {/* Left Column */}
      <div className="feature-left">
        <p className="features-subtitle">KEY FEATURES</p>
        <h2 className="features-title">
          We offer <span>best services</span>
        </h2>
        <p className="features-desc">
          From seamless bookings and comfortable stays to safe travel and
          personalized guidance, we ensure every part of your journey is handled
          with care and excellence.
        </p>

        {/* ✅ Mapping feature cards */}
        {features.map((item) => (
          <div key={item.id} className="feature-card">
            <div className={`icon ${item.color}`}>{item.icon}</div>
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Column */}
      <div className="feature-right">
        <Image src={beachImg.src} alt="Beach" width={100} height={100} />
      </div>
    </section>
  );
};

export default FeatureSection;
