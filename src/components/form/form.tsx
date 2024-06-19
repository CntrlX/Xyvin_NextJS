'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form fields
    setFormData({
      firstName: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  return (
    <div className="outerContainer">
      <div className="contactFormContainer">
        <p>Locate Us</p>
        <h2>Let's Talk</h2>
        <form onSubmit={handleSubmit} className="contactForm">
          <div className="formGroup">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <div className="recaptcha">
            {/* Replace 'your-site-key' with your actual reCAPTCHA site key */}
            <ReCAPTCHA sitekey="your-site-key" />
          </div>
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .outerContainer {
          background-color: #000;
          padding: 20px;
          display: flex;
          justify-content: center;
        }

        .contactFormContainer {
          background-color: #333;
          color: #fff;
          padding: 50px;
          max-width: 750px;
          border-radius: 20px;
        }

        .contactForm {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .formGroup {
          margin-bottom: 20px;
          width: 100%;
        }

        label {
          margin-bottom: 5px;
          display: block;
        }

        input,
        textarea {
          width: 100%;
          padding: 2px;
          border-radius: 0;
          border: none;
          border-bottom: 2px solid #ccc; /* Thin line style */
          background-color: transparent; /* Transparent background */
          color: #fff;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #1e3a8a; /* Change border color on focus */
        }

        textarea {
          resize: none; /* Prevent resizing of textarea */
          min-height: 50px; /* Set a minimum height for textarea */
        }

        .recaptcha {
          margin-bottom: 20px;
          transform: scale(0.85); /* Scale down the reCAPTCHA widget */
          transform-origin: 0 0; /* Adjust the transform origin */
        }

        .submitButton {
          border: none;
          background-color: transparent;
          color: #fff;
          cursor: pointer;
          text-decoration: underline;
          margin-left: -4px; /* Adjust margin to align with form fields */
        }

        .submitButton:hover {
          color: #1e3a8a;
        }

        p {
          margin-bottom: 10px;
        }

        h2 {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
