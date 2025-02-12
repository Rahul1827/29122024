import React from "react";
import "./CropNutrition.css";
import nitrogenImage from "../assests/images/nit.png"; 
import phosphorusImage from "../assests/images/phos.png";
import potassiumImage from "../assests/images/k.png";

const CropNutrition = () => {
  const nutrients = [
    {
      title: "Nitrogen (N)",
      description: "Essential for leaf and stem growth. Increases crop yield.",
      image: nitrogenImage, // Use local image
    },
    {
      title: "Phosphorus (P)",
      description: "Strengthens roots and helps with energy transfer in plants.",
      image: phosphorusImage, // Use local image
    },
    {
      title: "Potassium (K)",
      description: "Enhances disease resistance and overall plant health.",
      image: potassiumImage, // Use local image
    },
  ];

  return (
    <div className="crop-nutrition">
      <header className="page-header">
        <h1>Crop Nutrition Guide</h1>
        <p>Learn how to nourish your crops for a better yield.</p>
      </header>

      <section className="nutrient-cards">
        {nutrients.map((nutrient, index) => (
          <div key={index} className="card">
            <img src={nutrient.image} alt={nutrient.title} className="card-image" />
            <h3>{nutrient.title}</h3>
            <p>{nutrient.description}</p>
          </div>
        ))}
      </section>

      <section className="article">
        <h2>Best Practices for Crop Nutrition</h2>
        <p>
          Proper crop nutrition is essential for achieving high yields and sustainable farming. 
          Farmers should regularly test soil nutrient levels, apply organic fertilizers when possible, 
          and use precision farming techniques to optimize nutrient distribution.
        </p>
        <p>
          A balanced approach, combining macronutrients (NPK) and micronutrients 
          (such as Zinc, Iron, and Magnesium), will ensure healthier plants and higher productivity.
        </p>
      </section>
    </div>
  );
};

export default CropNutrition;
