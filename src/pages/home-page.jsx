import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React from "react";
import TeamSection from "../components/TeamSection";
import LessonPlanSection from "../components/LessonPlanSection";
import PartnersSection from "../components/PartnersSections";
import bannerMain from "../assets/banner_poloniusz.png";
import TestimonialSection from "../components/TestimonialSection";
export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <TeamSection />
      {/* TODO: add news section to display newest posts on main page */}
      <PartnersSection />
      <LessonPlanSection />
      <TestimonialSection />
      <Footer />
    </React.Fragment>
  );
}
