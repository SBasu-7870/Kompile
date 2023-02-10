import React, { useState } from "react";

const slides = [
    {
      uri: require("../assets/img/parse-tree1.png"),
      alt: "image 1"
      
    },
    {
      uri: require("../assets/img/parse-tree2.png"),
      alt: "image 2"
    },
    {
      uri: require("../assets/img/parse-tree3.png"),
      alt: "image 3"
    },
    {
      uri: require("../assets/img/parse-tree4.png"),
      alt: "image 4"
    },
    {
      uri: require("../assets/img/parse-tree5.png"),
      alt: "image 5"
    },
  ];

const Carousel = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = index - 1;
    if (newIndex < 0) {
      setIndex(slides.length - 1);
    } else {
      setIndex(newIndex);
    }
  };

  const nextSlide = () => {
    const newIndex = index + 1;
    if (newIndex === slides.length) {
      setIndex(0);
    } else {
      setIndex(newIndex);
    }
  };

  return (
    <div className="relative">
      <img
        src={slides[index].uri}
        alt={slides[index].alt}
        className="w-full h-64 object-cover"
      />
      <div className="relative bottom-0 flex justify-between w-full bg-white">
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full "
          onClick={prevSlide}
        >
          Prev
        </button>
        <button
          className="bg-white hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded-full "
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
