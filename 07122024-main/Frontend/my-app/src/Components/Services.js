import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css"; // Make sure to create this CSS file for styling

export const Services = () => {
  const navigate = useNavigate();

  const handleFieldVisit = () => {
    navigate("/bookFieldVisit");
  };

  const handleNutritionRecommendation = () => {
    navigate("/nutritionRecommendation");
  };

  return (
    <div className="serviceimg">
    <div className="services-container">
      <h2 className="heading">Our Services</h2>
      <div className="cardsContainer">
        <div className="card" onClick={handleFieldVisit}>
          <h3 className="cardTitle">Book Field Visit</h3>
          <p className="cardDescription">
            Schedule a visit to your farm with our experts to get personalized
            guidance.
          </p>
        </div>
        <div className="card" onClick={handleNutritionRecommendation}>
          <h3 className="cardTitle">Nutrition Recommendation</h3>
          <p className="cardDescription">
            Get personalized recommendations for your crops' nutritional needs.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;
