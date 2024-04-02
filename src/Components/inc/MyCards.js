import React from 'react'
import '../styles/MyCards.css'
import { Link } from 'react-router-dom'
import '../../data/products.json'

const MyCards= ({ id, image_url, name }) => {
    return (
      <div class="card note-card">
        <Link to={`/product/${id}`}>
          <img
            className="card-img-top"
            src={image_url}
            alt={name}
            width={"240px"}
            height={"240px"}
          />
          <div class="card-body text-center">
            <h5 class="card-title">{name}</h5>
          </div>
        </Link>
      </div>
    );
  };
  
  export default MyCards;
  