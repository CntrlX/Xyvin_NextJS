'use client'
import React from 'react';
import { FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaCloud, FaServer, FaShieldAlt, FaProjectDiagram, FaPencilRuler, FaBug, FaTools, FaRocket, FaSyncAlt, FaCogs, FaNetworkWired, FaSearch, FaPenNib, FaBusinessTime, FaLayerGroup, FaDesktop } from 'react-icons/fa';

const services = [
  "Web Development", "Mobile App Development", "Database Design", "API Development", "Cloud Computing",
  "Server Management", "Cybersecurity", "Project Management", "UI/UX Design", "Bug Fixing",
  "DevOps", "Performance Optimization", "Continuous Integration", "Automation", "Network Administration",
  "SEO Optimization", "Technical Writing", "Consulting", "Full Stack Development", "Desktop Application Development"
];

const Services: React.FC = () => {
  return (
    <div className="servicesContainer">
      <h1>Our Services</h1>
      <div className="servicesList">
        <div className="servicesColumn">
          {services.slice(0, 10).map((service, index) => (
            <div key={index} className="serviceItem">
              <ServiceIcon index={index} />
              <span>{service}</span>
            </div>
          ))}
        </div>
        <div className="servicesColumn">
          {services.slice(10).map((service, index) => (
            <div key={index} className="serviceItem">
              <ServiceIcon index={index + 10} />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .servicesContainer {
          text-align: center;
          padding: 20px;
          background-color: #f0f4f8;
        }

        .servicesList {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap:30px;
        }

        .servicesColumn {
          flex: 1;
          min-width: 200px;
        }

        .serviceItem {
          display: flex;
          align-items: center;
          margin: 10px 0;
          padding: 10px 20px;
          background-color: #1e3a8a;
          border-radius: 20px;
          color: #fff;
          transition: transform 0.3s, background-color 0.3s;
        }

        .serviceItem:hover {
          transform: translateY(-5px);
          background-color: #1e40af;
        }

        .icon {
          width: 30px;
          height: 30px;
          margin-right: 10px;
          gap:20px;
        }

        h1 {
          margin-bottom: 20px;
          color: #1e3a8a;
        }
      `}</style>
    </div>
  );
};

const ServiceIcon: React.FC<{ index: number }> = ({ index }) => {
  const icons = [
    FaCode, FaMobileAlt, FaDatabase, FaLaptopCode, FaCloud,
    FaServer, FaShieldAlt, FaProjectDiagram, FaPencilRuler, FaBug,
    FaTools, FaRocket, FaSyncAlt, FaCogs, FaNetworkWired,
    FaSearch, FaPenNib, FaBusinessTime, FaLayerGroup, FaDesktop
  ];
  const IconComponent = icons[index];
  return <IconComponent className="icon" />;
};

export default Services;
