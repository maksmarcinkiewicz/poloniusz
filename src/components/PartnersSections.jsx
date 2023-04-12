import React from "react";
import orpegLogo from "../assets/orpeg_homepage.png";
import wspolnotaLogo from "../assets/wspolnota_homepage.png";
import konsulatLogo from "../assets/konsulat_homepage.png";
import { motion } from "framer-motion";

const PartnersSection = () => {
  // Partner logos data
  const partnerLogos = [
    {
      name: "Company 1",
      logoSrc: orpegLogo, // Replace with the image source for Company 1
    },
    {
      name: "Company 2",
      logoSrc: wspolnotaLogo, // Replace with the image source for Company 2
    },
    {
      name: "Company 3",
      logoSrc: konsulatLogo, // Replace with the image source for Company 2
    },
    // Add more partner logos as needed
  ];

  return (
    <section className=" flex my-10 gap-2">
      {partnerLogos.map((partner, index) => (
        <motion.button
          key={index}
          className="partner-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={partner.logoSrc} alt={partner.name} />
        </motion.button>
      ))}
    </section>
  );
};

export default PartnersSection;
