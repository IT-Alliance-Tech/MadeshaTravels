"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../assets/image/madeshalogo.svg"; 
import "../../styles/Header.css";


const navLinks = [
  { name: "Home", path: "/" },           // Home navigates to home page
  { name: "Services", id: "services" },  // Scrolls to section with id="services"
  { name: "Discover", id: "discover" },  // Scrolls to section with id="discover"
  { name: "Gallery", id: "gallery" },    // Scrolls to section with id="gallery"
  { name: "Testimonials", id: "testimonials" }, // Scrolls to section with id="testimonials"
];

const Header = () => {
  const pathname = usePathname();

  const handleScroll = (id) => {
    if (!id) return;

    // If we're not on the home page, navigate to home first
    if (pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // adjust according to your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="header">
      {/* Logo */}
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
                <Link 
                  href={link.path}
                  className={pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleScroll(link.id)}
                  className={`nav-btn ${pathname === '/' ? '' : 'inactive'}`}
                >
                  {link.name}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact Button */}
      <div className="contact-button">
        <Link 
          href="/contact" 
          className={`contact-btn ${pathname === '/contact' ? 'active' : ''}`}
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
