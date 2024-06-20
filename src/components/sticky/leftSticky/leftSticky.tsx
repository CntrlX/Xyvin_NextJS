import React from 'react';
import styles from './leftSticky.module.css'; // Create a CSS module for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the Font Awesome CSS

const StickyComponent = () => {
  
return (
    <div className={styles.fixedSocilaicons}>
      <a href="https://www.facebook.com/profile.php?id=61559679521641" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <br />
      <a href="https://www.instagram.com/xyvintech/" target="_blank" className="lazyloaded">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/company/xyvin-technologies-pvt-ltd/" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default StickyComponent;

