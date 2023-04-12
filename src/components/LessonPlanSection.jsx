import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/school-bell-lottie.json"; // Replace with your Lottie animation JSON file

const LessonPlanSection = () => {
  // Lesson plan data
  const lessonPlanData = [
    {
      day: "Friday",
      class: "class 1",
      group: "Group IV, Group V",
      hours: "2:00 PM - 5:00 PM",
    },
    {
      day: "Saturday",
      class: "class 1, class 3",
      group: "Group IV, Group VI, GCSE Group",
      hours: "10:00 AM - 1:00 PM",
    },
    // Add more lesson plan data as needed
  ];

  return (
    <section className="p-8 bg-slate-100">
      <div className="flex items-center ">
        <h2 className="text-3xl font-bold">Timetable</h2>
        <Lottie animationData={animationData} className="w-1/6" />
      </div>
      <div className="">
        <ul className="flex justify-between">
          {lessonPlanData.map((lesson, index) => (
            <li key={index}>
              <div className="lesson-day">{lesson.day}</div>
              <div className="lesson-hours">{lesson.hours}</div>
              <div className="lesson-subject">{lesson.subject}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default LessonPlanSection;
