import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-lottie.json";

const Hero = () => {
  return (
    <div className="">
      <div className="">
        <div>
          <h2 className="">
            Discover the Best of Polish Language and Culture at Poloniusz!
          </h2>
          <p className="">
            Welcome to Poloniusz, the Polish Weekend School for Kids in
            Edinburgh. Our experienced teachers provide engaging language and
            cultural education through a comprehensive curriculum of
            instruction, music, dance, and traditional crafts. Join our warm and
            supportive community where learning a new language and culture is
            fun and exciting for students of all levels.
          </p>
          <button className="btn my-4">Sign child</button>

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
