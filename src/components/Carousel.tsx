import React, { useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const img = [
    { img: 'badge', text: 'This is the first image' },
    { img: 'lightening', text: 'This is the second image' },
    { img: 'fire', text: 'This is the third image' },
  ];
  const slides = [0, 1, 2];
  const totalSlides = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) =>
        prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: React.SetStateAction<number>) => {
    setActiveSlide(index);
  };

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          {slides.map((index) => (
            <div
              key={index}
              className={`${
                activeSlide === index ? 'block' : 'hidden'
              } duration-700 ease-in-out`}
              data-carousel-item
            >
              <img
                src={`/src/assets/${img[index].img}.png`}
                className="absolute left-1/2 top-1/2 h-40 w-auto -translate-x-1/2 -translate-y-1/2 transform md:h-72"
                alt="..."
              />
              <p className="text- absolute bottom-4 left-1/2 -translate-x-1/2 transform text-sm font-medium">
                {img[index].text}
              </p>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        <div className="absolute left-1/2 top-5 z-30 flex -translate-x-1/2 space-x-3">
          {slides.map((index) => (
            <button
              key={index}
              type="button"
              className={`h-1 w-24 rounded-full ${
                activeSlide === index ? 'bg-blue-500' : 'bg-gray-100'
              }`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
              data-carousel-slide-to={index}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="group absolute left-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
          onClick={goToPrevSlide}
        >
          <RiArrowLeftSLine className="h-6 w-6 text-black" />
        </button>
        <button
          type="button"
          className="group absolute right-0 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 transform cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
          onClick={goToNextSlide}
        >
          <RiArrowRightSLine className="h-6 w-6 text-black" />
        </button>
      </div>
    </>
  );
}

export default Carousel;
