import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-lottie.json";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center p-4">
      <div className="md:w-1/3 md:flex md:justify-center md:items-center flex-col md:mt-44">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-justify">
            Discover new product and best possibilities
          </h2>
          <p className="text-md text-justify md:text-xl break-words	">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum culpa, modi, voluptas facilis eaque quaerat
            veniam quisquam quia rem nulla. Voluptate ducimus nostrum facilis
            reprehenderit omnis sapiente? Aliquid, culpa? Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Aut, nobis ratione quisquam,
            ullam quae neque eligendi itaque placeat porro odio, possimus
            assumenda. Obcaecati, eos vel? Blanditiis similique sunt error at.
          </p>
          <button className="btn my-4">Sign child</button>
          <hr className="hidden md:block border-1 border-black"></hr>
          <div className="hidden md:block">
            <div className="flex flex-row items-start md:gap-32 md:mt-8">
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1">42k</h3>
                <p>Our Active Users</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1">42k</h3>
                <p>Our Active Users</p>
              </div>
              <div>
                <h3 className="text-4xl md:text-5xl font-bold mb-1">42k</h3>
                <p>Our Active Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-8 md:w-1/3">
        <div className="flex flex-col gap-4 justify-center items-start md:hidden">
          <div>
            <h3 className="text-3xl font-bold mb-1">42k</h3>
            <p>Our Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-1">42k</h3>
            <p>Our Active Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-1">42k</h3>
            <p>Our Active Users</p>
          </div>
        </div>
        <Lottie animationData={heroAnimation} className="w-60 md:w-full mb-8" />
      </div>
    </div>
  );
};

export default Hero;
