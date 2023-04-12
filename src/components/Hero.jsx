import React from "react";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-lottie.json";

const Hero = () => {
  const slides = [
    {
      title: "Nagłówek 1",
      description: "Opis 1",
    },
    {
      title: "Nagłówek 2",
      description: "Opis 2",
    },
    {
      title: "Nagłówek 3",
      description: "Opis 3",
    },
    // Możesz dodać więcej obiektów do tablicy, aby utworzyć więcej slajdów
  ];
  return (
    <div className="p-8 ">
      <div className="">
        <div className="md:hidden">
          <div className="absolute top-60 -left-10 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-30 -right-10 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <Lottie animationData={heroAnimation} className="flex" />
        </div>
        <div className="md:flex justify-center">
          <div className="md:basis-1/2 md:flex md:flex-col md:justify-center md:items-start">
            <h2 className="font-bold text-3xl text-justify ">
              Discover the Best of Polish Language at Poloniusz!
            </h2>
            <p className="text-lg text-justify ">
              Welcome to Poloniusz! Our experienced teachers provide language
              and cultural education. Join our warmcommunity where learning a
              new language and culture is fun and exciting for students of all
              levels.
            </p>
            <button className="btn btn-outline mt-4">Sign child</button>
          </div>
          <div className="hidden md:block">
            <Lottie animationData={heroAnimation} className="flex " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
