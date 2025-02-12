import React from "react";
import "./FertilizerGuidance.css";
import organicFertilizer from "../assests/images/org ferti.png";
import inorganicFertilizers from "../assests/images/in org ferti.png";
import liquidFertilizers from "../assests/images/L ferti.png";

const FertilizerGuidance = () => {
  const fertilizers = [
    {
      title: "Organic Fertilizers",
      description:
        "Made from natural materials such as compost, manure, and bio-fertilizers. Improves soil health in the long term.",
      image: organicFertilizer,
    },
    {
      title: "Inorganic Fertilizers",
      description:
        "Commercially produced fertilizers rich in essential nutrients for faster plant growth.",
      image: inorganicFertilizers,
    },
    {
      title: "Liquid Fertilizers",
      description:
        "Fast-acting fertilizers that are easily absorbed by plants. Ideal for foliar application.",
      image: liquidFertilizers,
    },
  ];

  return (
    <div className="fertilizer-guidance">
      <header className="page-header">
        <h1>Fertilizer Guidance</h1>
        <p>Discover the right fertilizers for your crops and maximize yield.</p>
      </header>

      <section className="fertilizer-cards">
        {fertilizers.map((fertilizer, index) => (
          <div key={index} className="card">
            <img src={fertilizer.image} alt={fertilizer.title} />
            <h3>{fertilizer.title}</h3>
            <p>{fertilizer.description}</p>
          </div>
        ))}
      </section>

      <section className="article">
        <h2>How to Choose the Right Fertilizer?</h2>
        <p>
          Choosing the right fertilizer depends on your crop type, soil
          condition, and growth stage. For example:
        </p>
        <ul>
          <li>For leafy vegetables, nitrogen-rich fertilizers are ideal.</li>
          <li>For root crops, phosphorus-rich fertilizers enhance growth.</li>
          <li>
            Slow-release fertilizers are recommended for long-term soil health.
          </li>
        </ul>
        <p>
          Always test soil nutrient levels before applying fertilizers to avoid
          overuse, which can harm the environment.
        </p>
      </section>
    </div>
  );
};

export default FertilizerGuidance;
