import { useState } from "react";
import "./Achievements.css";
import { Github } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  github: string;
  details: string;
  timeline: string
}

let bulletPoints = `
• Developed customer lifetime value predictive models using machine learning algorithms like random forest and XGBoost, which provided crucial insights for tailoring marketing strategies that directly increased targeted campaign effectiveness by over 20%.<br>
• Developed and implemented statistical preprocessing pipelines using Python libraries (Pandas, NumPy) to clean and analyze customer datasets of 50,000+ records, improving the accuracy of machine learning models predicting Customer Lifetime Value (CLV) by 30%.<br>
• Applied linear regression and time-series forecasting on a dataset of 50,000+ customer transactions to forecast monthly spending trends and churn probabilities, integrating model outputs into a business intelligence dashboard to deliver actionable insights for marketing and retention strategies.<br>
• Collaborated with marketing, product, and engineering teams to refine model designs, achieving a 60% improvement in prediction accuracy (R² score), which boosted customer retention rates by 15% and optimized marketing ROI.`;

let bulletPoints1 = `
• Contributing to the automation team by optimizing the rover’s Depth Perception system and traversability<br>
• Leveraging LIDAR technology to enhance depth perception, extending range from 5 meters to 100 meters for
improved sensor accuracy and spatial awareness.<br>
• Designing and implementing advanced algorithms in ROS (Robot Operating System) to efficiently interpret LIDAR
data streams, generating high-resolution 3D environmental maps in real time.<br>
• Enhanced rovers traversability by more accurate slope calculations. Converted point cloud data to a grid-map and
then applied normal vector filters to compute surface normals at each point.
`

let bulletPoints2 = `
• Developing a mobile application in Android Studio inspired by WanderSync, focusing on seamless content synchro-
nization and sharing across devices.<br>
• Engineered a robust backend using Java and Gradle, optimizing data processing and reducing synchronization time
by 30% to enable real-time updates and efficient data handling.<br>
• Designed an intuitive UI/UX, improving user engagement by 20%, and applied Material Design principles to
create a responsive and visually appealing interface across various screen sizes.
`

export default function Achievements() {
  const [selectedCard, setSelectedCard] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      title: "Data Science Intern",
      description: "I developed customer lifetime value (CLV) predictive models using Random Forest and XGBoost, improving targeted campaign effectiveness by 20% and customer retention rates by 15%....",
      github: "https://github.com/muneeb783/Customer-Lifetime-Value-CLV",
      details: bulletPoints,
      timeline: "May 2024 - July 2024"
    },
    {
      title: "Software Developer - RoboJackets",
      description: "I contributed to the automation team by optimizing the Mars Rover’s depth perception system and traversability using LIDAR technology, extending the range from 5 meters to....",
      github: "https://github.com/user/award-y",
      details: bulletPoints1,
      timeline: "Aug 2024 - Present"
    },
    {
      title: "App Development ",
      description: "I developed a mobile application in Android Studio inspired by WanderSync, focusing on seamless content synchronization and sharing across devices. I engineered a robust....",
      github: "https://github.com/user/certification-z",
      details: bulletPoints2,
      timeline: "Aug 2024 - Dec 2024"
    },
  ];

  const handleCardClick = (card: Achievement) => {
    setSelectedCard(card);
  };

  const closeModal = () => {
    setSelectedCard(null);
  };

  return (
    <section className="achievements">
      <h2>Projects</h2>
      <div className="row">
        {achievements.map((achievement, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card" onClick={() => handleCardClick(achievement)}>
              <div className="card-body">
                <h5 className="card-title">{achievement.title}</h5>
                <p className="card-text">{achievement.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCard && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedCard.title}</h2>
            <div className="header-content">
                <a href={selectedCard.github} target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                Link
                </a>
                <h6 className="right-heading">{selectedCard.timeline}</h6>
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: selectedCard.details }}
            ></p>
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}