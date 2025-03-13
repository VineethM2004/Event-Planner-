import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer: "We offer event management, production, and logistics support for all types of events.",
    },
    {
      question: "How can I book your services?",
      answer: "You can book our services by filling out our contact form or calling us directly.",
    },
    {
      question: "Do you offer last-minute bookings?",
      answer: "Yes, we try our best to accommodate last-minute bookings based on availability.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="faq-section">
      <h2 className="title">Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-box" onClick={() => toggleFAQ(index)}>
            <div className="question">
              <h3>{faq.question}</h3>
              <span className="toggle-icon">{openIndex === index ? "-" : "+"}</span>
            </div>
            <p className={`answer ${openIndex === index ? "show" : ""}`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
