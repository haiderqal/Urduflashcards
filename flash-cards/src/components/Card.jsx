import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [cards, setCards] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userGuess, setUserGuess] = useState("");
  const [feedbackClass, setFeedbackClass] = useState("none");

  const [cardPairs, setCardPairs] = useState([
    { title: "Welcome!", definition: "Click next to get started" },
    { title: "As-salaam alaikum لسلام عليكم", definition: "Peace be upon you" },
    { title: "Khuda Hafiz خدا حافظ", definition: "Goodbye" },
    { title: "Shukran ﺷﻜﺮﺍﹰ", definition: "Thank you" },
    { title: "Khwab خواب", definition: "Dream" },
    { title: "Meri Mohabbat محبت", definition: "My love" },
    { title: "Chalo چلو", definition: "Let's go" },
    { title: "Pani پانی", definition: "Water" },
    { title: "Ye kahh hay یہ کہاں ہے", definition: "Where is it" },
    { title: "Insha Allah إن شاء الله", definition: "God willing" },
    { title: "Mera naam hay میرا نام ہے", definition: "My name is-" },
  ]);

  const showNextCard = () => {
    if (cards + 1 < cardPairs.length) {
      setCards(cards + 1);
      setIsFlipped(false);
      setUserGuess("");
      setFeedbackClass("none");
    }
  };

  const showPrevCard = () => {
    if (cards > 0) {
      setCards(cards - 1);
      setIsFlipped(false);
      setUserGuess("");
      setFeedbackClass("none");
    }
  };

  const handleShuffle = () => {
    setCardPairs([
      cardPairs[0],
      ...cardPairs.slice(1).sort(() => 0.5 - Math.random()),
    ]);
    setIsFlipped(false);
    setUserGuess("");
    setFeedbackClass("none");
  };

  const handleCheckAnswer = () => {
    if (userGuess.trim().toLowerCase() === cardPairs[cards].definition.toLowerCase()) {
      setFeedbackClass("correct");
    } else {
      setFeedbackClass("incorrect");
    }
  };

  return (
    <div>
      <div 
        className={`flip-card ${isFlipped ? "flipped" : ""} ${feedbackClass}`} 
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h1>{cardPairs[cards].title}</h1>
          </div>
          <div className="flip-card-back">
            <h1>{cardPairs[cards].definition}</h1>
          </div>
        </div>
      </div>

      <input
        type="text"
        placeholder="Enter your guess"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button onClick={handleCheckAnswer}>Submit</button>
      <button onClick={showPrevCard}>Prev</button>
      <button onClick={showNextCard}>Next</button>
      <button onClick={handleShuffle}>Shuffle</button>
    </div>
  );
};

export default Card;
