'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
import '../../../src/styles/styleDashJugador/styleCarrusel.css';
export default function Carrusel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const slides = [
        {
          title: "Imagen 1",
          description: "Escribe el texto que aparecerá sobre la imagen número 1.",
          link: "https://www.migueltroyano.com",
          image: "/images/imgCarrusel/01.jpg",
        },
        {
          title: "Imagen 2",
          description: "Escribe el texto que aparecerá sobre la imagen número 2.",
          link: "https://www.migueltroyano.com",
          image: "/images/imgCarrusel/02.png",
        },
        {
          title: "Imagen 3",
          description: "Escribe el texto que aparecerá sobre la imagen número 3.",
          link: "https://www.migueltroyano.com",
          image: "/images/imgCarrusel/03.jpg",
        },
      ];
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);
    
        return () => clearInterval(intervalId);
      }, [slides.length]);
    
      const handleSlideChange = (index) => {
        setCurrentSlide(index);
      };
  
    return (
        <section id="container-slider">
        <button
          className="arrowPrev"
          onClick={() => handleSlideChange((currentSlide - 1 + slides.length) % slides.length)}
        >
          <i className="fas fa-chevron-circle-left"></i>
        </button>
        <button
          className="arrowNext"
          onClick={() => handleSlideChange((currentSlide + 1) % slides.length)}
        >
          <i className="fas fa-chevron-circle-right"></i>
        </button>
        <ul className="listslider">
          {slides.map((slide, index) => (
            <li key={index}>
              <a
                itlist={`itList_${index}`}
                className={currentSlide === index ? "item-select-slid" : ""}
                onClick={() => handleSlideChange(index)}
              />
            </li>
          ))}
        </ul>
        <ul id="slider">
          {slides.map((slide, index) => (
            <li key={index} style={{ opacity: currentSlide === index ? 1 : 0 }}>
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
              />
              <div className="content_slider">
                <div>
                  <h2>{slide.title}</h2>
                  <p>{slide.description}</p>
                  <a href={slide.link} target="_blank" className="btnSlider">
                    Acceder
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    );
}
