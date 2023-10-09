// TermsAndConditions.js
import React from 'react';
import '../assets/css/Terms.css' // Import the CSS file for styling

function Terms() {
  return (
    <div className="terms-container">
      <h1 className="terms-heading">Terms & Conditions</h1>

      <section className="terms-section">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By using this website, you agree to comply with and be bound by these terms and conditions.
        </p>
      </section>

      <section className="terms-section">
        <h2>2. Use of the Website</h2>
        <p>
          You may use this website for lawful purposes only. You must not use it in any way that violates
          applicable laws and regulations.
        </p>
      </section>

      <section className="terms-section">
        <h2>3. Intellectual Property</h2>
        <p>
          All content on this website is the intellectual property of XYZ Company and is protected by
          copyright laws.
        </p>
      </section>

      <section className="terms-section">
        <h2>4. Privacy</h2>
        <p>
          Your use of this website is also governed by our Privacy Policy. Please review it to understand
          how we collect, use, and protect your personal information.
        </p>
      </section>

      <section className="terms-section">
        <h2>5. Changes to Terms</h2>
        <p>
          We reserve the right to change these terms and conditions at any time. You should check this
          page regularly for updates.
        </p>
      </section>

      <section className="terms-section">
        <h2>6. Contact Us</h2>
        <p>
          If you have any questions or concerns about these terms and conditions, please contact us at
          [Contact Email].
        </p>
      </section>
    </div>
  );
}

export default Terms;
