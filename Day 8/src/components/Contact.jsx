import React from "react";
import '../assets/css/Contact.css'; // Import your CSS file for styling

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide">
        <img src="contact1.jpg"></img>
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" method="POST">
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
