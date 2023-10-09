import React, { useRef, useState } from 'react';
import '../assets/css/Home.css';
import { Link } from 'react-router-dom';
import TriviaQuiz from './TriviaQuiz';

import Footer from './Footer';


const Home = () => {

  const [likes, setLikes] = useState(0);
  const handleLikeClick = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };
  
  const imageUrls = [
    'https://noescinetodoloquereluce.com/wp-content/uploads/2019/02/hot-wheels.jpg',
    'https://th.bing.com/th/id/OIP.ggTyt3vTtMCyhHNoKPoA6gHaEo?pid=ImgDet&rs=1',
    'image3.jpeg',
    
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => prevIndex - 1);
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => prevIndex + 1);
  };

  

  return (
    <div className="homepage">
      
      <div className="image-container">
        <img
          src={imageUrls[currentImageIndex]}
          alt={`Image ${currentImageIndex + 1}`}
          height="600vh"
          width="1400vh"
        />
        <button
          className="img-button img-button-left"
          disabled={currentImageIndex === 0}
          onClick={handlePrevious}
        >
          <img src="left-arrow.png" height="30px" width="50px" alt="Previous" />
        </button>
        <button
          className="img-button img-button-right"
          disabled={currentImageIndex === imageUrls.length - 1}
          onClick={handleNext}
        >
          <img src="right-arrow.png" height="30" width="50px" alt="Next" />
        </button>
      </div>

        <h2>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Featured Content</h2>
      <div className="featured-content">
      <div className="featured-item">
  <img
    src="f1.png"
    alt="Featured Image 1"
    height="400px"
    width="600px"
  />
  <h3>Featured Article 1</h3>
  <p>
    EVZoN.In is now Part of Microsoft for Startups Programme
  </p>
  <Link to="https://evzon.in/evzon-in-is-now-part-of-microsoft-for-startups/">Read More</Link>
  <button className="like-button" onClick={handleLikeClick}>
    Like <span role="img" aria-label="like">👍</span>
  </button>
  <p>{likes} Likes</p>
</div>

<div className="featured-item">
  <img
    src="f3.jpg"
    alt="Featured Image 1"
    height="400px"
    width="600px"
  />
  <h3>Featured Article 1</h3>
  <p>
    EVZoN.In is now Part of Microsoft for Startups Programme
  </p>
  <Link to="https://evzon.in/evzon-in-is-now-part-of-microsoft-for-startups/">Read More</Link>
  <button className="like-button" onClick={handleLikeClick}>
    Like <span role="img" aria-label="like">👍</span>
  </button>
  <p>{likes} Likes</p>
</div>


        {/* Add more featured items here */}
      </div>
<TriviaQuiz/>





     
      <Footer/>
      

    </div>
  );
};

export default Home;
