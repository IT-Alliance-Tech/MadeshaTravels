"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "../../Styles/Footer.css";

// Decorative images
import leftImg from "../../assets/Images/back1.png";
import rightImg from "../../assets/Images/back2.png";
import Link from "next/link";

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
];

const footerLinks = [
  {
    title: "Company",
    links: [
      { name: "Services", id: "services" },
      { name: "Discover", id: "discover" },
      { name: "Gallery", id: "gallery" },
      { name: "Testimonials", id: "testimonials" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Why Us?", path: "/whyUs" },
      { name: "Partner with us", path: "/partner" },
      { name: "FAQ’s", path: "/faq" },
    ],
  },
];

const contactInfo = [
  "(+91) 9980942628",
  "madeshatourstravels@gmail.com",
  "#1713, Muneshwara Prasanna, Opposite to AD Clasia Apartment, AECS LAYOUT, A BLOCK, Singasandra, Bangalore, 560068",
];

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (name) => {
    setOpenSection(openSection === name ? null : name);
  };

  const handleScroll = (id) => {
    if (!id) return;
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // adjust according to your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer">
      {/* Left decorative image */}
      <div className="footer-img-left">
        <Image src={leftImg} alt="Left Decoration" />
      </div>

      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <div className="logo-area">
            <h2 className="footer-brand">Madesha Tour & Travels</h2>
          </div>
          <p className="footer-text">
            From breathtaking destinations to unforgettable experiences, we’re
            here to make every journey safe, simple, and truly memorable.
          </p>
          <div className="social-icons">
            {socialLinks.map((item, index) => (
              <a key={index} href={item.href}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div
          className={`footer-links company-links ${
            openSection === "company" ? "active" : ""
          }`}
        >
          <h4 onClick={() => toggleSection("company")}>Company</h4>
          <ul>
            {footerLinks[0].links.map((link, i) => (
              <li key={i}>
                <a onClick={() => handleScroll(link.id)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div
          className={`footer-links ${
            openSection === "contact" ? "active" : ""
          }`}
        >
          <h4 onClick={() => toggleSection("contact")}>Contact</h4>
          <ul>
            {footerLinks[1].links.map((link, i) => (
              <li key={i}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Meet Us */}
        <div
          className={`footer-contact ${openSection === "meet" ? "active" : ""}`}
        >
          <h4 onClick={() => toggleSection("meet")}>Meet Us</h4>
          {contactInfo.map((info, index) => (
            <p key={index}>{info}</p>
          ))}
        </div>
      </div>

      {/* Right decorative image */}
      <div className="footer-img-right">
        <Image src={rightImg} alt="Right Decoration" />
      </div>
    </footer>
  );
};

export default Footer;
