import { useState, useEffect } from "react";
import { IoIosTimer } from "react-icons/io";
import Footer from "../Components/Footer";
import { RxHalf2 } from "react-icons/rx";
import { FaRegHourglassHalf } from "react-icons/fa6";       

const images = ["/gym1.jpg", "/gym2.jpg", "/gym3.jpg"]; // List of images
const teamMembers = [
    { id: 1, img: "/trainer1.jpg", name: "John Doe", role: "Coach" },
    { id: 2, img: "/trainer2.jpg", name: "Sarah Lee", role: "Trainer" },
    { id: 3, img: "/trainer3.jpg", name: "Michael Smith", role: "Strength Coach" },
    { id: 4, img: "/trainer4.jpg", name: "Jessica Brown", role: "Yoga Instructor" },
    { id: 5, img: "/trainer5.jpg", name: "Daniel Wilson", role: "Nutritionist" },
    { id: 6, img: "/trainer6.jpg", name: "Sophia Miller", role: "Personal Trainer" },
    { id: 7, img: "/trainer7.jpg", name: "David Johnson", role: "CrossFit Coach" },
    { id: 8, img: "/trainer8.webp", name: "David Johnson", role: "CrossFit Coach" },
  ];
  
  const LandingPage = () => {
      const [hovered, setHovered] = useState(null);
      const [currentImage, setCurrentImage] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative h-180 w-fit-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{ backgroundImage: `url(${images[currentImage]})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-50"></div>

      {/* Text Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-yellow-400 text-center p-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          "Push Yourself, <span className="text-white">Because No One Else Will!"</span>
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-white">
          Train Hard. Stay Strong. Keep Moving Forward.
        </p>
      </div>
      <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center md:items-start">
      {/* Left Side - Image */}
      <div className="md:w-1/2 flex justify-center md:justify-center">
    <img
      className="h-120 rounded-lg mx-auto md:mx-0"
      src="/gym6.jpg"
      alt="Gym Equipment"
    />
  </div>

      {/* Right Side - Text */}
      <div className="md:w-1/4 mt-6 md:mt-0 md:ml-2">
        <h2 className="text-7xl font-bold opacity-10 absolute">WHO WE ARE</h2>
        <h3 className="text-4xl font-bold relative z-10 ml-32 top-10">WHO WE ARE</h3>
        <br />
        <br />
        <p className="mt-4 text-lg font-bold">
          At Journey London, we believe CrossFitters come in all shapes and sizes. We are all on a
          journey towards our personal best in health and fitness levels—a journey that makes us
          better as athletes, friends, and people.
        </p>
        <p className="mt-4 text-lg font-bold">
          Our facility is unlike any other gym you’ve been to. We pride ourselves in providing
          world-class CrossFit training while fostering a motivating and dynamic environment.
          We are a community dedicated to your evolution, one workout at a time.
        </p>
        <p className="mt-4 text-lg font-bold">
          Come in for a free trial class! Lose some body fat, gain some friends, and get fit for
          life!
        </p>
      </div>
    </div>
   
    <div className="bg-black text-white py-12 px-6">
      {/* Title Section */}
      <div className="text-center relative">
        <h2 className="text-6xl font-bold opacity-10 absolute inset-x-0">MEET THE TEAM</h2>
        <h3 className="text-2xl font-bold relative z-10">MEET THE TEAM</h3>
      </div>
<br />
<br />
      {/* Grid Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="relative w-full h-48 md:h-64"
            onMouseEnter={() => setHovered(member.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            
            {/* Coach Highlight Card (Only Show on Hover) */}
            {hovered === member.id && (
              <div className="absolute inset-0 bg-yellow-400 flex flex-col justify-center items-center p-6 transition-opacity duration-300">
                <h4 className="text-black font-bold text-xl">{member.name}</h4>
                <p className="text-black mt-2">{member.role}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    <div className="relative bg-black text-white py-16 px-6">
      {/* Diagonal Yellow Background */}
      <div className="absolute top-10 left-0 w-full h-40 bg-yellow-400 transform -skew-y-6 z-0"></div>

      {/* Section Title */}
      <div className="relative text-center z-10">
        <h2 className="text-8xl font-bold text-gray-800 opacity-20 absolute inset-x-0">
          03
        </h2>
        <h3 className="text-2xl font-bold relative z-10">FEATURED CLASSES</h3>
        
      </div>

      {/* Classes Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {/* Class Card 1 */}
        <div className="relative">
          <img
            src="/book4.jpg"
            alt="Crossfit Beginners Class"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4">
            <h4 className="text-lg font-bold">CROSSFIT - BEGINNERS CLASS</h4>
            <button className="mt-2 bg-yellow-400 text-black font-bold px-4 py-2">
              BOOK
            </button>
          </div>
        </div>

        {/* Class Card 2 */}
        <div className="relative">
          <img
            src="/book1.jpg"
            alt="Crossfit Gymnastics"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4">
            <h4 className="text-lg font-bold">CROSSFIT - GYMNASTICS</h4>
            <button className="mt-2 bg-yellow-400 text-black font-bold px-4 py-2">
              BOOK
            </button>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="bg-yellow-400 py-15">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 text-center gap-6">
        {/* Item 1 */}
        <div>
          <p className="text-5xl font-extrabold text-black">45</p>
          <p className="text-lg font-semibold uppercase text-black">Different Modules</p>
        </div>

        {/* Item 2 */}
        <div>
          <p className="text-5xl font-extrabold text-black">60</p>
          <p className="text-lg font-semibold uppercase text-black">Minutes Per Class</p>
        </div>

        {/* Item 3 */}
        <div>
          <p className="text-5xl font-extrabold text-black">20</p>
          <p className="text-lg font-semibold uppercase text-black">Classes Per Week</p>
        </div>

        {/* Item 4 */}
        <div>
          <p className="text-5xl font-extrabold text-black">1</p>
          <p className="text-lg font-semibold uppercase text-black">United Goal</p>
        </div>
      </div>
    </div>
    </div>

        
    <div className="text-center relative p-10">

        <h2 className="text-6xl font-bold opacity-10 absolute inset-x-0">MEMBERSHIP</h2>
        <h3 className="text-2xl font-bold relative z-10">MEMBERSHIP</h3>
      </div>
        <div className="bg-black p-8">        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
            <div className="bg-zinc-700 text-white p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-2 ">FLEXI</h2>
              <br />
              <div className="flex justify-center items-center text-6xl font-bold">

  <FaRegHourglassHalf />
</div>
<br />
              <p className="text-xl mb-4">£ 99.99 / month</p>
              <ul className="mb-4">
                <li>✔ 12 Classes Per Month</li>
                <li>✔ 3 Classes Per Week</li>
                <li>✔ No joining fees</li>
              </ul>
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">JOIN TODAY</button>
            </div>
            <div className="bg-white text-black p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-2">ALL ACCESS</h2>
              <br />
              <div className="flex justify-center items-center text-6xl font-bold">
  <IoIosTimer />

</div>
<br />
              <p className="text-xl mb-4">£ 199.99 / month</p>
              <ul className="mb-4">
                <li>✔ Unlimited Classes Per Month</li>
                <li>✔ 3 Classes Per Day</li>
                <li>✔ No joining fees</li>
              </ul>
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">JOIN TODAY</button>
            </div>
            <div className="bg-zinc-700 text-white p-6 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-2">OFF-PEAK</h2>
              <br />
              <div className="flex justify-center items-center text-6xl font-bold">

  <RxHalf2 />
</div>
<br />
              <p className="text-xl mb-4">£ 149.99 / month</p>
              <ul className="mb-4">
                <li>✔ 20 Classes Per Month</li>
                <li>✔ 5 Classes Per Week</li>
                <li>✔ No joining fees</li>
              </ul>
              <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 p-2 rounded-lg">JOIN TODAY</button>
            </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
};

export default LandingPage;
