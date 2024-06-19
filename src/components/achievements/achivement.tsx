
'use client'

import React from 'react';

const achievements = [
    {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
   {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
      {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
   {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
      {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
   {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
];

const AchievementComponent: React.FC = () => {
  return (
    <div className="achievementContainer">
      <h2>Achievements</h2>
      <div className="achievementList">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievementBox">
            <div className="iconBox">
              <img
                src={achievement.image}
                alt={`Image for ${achievement.title}`}
                className="img-fluid achievement"
              />
            </div>
            <div className="description text-center">
              <h4 className="achievementCaption">{achievement.title}</h4>
              <p className="textSmall fontLight">{achievement.details}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .achievementContainer {
          background-color: #000;
          padding: 50px 20px;
          color: #fff;
          text-align: center;
          overflow: hidden; /* Hide overflowing content */
        }

        h2 {
          margin-bottom: 40px;
          font-size: 2em;
          color: #fff;
        }

        .achievementList {
          display: flex;
          gap: 10px; /* Add gap between boxes */
          overflow: hidden; /* Hide overflowing content */
          animation: slideRight 30s linear infinite; /* Animation for sliding */
        }

        .achievementBox {
          border: 1px solid #817b6f;
          background-color: #1e1e1e;
          color: #fff;
          width: 300px;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
          border-radius: 10px;
          transition: transform 0.5s ease; /* Smooth transition for hover effect */
        }

        .achievementBox:hover {
          transform: scale(1.05); /* Scale up on hover */
        }

        .iconBox {
          width: 100%;
          overflow: hidden;
          height: 100px;
          margin-bottom: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .iconBox img {
          max-height: 100px;
          max-width: 100px;
        }

        .description {
          border-top: 1px solid #fff;
          padding-top: 20px;
          margin-top: 20px;
        }

        .achievementCaption {
          margin: 0 0 10px 0;
          font-size: 1.2em;
        }

        .textSmall {
          margin: 0;
          font-size: 1em;
          font-weight: 300;
        }

        @keyframes slideRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% - 10px)); } /* Account for gap between boxes */
        }
      `}</style>
    </div>
  );
};

export default AchievementComponent;
