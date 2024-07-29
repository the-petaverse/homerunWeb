import React from "react";
import HeroPage from "../../components/heropage/HeroPage";
import Testimonial from "../../components/testimonial/Testimonial";
import Services from "../services/Services";
import ClientTestimonials from "../../components/clientTestimonials/ClientTestimonials";
import ServicesSummary from "../../components/servicesSummary/ServicesSummary";
import { useGetUsersQuery } from "../../services/auth/authApi";
import Cookies from "universal-cookie";

const Home = () => {
  return (
    <>
      <HeroPage />
      <Testimonial />
      <ServicesSummary />
      <ClientTestimonials />
    </>
  );
};

export default Home;
