import { useState, useEffect } from 'react';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';

function Carousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);
  const img = [
    {
      img: 'badge',
      text: "You've scored a total of 65% in all quizzes this week ",
    },
    { img: 'lightening', text: 'You are on a 3 day Streak!' },
    { img: 'fire', text: 'You spent 5hrs learning today!' },
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

  const goToSlide = (index: number) => {
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

  const toggleControlsVisibility = () => {
    setControlsVisible(!controlsVisible);
  };

  return (
    <>
      <div
        id="default-carousel"
        className="relative w-full "
        data-carousel="slide"
        onMouseEnter={toggleControlsVisibility}
        onMouseLeave={toggleControlsVisibility}
      >
        {/* Carousel wrapper */}
        <div className="relative h-72 overflow-hidden rounded-lg  pt-16 md:h-36">
          {slides.map((index) => (
            <div
              key={index}
              className={`${
                activeSlide === index ? 'block' : 'hidden'
              }   duration-700 ease-in-out`}
              data-carousel-item
            >
              <div className="absolute left-1/2 top-1/2 h-12 w-auto -translate-x-1/2 -translate-y-1/2 transform rounded-full border-4 border-gray-400 p-2 md:h-16 md:w-auto ">
                <img
                  src={`${img[index].img}.png`}
                  className="h-full w-full object-contain"
                  alt="carousel"
                />
              </div>

              <p className="absolute bottom-0 left-1/2 w-40 -translate-x-1/2 transform  text-center text-xs font-normal">
                {img[index].text}
              </p>
            </div>
          ))}
        </div>

        {/* Slider controls */}
        {controlsVisible && (
          <>
            <div className="absolute left-1/2 top-5 z-30 flex -translate-x-1/2 space-x-3">
              {slides.map((index) => (
                <button
                  key={index}
                  type="button"
                  className={`h-1 w-6 rounded-full ${
                    activeSlide === index ? 'bg-blue-500' : 'bg-gray-100'
                  }`}
                  aria-current={activeSlide === index}
                  aria-label={`Slide ${index + 1}`}
                  data-carousel-slide-to={index}
                  onClick={() => goToSlide(index)}
                ></button>
              ))}
            </div>

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
          </>
        )}
      </div>
    </>
  );
}

export default Carousel;
