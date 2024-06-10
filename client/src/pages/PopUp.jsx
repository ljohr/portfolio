// PopUp.js
import React from "react";
import Popup from "reactjs-popup";
import Draggable from "react-draggable";
import "./PopUp.css";

const PopUp = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <Popup
      open={show}
      closeOnDocumentClick={false}
      onClose={onClose}
      className="popup-overlay"
    >
      <Draggable handle=".header">
        <div className="modal">
          <div className="header">
            <button className="close-button" onClick={onClose}>
              X
            </button>
          </div>
          <div className="content">{children}</div>
        </div>
      </Draggable>
    </Popup>
  );
};

export default PopUp;
