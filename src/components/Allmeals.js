import React from 'react'
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Allmeals() {
    const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/meals")
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
    <Navbar />
    <div className="meals-board">
      <h1 className="board">Meals Board</h1>
    </div>

    <div className="meals-container">
      {cards.map((card) => (
        <div className="meals-dets" key={card.id}>
          <div className="meals-image">
            <img src={card.image_url} alt="article url" />
          </div>
          <div className="meals-det">
            <h2>
             <span>{card.name}</span>
            </h2>
            <h3>Ksh{card.price}</h3>
            <div className='btn-meals'>
            <Link to={`/carddetails/${card.id}`}>
              <button className="btn-view">View</button>
            </Link>

            <Link to={`/reviews/${card.id}`}>
            <button className="btn-view">Delete</button>
          </Link>
          <Link to={`/reviews/${card.id}`}>
          <button className="btn-view">update</button>
        </Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}


export default Allmeals