"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/image/madeshalogo.svg"; // adjust path
import "../../Styles/Header.css";

// 🔹 Navigation Links Data
const navLinks = [
  { name: "Home", path: "/" },           // Home navigates to home page
  { name: "Services", id: "services" },  // Scrolls to section with id="services"
  { name: "Discover", id: "discover" },  // Scrolls to section with id="discover"
  { name: "Gallery", id: "gallery" },    // Scrolls to section with id="gallery"
  { name: "Testimonials", id: "testimonials" }, // Scrolls to section with id="testimonials"
];

const Header = () => {
  // Scroll handler for sections
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
    <header className="header">
      {/* Logo Section */}
      <div className="logo">
        <Link href="/">
          <Image
            src={Logo}
            alt="Madesha Logo"
            width={140}
            height={40}
            priority
            className="cursor-pointer"
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              {link.path ? (
                <Link href={link.path}>{link.name}</Link>
              ) : (
                <button
                  onClick={() => handleScroll(link.id)}
                  className="nav-btn"
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Us Button */}
      <div className="contact-button">
        <Link href="/contact">
          <button className="contact-btn">Contact Us</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
