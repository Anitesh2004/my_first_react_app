import React, { useState } from 'react';
import './ServicesHeroStyles.css'; 

   import  logo1 from '../assets/truck.jpeg'
   import  logo2 from  '../assets/truck_6.jpeg'
   import logo3 from  '../assets/truck_3.jpeg'
   import logo4 from '../assets/truck_4.jpeg'
   import  logo5 from '../assets/truck_5.jpeg'

   import  logo21 from '../assets/open_truck.jpeg'
   import  logo22 from  '../assets/open_truck_2.jpeg'
   import logo23 from  '../assets/open_truck_3.jpeg'
   import logo24 from '../assets/open_truck_4.jpeg'
   import  logo25 from '../assets/open_truck_5.jpeg'
   import  logo26 from '../assets/open_truck_6.jpeg'

   import  logo31 from '../assets/mini_truck.jpeg'
   import  logo32 from  '../assets/mini_truck_2.jpeg'
   import logo33 from  '../assets/mini_truck_3.jpeg'
   import logo34 from '../assets/mini_truck_4.jpeg'
   import  logo35 from '../assets/mini_truck_5.jpeg'
   import  logo36 from '../assets/mini_truck_6.jpeg'

   import  logo41 from '../assets/container_image.jpeg'
   import  logo42 from  '../assets/container_2.jpeg'
   import logo43 from  '../assets/container_3.jpeg'
   import logo44 from '../assets/container_4.jpeg'
   import  logo45 from '../assets/container_5.jpeg'
   import  logo46 from '../assets/container_3.jpeg'









const categories = [
  {
    name: 'Truck',
    images: [
      logo1,
      logo5,
     logo2,
      logo3,
     logo4,
      logo5,
      // Add more truck images as needed
    ],
  },
  {
    name: 'Open Truck',
    images: [
     logo21,
     logo22,
     logo23,
     logo24,
     logo25,
     logo26

      // Add more open truck images as needed
    ],
  },
  {
    name: 'Mini Truck',
    images: [
      logo31,
     logo32,
     logo33,
     logo34,
     logo35,
     logo36
      // Add more mini truck images as needed
    ],
  },
  {
    name: 'Containers',
    images: [
      logo41,
      logo42,
      logo43,
      logo44,
      logo45,
      logo46
      // Add more container images as needed
    ],
  },
];

function Services() {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleCategoryClick = (index) => {
    setCurrentCategoryIndex(index);
    setCurrentImageIndex(0);
  };

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? categories[currentCategoryIndex].images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === categories[currentCategoryIndex].images.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <div className="services-container">
      <h2>Vehicle Categories</h2>
      <br/>
      <div className="category-list">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${currentCategoryIndex === index ? 'active' : ''}`}
            onClick={() => handleCategoryClick(index)}
          >
            {category.name}
          </button>
        ))}
      </div>
      <div className="image-container">
        <button className="prev-button" onClick={handlePrevClick}>&lt;</button>
        <img className="current-image"
          src={categories[currentCategoryIndex].images[currentImageIndex]}
          alt={`${currentImageIndex + 1}`}
        />
        <button className="next-button" onClick={handleNextClick}>&gt;</button>
      </div>
    </div>
  );
}

export default Services;
