import React from "react";
import "../styling/HomeModal.css"; // Ensure you have this CSS file

const HomeModal = ({ content, onClose }) => {
  if (!content) return null;

  const renderContent = () => {
    switch (content) {
      case "webDev":
        return (
          <div>
            <h2>Web Development</h2>
            <p>
              As a web developer, I specialize in crafting high-quality, dynamic
              web applications that are both visually appealing and functionally
              robust.
            </p>
            <p>
              My expertise encompasses a range of technologies, including
              JavaScript, React, HTML, and CSS, which I use to build responsive
              and user-friendly websites.
            </p>
            <p>
              From developing single-page applications to creating complex web
              systems, I focus on delivering seamless user experiences and
              clean, maintainable code.
            </p>
            <p>
              Whether you're looking to create a brand-new website or enhance an
              existing one, I am dedicated to ensuring that your web presence is
              both impactful and effective.
            </p>
          </div>
        );
      case "softwareEng":
        return (
          <div>
            <h2>Software Engineering</h2>
            <p>
              In my role as a software engineer, I leverage my knowledge of
              Python and SQL to design and develop comprehensive software
              solutions.
            </p>
            <p>
              My work involves creating efficient algorithms, developing
              scalable applications, and managing databases to ensure data
              integrity and performance. I focus on building software that meets
              specific business needs, whether it's developing backend services,
              automating processes, or integrating systems.
            </p>
            <p>
              My goal is to produce high-quality software that is reliable,
              maintainable, and tailored to the unique requirements of each
              project.
            </p>
          </div>
        );
      case "videoEdit":
        return (
          <div>
            <h2>Video Editing</h2>
            <p>
              I offer professional video editing services designed to bring your
              footage to life. Whether you need editing for short promotional
              videos or long-form content, I focus on delivering polished,
              engaging results.
            </p>
            <p>
              My services include cutting and assembling video clips, adding
              transitions and effects, color correction, audio enhancement, and
              more. I aim to create videos that capture the essence of your
              message and resonate with your audience. From personal projects to
              commercial productions, I provide editing solutions that enhance
              the overall quality and impact of your video content.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`modal-overlay ${content ? "show" : ""}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {renderContent()}
      </div>
    </div>
  );
};

export default HomeModal;
