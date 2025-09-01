"use client";

import React from "react";
import styles from "../../styles/homepage/EnquiryForm.module.css";

export default function EnquiryForm() {
  return (
    <section className={styles.enquirySection}>
      <div className={styles.formCard}>
        <h3 className={styles.formTitle}>ENQUIRY</h3>
        <form className={styles.form}>
          <input type="text" placeholder="Name" className={styles.input} />
          <input type="text" placeholder="Phone" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <textarea
            placeholder="Hello, I am interested in booking a hotel..."
            className={styles.textarea}
          ></textarea>
          <p className={styles.terms}>
            By submitting this form I agree to <a href="#">Terms of Use</a>
          </p>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </form>
      </div>

      <div className={styles.textContent}>
        <h5 className={styles.smallHeading}>ENQUIRE NOW</h5>
        <h2 className={styles.mainHeading}>
          Register now to get <br /> started with ease.
        </h2>
      </div>
    </section>
  );
}
