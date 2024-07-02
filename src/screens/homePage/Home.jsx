import React from "react";
import HeroPage from "../../components/heropage/HeroPage";
import Testimonial from "../../components/testimonial/Testimonial";
import Services from "../services/Services";
import ClientTestimonials from "../../components/clientTestimonials/ClientTestimonials";
import ServicesSummary from "../../components/servicesSummary/ServicesSummary";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Testimonial />
      <ServicesSummary />
      {/* <Services /> */}

      <ClientTestimonials />
      {/* <WhyHomeRun /> */}
    </>
  );
};

export default Home;
