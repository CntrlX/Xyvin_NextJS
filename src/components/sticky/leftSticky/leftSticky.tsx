import React from 'react';
import styles from './leftSticky.module.css'; // Create a CSS module for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import the Font Awesome CSS

const StickyComponent = () => {
  
return (
    <div className={styles.fixedSocilaicons}>
      <a href="https://www.facebook.com/webcastlemedia" target="_blank">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.behance.net/WebCastle" target="_blank" className="lazyloaded">
        <i className="fab fa-behance"></i>
      </a>
      <a href="https://www.linkedin.com/company/webcastle" target="_blank">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default StickyComponent;

