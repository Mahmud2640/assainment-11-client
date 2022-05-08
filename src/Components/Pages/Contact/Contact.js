import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contactUs">
      <section className="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2>CONTACT</h2>
          </div>
          <div class="contact-form-wrapper">
            <form>
              <div class="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div class="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div class="form-item">
                <textarea class="" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button class="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
