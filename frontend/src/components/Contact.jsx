import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("Send button clicked!"); // Debugging
  
    if (!name || !email || !subject || !message) {
      toast.error("All fields are required!");
      return;
    }
  
    try {
      const res = await axios.post(
        "https://event-planner-cls3.onrender.com/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message || "Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      console.error(error); // Debugging
      toast.error(error.response?.data?.message || "Error sending message");
  }
};
  

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Our Location</h4>
            <p>7th Floor, Nexus Tower, MG Road, Bengaluru, Karnataka 560001, India</p>
          </div>
          <div className="item">
            <h4>Contact Number</h4>
            <p>+91 98765 43210</p>
          </div>
          <div className="item">
            <h4>Email Us</h4>
            <p>support@nexusevents.in</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9549916966193!2d77.60691277484145!3d12.974730587340916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1687393dbc13%3A0x8b70c8e652b73d9e!2sMahatma%20Gandhi%20Rd%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1740899666233!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
