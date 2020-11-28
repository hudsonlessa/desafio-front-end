import React, { useState, useEffect, useRef } from 'react';
import { Container } from './styles';

import arrow from '../../assets/arrow.png';
import slidesJSON from '../../assets/slide.json';

const Slider: React.FC = () => {
  const [slides, setSlides] = useState<string[]>([]);
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const slidesRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const [{ imagens }] = [...slidesJSON];

    setSlides(imagens);
  }, []);

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.scrollLeft =
        slidesRef.current.offsetWidth * (activeSlide - 1);
    }
  }, [activeSlide]);

  const handleSelectorClick = (index: number) => {
    setActiveSlide(index + 1);
  };

  const handleLeftArrowClick = () => {
    if (!(activeSlide <= 1)) {
      setActiveSlide(activeSlide - 1);
    }
  };

  const handleRightArrowClick = () => {
    if (!(activeSlide >= slides.length)) {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <Container activeSlide={activeSlide} id="hero">
      <div className="slider">
        <ul className="slider__selectors">
          {slides.map((slide, index) => {
            return (
              <li
                onClick={() => handleSelectorClick(index)}
                onKeyDown={() => handleSelectorClick(index)}
                className="selector"
              />
            );
          })}
        </ul>

        <img
          className="arrow arrow--left"
          src={arrow}
          alt="Ícone de seta"
          onClick={handleLeftArrowClick}
          onKeyDown={handleLeftArrowClick}
        />
        <img
          className="arrow arrow--right"
          src={arrow}
          alt="Ícone de seta"
          onClick={handleRightArrowClick}
          onKeyDown={handleRightArrowClick}
        />

        <ul className="slides" ref={slidesRef}>
          {slides.map(slide => {
            return (
              <li className="slide">
                <img alt="Placeholder" src={`/slides/${slide}`} />
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default Slider;
