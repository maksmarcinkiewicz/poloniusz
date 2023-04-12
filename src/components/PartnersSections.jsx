import React from "react";

const PartnersSection = () => {
  // Partner logos data
  const partnerLogos = [
    {
      name: "Company 1",
      logoSrc: "company1.png", // Replace with the image source for Company 1
    },
    {
      name: "Company 2",
      logoSrc: "company2.png", // Replace with the image source for Company 2
    },
    {
      name: "Company 3",
      logoSrc: "company2.png", // Replace with the image source for Company 2
    },
    // Add more partner logos as needed
  ];

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold">Our Partners</h2>
      <div className="flex mt-10 gap-5">
        {partnerLogos.map((partner, index) => (
          <div key={index} className="partner-logo">
            <img src={partner.logoSrc} alt={partner.name} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
