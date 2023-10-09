import React from 'react';
import '../assets/css/Footer.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, LinkedinIcon } from 'react-share';
const Footer = () => {
    const navigate = useNavigate();

    const shareUrl = 'https://your-website-url.com'; // Replace with your website URL
  const title = 'Check out this amazing website!';

const handlePrivacyPolicyClick = () => {
    navigate('/PrivacyPolicy'); // Navigate to the Privacy Policy page
  };

  // Function to handle the "Terms and Conditions" link click
  const handleTermsClick = () => {
    navigate('/Terms'); // Navigate to the Terms and Conditions page
  };
  const handleFAQClick = () => {
    navigate('/FAQ'); // Navigate to the Terms and Conditions page
  };
  return (
    <>
    {/* Footer */}
    <footer className="footer">
    &emsp;&emsp;&emsp;&emsp; <Link to="/privacy" className="footer-link">Privacy Policy</Link>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
<Link to="/terms" className="footer-link">Terms And Conditions</Link>
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &copy; {new Date().getFullYear()} EVZone. All Rights Reserved
      <div className="social-share-buttons">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        
        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        
        <LinkedinShareButton url={shareUrl} title={title}>
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
        
      </div>
      </footer>
    </>
    );
};

export default Footer;