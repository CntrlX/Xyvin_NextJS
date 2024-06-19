'use client'
import React from 'react';
import { FaLaptopCode, FaDatabase, FaMobileAlt, FaCloud, FaServer, FaShieldAlt, FaProjectDiagram, FaPencilRuler, FaBug, FaTools, FaRocket, FaSyncAlt } from 'react-icons/fa';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaLaptopCode />,
    title: 'Web Development',
    description: 'Designing and developing responsive web applications.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Design',
    description: 'Creating efficient and scalable database solutions.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Building native and cross-platform mobile applications.',
  },
  {
    icon: <FaCloud />,
    title: 'Cloud Computing',
    description: 'Deploying and managing applications in cloud environments.',
  },
  {
    icon: <FaServer />,
    title: 'Server Management',
    description: 'Monitoring and maintaining server infrastructure.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Cybersecurity',
    description: 'Securing digital assets and protecting against threats.',
  },
  // Add more services as needed
];

const Services: React.FC = () => {
  return (
    <div className="servicesContainer">
      <h1>Our Services</h1>
      <div className="servicesList">
        {services.map((service, index) => (
          <div key={index} className="serviceCard">
            <div className="serviceIcon">{service.icon}</div>
            <div className="serviceInfo">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .servicesContainer {
          text-align: center;
          padding: 20px;
          background-color: #f0f4f8;
        }

        .servicesList {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .serviceCard {
          display: flex;
          align-items: center;
          background-color: #1e3a8a;
          color: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          max-width: 250px;
          width: 100%;
          transition: transform 0.3s, background-color 0.3s;
        }

        .serviceCard:hover {
          transform: translateY(-5px);
          background-color: #1e40af;
        }

        .serviceIcon {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 20px;
          font-size: 30px;
          flex: 0.4;
        }

        .serviceInfo {
          padding: 20px;
          flex: 0.6;
          text-align: left;
        }

        h1 {
          margin-bottom: 20px;
          color: #1e3a8a;
        }

        h2 {
          margin-top: 10px;
          margin-bottom: 10px;
          color: #fff;
        }

        p {
          color: #fff;
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
};

export default Services;
