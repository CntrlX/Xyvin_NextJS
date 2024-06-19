'use client'

import React from 'react';

const achievements = [
  {
    image: '/achievement1.jpg',
    title: 'Achievement 1',
    description: 'Description of achievement 1. This is an example of what the description might look like.',
  },
  {
    image: '/achievement2.jpg',
    title: 'Achievement 2',
    description: 'Description of achievement 2. This is an example of what the description might look like.',
  },
  {
    image: '/achievement3.jpg',
    title: 'Achievement 3',
    description: 'Description of achievement 3. This is an example of what the description might look like.',
  },
];

const Achievements: React.FC = () => {
  return (
    <div className="achievementsContainer">
      <h1>Our Achievements</h1>
      <div className="achievementsList">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievementCard">
            <img src={achievement.image} alt={achievement.title} className="achievementImage" />
            <h2>{achievement.title}</h2>
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .achievementsContainer {
          text-align: center;
          padding: 20px;
          background-color: #f0f4f8;
        }

        .achievementsList {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 20px; /* Space between cards */
        }

        .achievementCard {
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          max-width: 200px;
          text-align: left;
        }

        .achievementImage {
          width: 100%;
          border-radius: 10px;
        }

        h1 {
          margin-bottom: 20px;
          color: #1e3a8a;
        }

        h2 {
          margin-top: 10px;
          margin-bottom: 10px;
          color: #1e3a8a;
        }

        p {
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Achievements;
