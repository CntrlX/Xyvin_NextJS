'use client'

import React from 'react';
import { FaCode, FaUsers , FaMobileAlt,FaLaptopCode , FaChartLine,FaSearch, FaShoppingCart,FaTools } from 'react-icons/fa';

const services = [
  { icon: <FaMobileAlt />, title: "iOS & Android App Solutions", description: "seamless experiences on Apple and Android devices." },
  { icon: <FaShoppingCart />, title: "Ecommerce Solutions", description: "Sales boosting ecommerce development services." },
  { icon: <FaSearch />, title: "Search Engine Optimisation", description: "Experienced SEO services providing team." },
  { icon: <FaCode />, title: "Web Development", description: "User centered web development services." },
  { icon: <FaLaptopCode  />, title: "ERP Development", description: "Strategic ERP development services." },
  { icon: <FaUsers  />, title: "CRM", description: "CRM services designed to elevate your customer relationships and drive business growth." },
  { icon: <FaTools />, title: "API Integration Services", description: "Top-notch API integration service." },
];

const ServiceComponent: React.FC = () => {
  return (
    <div className="serviceMainContainer">
      <h2>Services</h2>
      <div className="serviceContainer">
        {services.map((service, index) => (
          <div key={index} className="serviceBox">
            <div className="serviceIcon">{service.icon}</div>
            <div className="serviceContent">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .serviceMainContainer {
          background-color: #01112F;;
          padding: 140px 20px 180px 20px;
          text-align: center;
        }

        h2 {
          color: #fff;
          margin-bottom: 30px;
          font-size: 55px;
          font-weight: 500;
          text-align: center;
          padding:  20px;
        }

        .serviceContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 50px;
        }

        .serviceBox {
          display: flex;
          align-items: center;
          background-color: #3333;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 350px;
          height: 150px;
          box-sizing: border-box;
          color: #fff;
          transition: transform 0.3s, background-color 0.3s;
        }

        .serviceBox:hover {
          transform: translateY(-5px);
          background-color: #2547a3;
        }

        .serviceIcon {
          font-size: 40px;
          color: #fff;
          margin-right: 20px;
          padding:20px;
          border:1px solid #817b6f;
          border-radius:10px;
        }

        .serviceContent {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
        }

        .serviceContent h4 {
          color: #fff;
          margin: 0 0 5px 0;
          font-size: 1.1em;
        }

        .serviceContent p {
          color: #ccc;
          margin: 0;
          font-size: 0.9em;
        }

        @media (min-width: 768px) {
          .serviceBox {
            flex: 1 1 calc(50% - 40px);
            max-width: calc(50% - 40px);
          }
        }

        @media (min-width: 1024px) {
          .serviceBox {
            flex: 1 1 calc(33.33% - 40px);
            max-width: calc(33.33% - 40px);
          }
        }
      `}</style>
    </div>
  );
};

export default ServiceComponent;