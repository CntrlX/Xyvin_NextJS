'use client';

import React, { useState } from 'react';

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
      
          <button type="submit" className="submitButton">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .outerContainer {
          background-color: #01112F;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh; /* Ensure the outer container takes the full viewport height */
        }

        .contactFormContainer {
          background-color: #333;
          color: #fff;
          padding: 50px;
          max-width: 860px;
          width: 100%;
          border-radius: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          transition: padding 0.3s ease;
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
          padding: 10px;
          border-radius: 0;
          border: none;
          border-bottom: 2px solid #ccc; /* Thin line style */
          background-color: transparent; /* Transparent background */
          color: #fff;
        }

        input:focus,
        textarea:focus {
          outline: none;
          border-color: #FEA3AC; /* Change border color on focus */
        }

        textarea {
          resize: none; /* Prevent resizing of textarea */
          min-height: 40px; /* Set a minimum height for textarea */
        }

        .submitButton {
          border: none;
          background-color: transparent;
          font-size: 1.5rem;
          color: #fff;
          cursor: pointer;
          text-decoration: underline;
          margin-left: -4px; /* Adjust margin to align with form fields */
          transition: color 0.5s ease, opacity 0.5s ease; /* Add smooth and soft transition */
        }

        .submitButton:hover {
          color: #8BF7B7;
          opacity: 0.7; /* Reduce opacity on hover */
        }

        p {
          margin-bottom: 10px;
        }

        h2 {
          color: #fff;
        }

        @media (max-width: 600px) {
          .contactFormContainer {
            padding: 20px;
          }

          input,
          textarea {
            padding: 5px;
          }

          .submitButton {
            font-size: 1.2rem;
          }
        }

        @media (min-width: 1200px) {
          .contactFormContainer {
            padding: 70px;
          }

          .submitButton {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactForm;
