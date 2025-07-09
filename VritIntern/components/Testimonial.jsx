import React from "react";

// Avatar images
const icons = [
  { id: 1, src: "./assets/gif1.gif", className:"gif1" ,style: { top: "22%", left: "42%" } },
  { id: 2, src: "./assets/gif2.gif", className:"gif2",style: { top: "62%", left: "45%" } },
  { id: 3, src: "./assets/gif4.gif", className:"gif3",style: { bottom: "32%", left: "025%" } },
  { id: 4, src: "./assets/gif3.gif", className:"gif4",style: { bottom: "32%", right: "025%" } },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#f5f3f0]">
      <div className="container">
<img className="top" src="./assets/image1.png" alt="" />
<img className="top1" src="./assets/image2.png" alt="" />
<img className="middle" src="./assets/image6.png" alt="" />
<img className="middle1"src="./assets/image3.png" alt="" />
<img className="bottom" src="./assets/image5.png" alt="" />
<img className="bottom1" src="./assets/image4.png" alt="" />

{icons.map((icon) => (
          <img
            key={icon.id}
            src={icon.src}
            className={`w-[100px] h-[100px] absolute mix-blend-multiply ${icon.className}`}
            style={{ ...icon.style, borderRadius: "32px" }}
          />
        ))}
    
        {/* Texts */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-3xl text-gray-700 mb-4 font-medium">Hear How They Level Up Their Game!</h2>

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
  )
  
};

export default Testimonials;
