"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../assets/Images/logo.png"; // adjust path
import "../../Styles/Header.css";

// 🔹 Navigation Links Data
const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Discover", path: "/discover" },
  { name: "Gallery", path: "/gallery" },
  { name: "Testimonials", path: "/testimonials" },
];

const Header = () => {
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
        {/* <p className="logo-sub">TOURS AND TRAVELS</p> */}
      </div>

      {/* Navigation */}
      <nav className="nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.name}</Link>
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
