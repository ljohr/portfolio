import { useState, useEffect } from "react";
import { Rnd } from "react-rnd";
import "./PopUp.css";
import InfoMain from "./InfoMain";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import closeIcon from "../assets/close-button.png";
import closeIconPressed from "../assets/close-button-pressed.png";

// eslint-disable-next-line react/prop-types
const PopUp = ({
  show,
  onClose,
  title = "Window",
  children,
  offset = 0,
  initialComponent = "InfoMain",
}) => {
  const [isClosePressed, setIsClosePressed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeComponent, setActiveComponent] = useState(initialComponent);
  const menuBarHeight = 40;
  const defaultWidth = Math.min(800, window.innerWidth * 0.9);
  const defaultHeight = Math.min(480, window.innerHeight * 0.9);

  const [position, setPosition] = useState({
    x:
      window.innerWidth / 2 -
      Math.min(defaultWidth, window.innerWidth * 0.9) / 2 +
      offset,
    y: Math.max(menuBarHeight, window.innerHeight * 0.1) + offset,
    width: Math.min(defaultWidth, window.innerWidth * 0.9),
    height: Math.min(defaultHeight, window.innerHeight * 0.9),
  });

  useEffect(() => {
    if (!show) {
      // Reset position and size when closed
      setPosition({
        x:
          window.innerWidth / 2 -
          Math.min(defaultWidth, window.innerWidth * 0.9) / 2 +
          offset,
        y: Math.max(menuBarHeight, window.innerHeight * 0.1) + offset,
        width: Math.min(defaultWidth, window.innerWidth * 0.9),
        height: Math.min(defaultHeight, window.innerHeight * 0.9),
      });
      // Reset to initial component when closed
      setActiveComponent(initialComponent);
    }
  }, [show, offset, initialComponent]);

  const renderComponent = () => {
    switch (activeComponent) {
      case "InfoMain":
        return <InfoMain setActiveComponent={setActiveComponent} />;
      case "Projects":
        return <Projects setActiveComponent={setActiveComponent} />;
      case "About":
        return <About setActiveComponent={setActiveComponent} />;
      case "Experience":
        return <Experience setActiveComponent={setActiveComponent} />;
      case "Contact":
        return <Contact setActiveComponent={setActiveComponent} />;
      default:
        return <InfoMain setActiveComponent={setActiveComponent} />;
    }
  };

  if (!show) {
    return null;
  }

  return (
    <div className='popup-overlay'>
      <Rnd
        position={{ x: position.x, y: position.y }}
        size={{ width: position.width, height: position.height }}
        onDragStart={() => setIsDragging(true)}
        onDragStop={() => setIsDragging(false)}
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
        dragHandleClassName='header'
        cancel='button'
        enableResizing={{
          bottomRight: true,
        }}
        resizeHandleComponent={{
          bottomRight: <div className='resize-handle'></div>,
        }}
      >
        <div className='modal'>
          <div className={`header ${isDragging ? "grabbing" : ""}`}>
            <div className='title-bar'>
              <button
                className='close-button'
                onClick={onClose}
                onMouseDown={() => setIsClosePressed(true)}
                onMouseUp={() => setIsClosePressed(false)}
                onMouseLeave={() => setIsClosePressed(false)}
              >
                <img
                  src={isClosePressed ? closeIconPressed : closeIcon}
                  alt='closeIcon'
                />
              </button>
              <div className='title-stripes-left'>
                <div className='title-stripes'>
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
              <span className='window-title'>{title}</span>
              <div className='title-stripes'>
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
          <div className='innerContainer'>
            <div className='windowMetaData'>1 item, 7.2 MB available</div>
            <div className='content'>{children || renderComponent()}</div>
          </div>
        </div>
      </Rnd>
    </div>
  );
};

export default PopUp;
