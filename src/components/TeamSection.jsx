import React from "react";
import magdaProfile from "../assets/magdab.png";
import stellaProfile from "../assets/stellaz.jpg";
import annaProfile from "../assets/annas.jpg";
import TeamMember from "./TeamMember";

const teachers = [
  {
    name: "Magda B",
    designation: "Math Teacher",
    image: magdaProfile,
    orderNumber: "item1",
  },
  {
    name: "Stella Z",
    designation: "Science Teacher",
    image: stellaProfile,
    orderNumber: "item2",
  },
  {
    name: "Anna S",
    designation: "Science Teacher",
    image: annaProfile,
    orderNumber: "item3",
  },
];

const TeamSection = () => {
  return (
    <section className="team-section p-8">
      <h2 className="text-3xl font-bold ">Our Teachers</h2>
      <div className="flex carousel rounded-box">
        {teachers.map((teacher, index) => (
          <TeamMember
            key={index}
            name={teacher.name}
            designation={teacher.designation}
            image={teacher.image}
            orderNumber={teacher.orderNumber}
          />
        ))}
      </div>
      <div className="flex w-full  gap-2">
        <a href="#item1" className="btn btn-outline btn-xs rounded-full">
          1
        </a>
        <a href="#item2" className="btn btn-outline btn-xs rounded-full">
          2
        </a>
        <a href="#item3" className="btn btn-outline btn-xs rounded-full">
          3
        </a>
      </div>
    </section>
  );
};

export default TeamSection;
