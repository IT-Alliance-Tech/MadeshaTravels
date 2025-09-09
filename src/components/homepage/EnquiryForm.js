"use client";

import React, { useState } from "react";
import styles from "../../styles/homepage/EnquiryForm.module.css";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    interested: "",
    email: "",
    phone: "",
  });
const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("phone", formData.phone);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("interested", formData.interested);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxJpcSgmsC3pfFKiMlGVSJR8XUCT9osXF7i98Q3Xn03nfUC9Yp2UjYABj7fmgsm6VA/exec",
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    alert("Enquiry submitted successfully!");
  } catch (error) {
    console.error("Fetch error:", error);
    alert("Something went wrong!");
  }
};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className={styles.enquirySection}>
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>ENQUIRY</h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={(e) => handleChange(e)}
            className={styles.input}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={(e) => handleChange(e)}
            className={styles.input}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
            className={styles.input}
          />
          <textarea
            placeholder={`Hello, I am interested in booking a\nhotel....`}
            className={styles.textarea}
            onChange={(e) => handleChange(e)}
            name="interested"
          ></textarea>
          <p className={styles.terms}>
            {/* By submitting this form I agree to <a href="#">Terms of Use</a> */}
          </p>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>

      {/* ✅ Removed background/box — now only text + smoky effect from CSS */}
      <div className={styles.textContent}>
        <h5 className={styles.smallHeading} style={{ textAlign: "right" }}>
          ENQUIRE NOW
        </h5>
        <h2 className={styles.mainHeading} style={{ textAlign: "right" }}>
          <span>Register now to get</span>
          <br />
          <span style={{ paddingLeft: "3.2ch" }}>started with ease.</span>
        </h2>
      </div>
    </section>
  );
}
