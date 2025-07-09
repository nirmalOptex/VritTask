import React from "react";
import { useState, useEffect } from "react";

const icons = [
  {
    id: 1,
    src: "./assets/gif1.gif",
    className: "gif1",
    style: { top: "22%", left: "42%" },
  },
  {
    id: 2,
    src: "./assets/gif2.gif",
    className: "gif2",
    style: { top: "62%", left: "45%" },
  },
  {
    id: 3,
    src: "./assets/gif4.gif",
    className: "gif3",
    style: { bottom: "32%", left: "25%" },
  },
  {
    id: 4,
    src: "./assets/gif3.gif",
    className: "gif4",
    style: { bottom: "32%", right: "25%" },
  },
];




const Testimonials = () => {
  const [showHello1, setShowHello1] = useState(false);
  const [showHello5, setShowHello5] = useState(false);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setShowHello1(prev => !prev);
    }, 3000);
    const interval2 = setInterval(() => {
      setShowHello5(prev => !prev);
    }, 3000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);
  return (

    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#f5f3f0]">
      <div className="container">
        {/* Wrapped image elements */}
        <div className="wrapper top bounce-down relative ">
           <img className="bouncer" src="./assets/image1.png" alt="" />
                  {showHello1 && (
           <div className="hello-text">Amazing⭐⭐⭐⭐⭐</div>
  )}
</div>
        <div className="wrapper top1 bounce-up">
          <img className="bouncer" src="./assets/image2.png" alt="" />
          {}
        </div>
        <div className="wrapper middle bounce-up">
          <img className="bouncer" src="./assets/image6.png" alt="" />
        </div>
        <div className="wrapper middle1 bounce-down">
          <img className="bouncer" src="./assets/image3.png" alt="" />
        </div>
        <div className="wrapper bottom bounce-down">
          <img className="bouncer" src="./assets/image5.png" alt="" />
        </div>
        <div className="wrapper bottom1 bounce-up relative">
          <img className="bouncer " src="./assets/image4.png" alt="" />
          {showHello1 && (
             <div className="hello-text ">     ⭐⭐⭐⭐⭐</div> )}
        </div>

        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`wrapper mix-blend-multiply ${icon.className}`}
            style={icon.style}
          >
            <img
              className="no-bounce"
              src={icon.src}
              style={{
                width: "100px",
                height: "100px",
                borderRadius: "32px",
              }}
              alt=""
            />
          </div>
        ))}

        {/* Texts */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">
            Hear How They Level Up Their Game!
          </h2>

          <div className="flex items-center gap-2 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Skill <span className="text-green-500">Masters</span> Unite!
            </h1>
          </div>

          <button className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors group">
            <span className="text-lg font-medium">View all Testimonials</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
