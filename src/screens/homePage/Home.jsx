import React from "react";
import HeroPage from "../../components/heropage/HeroPage";
import Testimonial from "../../components/testimonial/Testimonial";
import Services from "../services/Services";
import ClientTestimonials from "../../components/clientTestimonials/ClientTestimonials";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Testimonial />
      <Services />
      <ClientTestimonials />
      {/* <WhyHomeRun /> */}
    </>
  );
};

export default Home;
