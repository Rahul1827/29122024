// import React from "react";
// import Slider from "react-slick";
// import "./Home.css";
// import "./HomeContent.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// // Import video file
// import intro from "../assests/video/intro.mp4";


// const Home = () => {
//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//   };

//   const cardData = [
//     {
//       title: "Crop",
//       image:
//         "https://www.shutterstock.com/image-photo/indian-farmer-spreading-fertilizer-green-260nw-2401763899.jpg",
//       description:
//         "A crop is a plant or plant product that can be grown and harvested for profit or subsistence.",
//     },
//     {
//       title: "Seeds",
//       image:
//         "https://hips.hearstapps.com/hmg-prod/images/farmer-giving-granulated-fertilizer-to-young-tomato-royalty-free-image-1676657512.jpg",
//       description:
//         "Easily manage your seed inventory with our platform. Track stock levels and categorize different seed varieties.",
//     },
//     {
//       title: "Our Stories",
//       image:
//         "https://www.shutterstock.com/image-photo/golden-hour-light-casting-over-600w-2465691597.jpg",
//       description:
//         "At Green Yield Solutions, we’re on a mission to simplify fertilizer and pesticide management for shop owners.",
//     },
//   ];

//   return (
//     <div className="home-container">
//       {/* Video Section */}
//       <header className="header">
//         <video
//           className="background-video"
//           src={intro}
//           autoPlay
//           loop
//           muted
//         ></video>
//         <div className="video-overlay">
//           <h1>Welcome to GreenYield Solutions</h1>
//           <p>Your guide to better farming practices.</p>
//         </div>
//       </header>

//       {/* Slider Section */}
//       <section className="slider-section">
//         <Slider {...sliderSettings}>
//           {cardData.map((card, index) => (
//             <div key={index} className="card">
//               <img src={card.image} alt={card.title} className="card-image" />
//               <h3>{card.title}</h3>
//               <p>{card.description}</p>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <h2>Our Services</h2>
//         <div className="services-grid">
//           <div className="service-card">
//             <i className="fas fa-leaf"></i>
//             <h3>Crop Nutrition</h3>
//             <p>Expert tips and advice for healthier crops and higher yields.</p>
//           </div>
//           <div className="service-card">
//             <i className="fas fa-flask"></i>
//             <h3>Fertilizer Guidance</h3>
//             <p>Get tailored fertilizer recommendations for your soil type.</p>
//           </div>
//           <div className="service-card">
//             <i className="fas fa-box"></i>
//             <h3>Inventory Management</h3>
//             <p>Track stock levels, sales, and profits with ease.</p>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="cta-section">
//         <h2>Ready to Transform Your Farming?</h2>
//         <p>Join thousands of farmers and shop owners who trust Green Yield Solutions.</p>
//         <button>Get Started</button>
//       </section>

//       {/* FAQs Section */}
//       <section className="faq-section">
//         <h2>FAQs</h2>
//         <div className="faq">
//           <h3>What is GreenYield Solutions?</h3>
//           <p>GreenYield Solutions is your partner for better farming and inventory management.</p>
//         </div>
//         <div className="faq">
//           <h3>Who can use it?</h3>
//           <p>Farmers, shop owners, and agronomists seeking sustainable solutions.</p>
//         </div>
//       </section>

//       {/* Sustainability Section */}
//       <section className="sustainability-section">
//         <h2>Our Commitment to Sustainability</h2>
//         <p>
//           We believe in nurturing the land and ensuring a healthier planet for future generations. Our solutions focus
//           on:
//         </p>
//         <ul>
//           <li>Reducing chemical overuse.</li>
//           <li>Enhancing soil fertility naturally.</li>
//           <li>Promoting eco-friendly farming practices.</li>
//         </ul>
//       </section>
//     </div>
//   );
// };

// export default Home;






//pranit



import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "./Home.css";
import "./HomeContent.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import video file
import intro from "../assests/video/intro.mp4";

const Home = () => {
  const navigate = useNavigate(); // Hook for navigation

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const cardData = [
    {
      title: "Crop",
      image:
        "https://www.shutterstock.com/image-photo/indian-farmer-spreading-fertilizer-green-260nw-2401763899.jpg",
      description:
        "A crop is a plant or plant product that can be grown and harvested for profit or subsistence.",
    },
    {
      title: "Seeds",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/farmer-giving-granulated-fertilizer-to-young-tomato-royalty-free-image-1676657512.jpg",
      description:
        "Easily manage your seed inventory with our platform. Track stock levels and categorize different seed varieties.",
    },
    {
      title: "Our Stories",
      image:
        "https://www.shutterstock.com/image-photo/golden-hour-light-casting-over-600w-2465691597.jpg",
      description:
        "At Green Yield Solutions, we’re on a mission to simplify fertilizer and pesticide management for shop owners.",
    },
  ];

  return (
    <div className="home-container">
      {/* Video Section */}
      <header className="header">
        <video
          className="background-video"
          src={intro}
          autoPlay
          loop
          muted
        ></video>
        <div className="video-overlay">
          <h1>Welcome to GreenYield Solutions</h1>
          <p>Your guide to better farming practices.</p>
        </div>
      </header>

      {/* Slider Section */}
      <section className="slider-section">
        <Slider {...sliderSettings}>
          {cardData.map((card, index) => (
            <div key={index} className="card">
              <img src={card.image} alt={card.title} className="card-image" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </Slider>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-leaf"></i>
            <h3>Crop Nutrition</h3>
            <p>Expert tips and advice for healthier crops and higher yields.</p>
            <Link to="/cropNutrition" className="service-link">Learn More</Link>
          </div>
          <div className="service-card">
            <i className="fas fa-flask"></i>
            <h3>Fertilizer Guidance</h3>
            <p>Get tailored fertilizer recommendations for your soil type.</p>
            <Link to="/fertilizerGuidance" className="service-link">Learn More</Link>
          </div>
          <div className="service-card">
            <i className="fas fa-box"></i>
            <h3>Inventory Management</h3>
            <p>Track stock levels, sales, and profits with ease.</p>
            <Link to="/inventoryManagement" className="service-link">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Transform Your Farming?</h2>
        <p>Join thousands of farmers and shop owners who trust Green Yield Solutions.</p>
        <button onClick={() => navigate("/getStarted")}>Get Started</button>
      </section>

      {/* FAQs Section */}
      <section className="faq-section">
        <h2>FAQs</h2>
        <div className="faq">
          <h3>What is GreenYield Solutions?</h3>
          <p>GreenYield Solutions is your partner for better farming and inventory management.</p>
        </div>
        <div className="faq">
          <h3>Who can use it?</h3>
          <p>Farmers, shop owners, and agronomists seeking sustainable solutions.</p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section">
        <h2>Our Commitment to Sustainability</h2>
        <p>
          We believe in nurturing the land and ensuring a healthier planet for future generations. Our solutions focus
          on:
        </p>
        <ul>
          <li>Reducing chemical overuse.</li>
          <li>Enhancing soil fertility naturally.</li>
          <li>Promoting eco-friendly farming practices.</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;



