"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/aboutus/Contact.module.css";

// Icons
import AddressIcon from "../../assets/icons/location.png";
import PhoneIcon from "../../assets/icons/call.png";
import EmailIcon from "../../assets/icons/Mail.png";
// Background map
import BgMap from "../../assets/icons/map.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Replace with your Google Apps Script Web App URL
  const SHEET_MACRO_URL = "https://script.google.com/macros/s/XXXXX/exec";

  // Replace with your Google Sheet URL
  const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send data to Google Apps Script
      await fetch(SHEET_MACRO_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Open Google Sheet in a new tab
      window.open(GOOGLE_SHEET_URL, "_blank");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Data submitted successfully!");
    } catch (err) {
      console.error("Error submitting data:", err);
      alert("Failed to submit data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.contactSection}>
      {/* Background Map */}
      <div className={styles.bgWrapper}>
        <Image src={BgMap} alt="Background map" className={styles.bgImage} />
      </div>

      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.left}>
          <h5 className={styles.subTitle}>GET IN TOUCH WITH US</h5>
          <h2 className={styles.title}>
            For More Information About Our <br />
            Services. Please Feel Free To Drop <br />
            Us An Email. Do Not Hesitate!
          </h2>

          <div className={styles.infoBox}>
            {/* Address */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Image src={AddressIcon} alt="Address" width={22} height={28} />
              </div>
              <p>
                #711, Muneswhara Prasanna, <br />
                Opposite to AD Classic Apartment, <br />
                AECS Layout A-Block, <br />
                Singasandra, Bangalore, 560068
              </p>
            </div>

            {/* Phone */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Image src={PhoneIcon} alt="Phone" width={22} height={22} />
              </div>
              <p>
                Mobile 1: (+91) 99809 42628 <br />
                Mobile 2: (+91) 96328 39345
              </p>
            </div>

            {/* Email */}
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Image src={EmailIcon} alt="Email" width={23} height={23} />
              </div>
              <p>modetraboutourstravels@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className={styles.right}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Abc"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />

            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="This is optional"
              value={formData.phone}
              onChange={handleChange}
              disabled={loading}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Hi I’d like to ask about"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            ></textarea>

            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
