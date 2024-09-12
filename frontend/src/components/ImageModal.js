import React from "react";
import "../styling/ImageModal.css";

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <span className="close" onClick={onClose}>
        &times;
      </span>
      <div className="modal-content">
        <img src={imageSrc} alt="Modal Content" />
      </div>
    </div>
  );
};

export default ImageModal;
