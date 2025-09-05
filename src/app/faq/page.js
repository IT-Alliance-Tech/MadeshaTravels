"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/aboutus/FaqSection.module.css";
import palaceImg from "../../assets/image/faq.png";
import DownArrow from "@/assets/icons/downArrow";

const faqs = [
  {
    question: "What kind of vehicles do you provide?",
    answer:
      "We provide cars, SUVs, tempo travellers, and buses to suit different travel needs.",
  },
  {
    question: "Can I book vehicles for group travel?",
    answer:
      "Yes, our tempo travellers and buses are perfect for large groups and events.",
  },
  {
    question: "How do I book a vehicle?",
    answer:
      "You can easily book through our website or by contacting our support team.",
  },
  {
    question: "Are your drivers professional?",
    answer:
      "Absolutely, all our drivers are well-trained, experienced, and professional.",
  },
  {
    question: "Do you provide one-way or round-trip services?",
    answer: "Yes, we offer both one-way and round-trip travel options.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      {/* Heading outside flex row */}
      <div className={styles.faqHeader}>
        <p className={styles.faqSmallHeading}>FAQ'S</p>
        <h2 className={styles.faqHeading}>Got Questions? We’ve Got Answers</h2>
      </div>

      <div className={styles.faqContainer}>
        {/* Left: Image */}
        <Image
          src={palaceImg}
          alt="Travel Palace"
          className={styles.imageBox}
        />

        {/* Right: FAQ List */}
        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                activeIndex === index ? styles.active : ""
              }`}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <DownArrow
                  color={activeIndex === index ? "#FFFFFF" : "#222222"}
                />
              </button>

              {activeIndex === index && (
                <div className={styles.answerWrapper}>
                  <div className={styles.divider}></div>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
