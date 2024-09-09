import React from "react";
import HeroPage from "../../../components/heropage/HeroPage";
import Testimonial from "../../../components/testimonial/Testimonial";
// import Services from "../services/Services";
import ClientTestimonials from "../../../components/clientTestimonials/ClientTestimonials";
// import ServicesSummary from "../../components/servicesSummary/ServicesSummary";
// import { useGetUsersQuery } from "../../services/auth/authApi";
import Cookies from "universal-cookie";
import EverythinYouNeed from "../../../components/everything/EverythinYouNeed";
import Sustainability from "../../../components/sustainability/Sustainability";
// import Modal from "../../components/modal/Modal";
import Faq from "../../../components/faq/Faq";
import './Home.css'
const Home = () => {
  return (
    <div className="home-container">
      <HeroPage />
      <Testimonial />
      <EverythinYouNeed />
      <ClientTestimonials />
      <Sustainability />
      <Faq />
    </div>
  );
};

export default Home;
