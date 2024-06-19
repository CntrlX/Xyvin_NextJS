'use client'


// import React from 'react';
// import { FaLaptopCode, FaMobileAlt, FaDatabase, FaCloud, FaLock, FaCogs, FaDesktop, FaNetworkWired, FaRobot, FaShoppingCart, FaSearch, FaChartLine } from 'react-icons/fa';

// const services = [
//   { icon: <FaLaptopCode />, title: "Web Development", description: "Custom web development services." },
//   { icon: <FaMobileAlt />, title: "Mobile Development", description: "Mobile app development for Android and iOS." },
//   { icon: <FaDatabase />, title: "Database Management", description: "Database design and management services." },
//   { icon: <FaCloud />, title: "Cloud Services", description: "Cloud computing and storage solutions." },
//   { icon: <FaLock />, title: "Cybersecurity", description: "Security assessments and solutions." },
//   { icon: <FaCogs />, title: "DevOps", description: "Continuous integration and delivery." },
//   { icon: <FaDesktop />, title: "UI/UX Design", description: "User interface and experience design." },
//   { icon: <FaNetworkWired />, title: "Network Management", description: "Network setup and maintenance." },
//   { icon: <FaRobot />, title: "AI Development", description: "Artificial intelligence and machine learning solutions." },
//   { icon: <FaShoppingCart />, title: "E-commerce", description: "Online store development and management." },
//   { icon: <FaSearch />, title: "SEO Services", description: "Search engine optimization services." },
//   { icon: <FaChartLine />, title: "Data Analytics", description: "Data analysis and business intelligence." },
// ];

// const Services: React.FC = () => {
//   return (
//     <div className="servicesContainer">
//       <h2>Our Services</h2>
//       <div className="servicesGrid">
//         {services.map((service, index) => (
//           <div className="col-md-6 col-lg-4 mb-60px" key={index}>
//             <a href="#">
//               <div className="service_box wow fadeInUp md-mb50" data-wow-delay=".25s">
//                 <div className="service_icon line-border">{service.icon}</div>
//                 <div className="service_info">
//                   <h4>{service.title}</h4>
//                   <p>{service.description}</p>
//                 </div>
//               </div>
//             </a>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .servicesContainer {
//           padding: 20px;
//           text-align: center;
//           background-color: #f5f5f5;
//         }

//         .servicesGrid {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .col-md-6 {
//           width: 100%;
//           max-width: 50%;
//           box-sizing: border-box;
//           padding: 15px;
//         }

//         .col-lg-4 {
//           width: 100%;
//           max-width: 33.33%;
//           box-sizing: border-box;
//           padding: 15px;
//         }

//         .mb-60px {
//           margin-bottom: 60px;
//         }

//         .service_box {
//           background-color: #ADD8E6;
//           padding: 20px;
//           border-radius: 20px;
//           color: #fff;
//           box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//           transition: transform 0.3s, box-shadow 0.3s;
//         }

//         .service_box:hover {
//           transform: translateY(-10px);
//           box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//         }

//         .service_icon {
//           font-size: 40px;
//           margin-bottom: 20px;
//         }

//         .service_info h4 {
//           font-size: 20px;
//           margin-bottom: 10px;
//         }

//         .service_info p {
//           font-size: 16px;
//         }

//         @media (max-width: 768px) {
//           .col-md-6 {
//             max-width: 100%;
//           }

//           .col-lg-4 {
//             max-width: 100%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Services;


import React from 'react';
import { FaCode, FaMobileAlt, FaDatabase, FaCloud, FaLock, FaChartLine, FaBullhorn, FaSearch, FaShoppingCart, FaUsers, FaTools, FaEnvelope } from 'react-icons/fa';

const services = [
  { icon: <FaCode />, title: "Web Development", description: "Creating responsive and dynamic websites." },
  { icon: <FaMobileAlt />, title: "Mobile Development", description: "Developing mobile applications for Android and iOS." },
  { icon: <FaDatabase />, title: "Database Management", description: "Designing and managing database systems." },
  { icon: <FaCloud />, title: "Cloud Services", description: "Offering scalable cloud solutions." },
  { icon: <FaLock />, title: "Cybersecurity", description: "Ensuring the security of digital assets." },
  { icon: <FaChartLine />, title: "Data Analytics", description: "Providing data insights and analytics." },
  { icon: <FaBullhorn />, title: "Digital Marketing", description: "Promoting brands through digital channels." },
  { icon: <FaSearch />, title: "SEO Services", description: "Improving website visibility on search engines." },
  { icon: <FaShoppingCart />, title: "E-commerce Solutions", description: "Developing online shopping platforms." },
  { icon: <FaUsers />, title: "Social Media Management", description: "Managing social media profiles and content." },
  { icon: <FaTools />, title: "IT Support", description: "Providing technical support and solutions." },
  { icon: <FaEnvelope />, title: "Email Marketing", description: "Creating and managing email marketing campaigns." },
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
          background-color: #000;
          padding: 50px 20px;
          text-align: center;
        }

        h2 {
          color: #fff;
          margin-bottom: 30px;
          font-size: 1.5em;
        }

        .serviceContainer {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
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
