import React from "react";
import { Image, Transformation } from "cloudinary-react";
import CustomButton from "../customButton/CustomButton";
import { useNavigate } from "react-router-dom";
import { useLoaderContext } from "../../customHooks/useLoaderContext";
import DashboardServiceBtn from "../dasboardServiceBtn/DashboardServiceBtn";

const CustomServiceCard = ({ service }) => {
  const navigate = useNavigate();
  const loader = useLoaderContext();

  const handleNavigate = (serviceName) => {
    // loader.start();
    navigate(`/request-category/${serviceName}`);
  };
  return (
    <div
      className="w-[100%] h-[80%] rounded-bl-3xl rounded-br-3xl bg-white rounded-tl-2xl rounded-tr-2xl flex flex-col justify-between pb-3"
      key={service.id}
    >
      <Image
        className="w-[100%] h-[40%] rounded-tl-2xl rounded-tr-2xl"
        cloudName="petaverse"
        publicId={service.category_image_url}
      >
        <Transformation crop="scale" width="260" />
      </Image>
      <div className=" text-left py-4 px-4">
        <p className="text-2xl font-bold">{service.category_name}</p>
        <p className=" mt-2">{service.category_details}</p>
      </div>
      <div className="px-4">
        <DashboardServiceBtn
          title="Post this request"
          btnOnClick={() => handleNavigate(service.slug_name)}
        />
      </div>
    </div>
  );
};

export default CustomServiceCard;
