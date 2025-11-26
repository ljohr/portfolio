import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "./PopUp.css";
import closeIcon from "../assets/close-button.png";
import closeIconPressed from "../assets/close-button-pressed.png";

// eslint-disable-next-line react/prop-types
const PopUp = ({ show, onClose, title = "Window", children, offset = 0 }) => {
  const [isClosePressed, setIsClosePressed] = useState(false);
  const menuBarHeight = 40;
  const defaultWidth = 720;
  const defaultHeight = 480;

  const [position, setPosition] = useState({
    x: window.innerWidth / 2 - defaultWidth / 2 + offset,
    y: Math.max(menuBarHeight, window.innerHeight * 0.15) + offset,
    width: defaultWidth,
    height: defaultHeight,
  });

  useEffect(() => {
    if (!show) {
      // Reset position and size when closed
      setPosition({
        x: window.innerWidth / 2 - defaultWidth / 2 + offset,
        y: Math.max(menuBarHeight, window.innerHeight * 0.15) + offset,
        width: defaultWidth,
        height: defaultHeight,
      });
    }
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <Rnd
        position={{ x: position.x, y: position.y }}
        size={{ width: position.width, height: position.height }}
        onDrag={(e, d) => {
          setPosition((prev) => ({
            ...prev,
            x: d.x,
            y: Math.max(menuBarHeight, d.y),
          }));
        }}
        onResize={(e, direction, ref, delta, pos) => {
          setPosition((prev) => ({
            ...prev,
            width: parseInt(ref.style.width),
            height: parseInt(ref.style.height),
            x: pos.x,
            y: pos.y,
          }));
        }}
        minWidth={300}
        minHeight={200}
        dragHandleClassName="header"
        cancel="button"
        enableResizing={{
          bottomRight: true,
        }}
        resizeHandleComponent={{
          bottomRight: <div className="resize-handle"></div>,
        }}
      >
        <div className="modal">
          <div className="header">
            <div className="title-bar">
              <button
                className="close-button"
                onClick={onClose}
                onMouseDown={() => setIsClosePressed(true)}
                onMouseUp={() => setIsClosePressed(false)}
                onMouseLeave={() => setIsClosePressed(false)}
              >
                <img
                  src={isClosePressed ? closeIconPressed : closeIcon}
                  alt="closeIcon"
                />
              </button>
              <div className="title-stripes-left">
                <div className="title-stripes">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <span className="window-title">{title}</span>
              <div className="title-stripes">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
          <div className="innerContainer">
            <div className="windowMetaData">1 item, 7.2 MB available</div>
            <div className="content">{children}</div>
          </div>
        </div>
      </Rnd>
    </div>
  );
};

export default PopUp;
