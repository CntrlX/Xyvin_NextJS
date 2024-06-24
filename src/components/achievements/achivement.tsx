'use client'

import React, { useState, useEffect } from 'react';

const AchievementComponent: React.FC = () => {
  const achievements = [
    { id: 1, title: 'Achievement 1', description: 'Description for Achievement 1', imageUrl: '/assets/img/project_successfull_1.jpg' },
    { id: 2, title: 'Achievement 2', description: 'Description for Achievement 2', imageUrl: '/assets/img/project_successfull_1.jpg' },
    { id: 3, title: 'Achievement 3', description: 'Description for Achievement 3', imageUrl: '/assets/img/project_successfull_1.jpg' },
    { id: 4, title: 'Achievement 4', description: 'Description for Achievement 4', imageUrl: '/assets/img/project_successfull_1.jpg' },
    { id: 5, title: 'Achievement 5', description: 'Description for Achievement 5', imageUrl: '/assets/img/project_successfull_1.jpg' },
    { id: 6, title: 'Achievement 6', description: 'Description for Achievement 6', imageUrl: '/assets/img/project_successfull_1.jpg' },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 3) % achievements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [achievements.length]);

  return (
    <div className="achievementWrapper">
      <h2 className="heading">Achievements</h2>
      <div className="achievementContainer">
        {achievements.slice(visibleIndex, visibleIndex + 3).map((achievement) => (
          <div key={achievement.id} className="achievementCard">
            <img src={achievement.imageUrl} alt={achievement.title} className="achievementImage" />
            <div className="achievementDetails">
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .achievementWrapper {
          text-align: center;
          padding: 20px;
          background-color:#01112F;
        }
        .heading {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #fff;
        }

        .achievementContainer {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-top: 20px;
          margin-bottom: 40px; 
          border-radius:20px;
        }

        .achievementCard {
        display:relative;
          width: 300px;
          // border: 1px solid #333;
          border-radius: 5px;
          overflow: hidden;
          background-color: #f9f9f9;
          transition: opacity 0.5s ease-in-out;
        }

        .achievementImage {
        display:absolute;
        top:0;
        left:50%;
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .achievementDetails {
          padding: 10px;
          border: 2px solid #000;
        }
      `}</style>
    </div>
  );
};

export default AchievementComponent;
