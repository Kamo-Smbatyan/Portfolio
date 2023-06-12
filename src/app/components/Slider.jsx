import React, { useState } from 'react';
import '../Slider.css';

const Slider = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextItem = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  }

  const prevItem = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    <div className="carousel">
      <button onClick={prevItem} disabled={activeIndex === 0}>Previous</button>
      <div className="items">
        {items.map((item, index) => (
          <div className={`item ${index === activeIndex ? 'active' : ''}`} key={index} style={{transform: `translateX(-${100 * activeIndex}%)`}}>
            {item}
          </div>
        ))}
      </div>
      <button onClick={nextItem} disabled={activeIndex === items.length - 1}>Next</button>
    </div>
  );
}

export default Slider;
