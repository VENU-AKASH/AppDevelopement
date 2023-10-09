// PrivacyPolicy.js
import React from 'react';
import '../assets/css/Privacy.css'
function PrivacyPolicy() {
  return (
    <div className='div1'>
      <h1>Privacy Policy</h1>

      <p>Effective Date: UPDATED FEBRUARY 3, 2022</p>

      <h2>Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>Personal Information: [List the types of personal information you collect, e.g., name, email address, etc.]</li>
        <li>Non-Personal Information: [List the types of non-personal information you collect, e.g., browser type, IP address, etc.]</li>
      </ul>

      <h2>How We Use Information</h2>
      <p>We may use collected information for the following purposes:</p>
      <ul>
        <li>Provide, maintain, and improve our services.</li>
        <li>Respond to customer service requests and support needs.</li>
        <li>Send periodic emails, including updates and promotions.</li>
      </ul>

      <h2>Disclosure of Information</h2>
      <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide you with advance notice.</p>

      <h2>Security</h2>
      <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.</p>

      <h2>Changes to This Privacy Policy</h2>
      <p>We may update this privacy policy from time to time. You should check this page occasionally to ensure you are aware of any changes.</p>

      <h2>Contact Information</h2>
      <p>If you have questions regarding this privacy policy, you may contact us at 987654321.</p>

      {/* Example image */}
      <img
        src="/path-to-your-image.png"
        alt="Privacy Policy Illustration"
        style={{ maxWidth: '100%', marginTop: '20px' }}
      />
    </div>
  );
}

export default PrivacyPolicy;
