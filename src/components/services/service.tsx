'use client'


import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaLock, FaCogs, FaDesktop, FaNetworkWired, FaRobot, FaShoppingCart, FaSearch, FaChartLine } from 'react-icons/fa';

const services = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Custom web development services." },
  { icon: <FaMobileAlt />, title: "Mobile Development", description: "Mobile app development for Android and iOS." },
  { icon: <FaDatabase />, title: "Database Management", description: "Database design and management services." },
  { icon: <FaCloud />, title: "Cloud Services", description: "Cloud computing and storage solutions." },
  { icon: <FaLock />, title: "Cybersecurity", description: "Security assessments and solutions." },
  { icon: <FaCogs />, title: "DevOps", description: "Continuous integration and delivery." },
  { icon: <FaDesktop />, title: "UI/UX Design", description: "User interface and experience design." },
  { icon: <FaNetworkWired />, title: "Network Management", description: "Network setup and maintenance." },
  { icon: <FaRobot />, title: "AI Development", description: "Artificial intelligence and machine learning solutions." },
  { icon: <FaShoppingCart />, title: "E-commerce", description: "Online store development and management." },
  { icon: <FaSearch />, title: "SEO Services", description: "Search engine optimization services." },
  { icon: <FaChartLine />, title: "Data Analytics", description: "Data analysis and business intelligence." },
];

const Services: React.FC = () => {
  return (
    <div className="servicesContainer">
      <h2>Our Services</h2>
      <div className="servicesGrid">
        {services.map((service, index) => (
          <div className="col-md-6 col-lg-4 mb-60px" key={index}>
            <a href="#">
              <div className="service_box wow fadeInUp md-mb50" data-wow-delay=".25s">
                <div className="service_icon line-border">{service.icon}</div>
                <div className="service_info">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .servicesContainer {
          padding: 20px;
          text-align: center;
          background-color: #f5f5f5;
        }

        .servicesGrid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .col-md-6 {
          width: 100%;
          max-width: 50%;
          box-sizing: border-box;
          padding: 15px;
        }

        .col-lg-4 {
          width: 100%;
          max-width: 33.33%;
          box-sizing: border-box;
          padding: 15px;
        }

        .mb-60px {
          margin-bottom: 60px;
        }

        .service_box {
          background-color: #ADD8E6;
          padding: 20px;
          border-radius: 20px;
          color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .service_box:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .service_icon {
          font-size: 40px;
          margin-bottom: 20px;
        }

        .service_info h4 {
          font-size: 20px;
          margin-bottom: 10px;
        }

        .service_info p {
          font-size: 16px;
        }

        @media (max-width: 768px) {
          .col-md-6 {
            max-width: 100%;
          }

          .col-lg-4 {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
