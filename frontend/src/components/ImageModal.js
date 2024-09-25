import React, { useState } from "react";
import "../styling/ImageModal.css";

const ImageModal = ({ isOpen, imageSrc, images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) {
    return null;
  }

  return (
    <div className={`img-modal ${isOpen ? "open" : ""}`}>
      <div data-aos="fade-down" className="img-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={images[currentIndex]} alt="Modal Content" />
      </div>
    </div>
  );
};

export default ImageModal;
