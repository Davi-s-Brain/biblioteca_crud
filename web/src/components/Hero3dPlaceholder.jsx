import React from "react";
import "../styles/Hero3DPlaceholder.css";


export const Hero3DPlaceholder = ({ bookTitle = "Livroteca", bookCover = NaN }) => {
  return (
    <div className="hero-container">
      <div className="book-3d-animation">
        {/* Capa do Livro */}
        <div className="book-cover">
          <div className="book-content">
            <div className="circle"></div>
            <h3>Livroteca</h3>
            <p>Um Universo de Histórias</p>
          </div>
        </div>
        <div className="book-spine"></div>
        <div className="book-pages"></div>
      </div>
    </div>
  );
};
