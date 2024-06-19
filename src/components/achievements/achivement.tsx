// 'use client';

// import React from 'react';

// const achievements = [
//   {
//     image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
//     title: 'Top Web Design and Development Company',
//     details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Achievement 2',
//     details: 'Details about achievement 2.',
//   },
//   {
//     image: 'https://via.placeholder.com/150',
//     title: 'Achievement 3',
//     details: 'Details about achievement 3.',
//   },
//   // Add more achievements as needed
// ];

// const AchievementComponent: React.FC = () => {
//   return (
//     <div className="achievementContainer">
//       <h2>Achievements</h2>
//       <div className="achievementList">
//         {achievements.map((achievement, index) => (
//           <div key={index} className="achievementBox">
//             <div className="iconBox">
//               <img
//                 src={achievement.image}
//                 alt={`Image for ${achievement.title}`}
//                 className="img-fluid achievement"
//               />
//             </div>
//             <div className="description text-center">
//               <h4 className="achievementCaption">{achievement.title}</h4>
//               <p className="textSmall fontLight">{achievement.details}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <style jsx>{`
//         .achievementContainer {
//           background-color: #000;
//           padding: 50px 20px;
//           color: #fff;
//           text-align: center;
//         }

//         h2 {
//           margin-bottom: 40px;
//           font-size: 2em;
//         }

//         .achievementList {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//         }

//         .achievementBox {
//           border: 1px solid #817b6f;
//           background-color: #1e1e1e;
//           color: #fff;
//           width: 300px;
//           margin: 10px;
//           padding: 20px;
//           box-sizing: border-box;
//           text-align: center;
//           position: relative;
//           border-radius: 10px;
//         }

//         .iconBox {
//           width: 100%;
//           overflow: hidden;
//           height: 100px;
//           margin-bottom: 20px;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .iconBox img {
//           max-height: 100px;
//           max-width: 100px;
//         }

//         .description {
//           border-top: 1px solid #fff;
//           padding-top: 20px;
//           margin-top: 20px;
//         }

//         .achievementCaption {
//           margin: 0 0 10px 0;
//           font-size: 1.2em;
//         }

//         .textSmall {
//           margin: 0;
//           font-size: 1em;
//         }

//         .fontLight {
//           font-weight: 300;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AchievementComponent;



'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const achievements = [
  {
    image: 'https://cdn-kbkfn.nitrocdn.com/DvGadheEphxHjgXDPeUVvjVrIroOCLbz/assets/images/optimized/rev-39d86f2/webcastletech.com/wp-content/uploads/2021/07/6949a5af98af0a1c12e32935d58412db_3-2.png',
    title: 'Top Web Design and Development Company',
    details: 'WebCastle Technologies Ranked Top Web Design & Development Company in Dubai (UAE) by Clutch',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Achievement 2',
    details: 'Details about achievement 2.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Achievement 3',
    details: 'Details about achievement 3.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Achievement 4',
    details: 'Details about achievement 4.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Achievement 5',
    details: 'Details about achievement 5.',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Achievement 6',
    details: 'Details about achievement 6.',
  },
];

const AchievementComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="achievementContainer">
      <h2>Achievements</h2>
      <Slider {...settings} className="achievementList">
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
      </Slider>

      <style jsx>{`
        .achievementContainer {
          background-color: #000;
          padding: 50px 20px;
          color: #fff;
          text-align: center;
        }

        h2 {
          margin-bottom: 40px;
          font-size: 2em;
        }

        .achievementList {
          display: flex;
          justify-content: center;
        }

        .achievementBox {
          border: 1px solid #817b6f;
          background-color: #1e1e1e;
          color: #fff;
          width: 300px;
          margin: 10px;
          padding: 20px;
          box-sizing: border-box;
          text-align: center;
          position: relative;
          border-radius: 10px;
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
        }

        .fontLight {
          font-weight: 300;
        }
      `}</style>
    </div>
  );
};

export default AchievementComponent;
