import React from "react";
import { Image, Transformation } from "cloudinary-react";
import CustomButton from "../customButton/CustomButton";
import { useNavigate } from "react-router-dom";

const CustomServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleNavigate = (serviceName) => {
    navigate(`/request-category/${serviceName}`);
  };
  return (
    <div
      className="w-[100%] pb-2 rounded-bl-3xl rounded-br-3xl bg-white rounded-tl-2xl rounded-tr-2xl"
      key={service.id}
      onClick={() => {
        handleServiceClick(service.slug_name);
      }}
    >
      <Image
        className="w-[100%] rounded-tl-2xl rounded-tr-2xl"
        cloudName="petaverse"
        publicId={service.category_image_url}
      >
        <Transformation crop="scale" width="260" />
      </Image>
      <div className=" text-left py-4 px-4">
        <p className="text-2xl font-bold">{service.category_name}</p>
        <p className=" mt-2">{service.category_details}</p>
      </div>
      <div className="px-4 ">
        <CustomButton
          title="Post this request"
          btnOnClick={() => handleNavigate(service.slug_name)}
        />
      </div>
    </div>
  );
};

export default CustomServiceCard;
