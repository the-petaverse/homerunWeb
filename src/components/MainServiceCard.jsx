import { Image, Transformation } from "cloudinary-react";
import React from "react";
import ComigSoonOverlay from "./ComigSoonOverlay";

const MainServiceCard = ({ service, handleNavigate }) => {
  return (
    <div
      className="w-[56dvw] flex flex-col laptop:flex-row mt-10 border rounded-3xl"
      key={service.id}
    >
      <div className="relative h-[100%] w-[100%] laptop:w-[40%] ">
        <Image
          className="w-full rounded-t-3xl laptop:rounded-l-3xl"
          cloudName="petaverse"
          publicId={service.category_image_url}
        >
          <Transformation crop="scale" width="320" />
        </Image>
        <ComigSoonOverlay />
      </div>
      <div className="w-[100%] laptop:w-[100%]  p-5 flex flex-col justify-between  laptop:rounded-r-3xl rounded-b-3xl">
        {/* <div className="card-right-holder"> */}
        <h1 className="font-sans text-3xl tablet:text-4xl font-bold">
          {service.category_name}
        </h1>
        <p className="text-xl">{service.category_details}</p>
        <div className="service-btn">
          <button onClick={() => handleNavigate(service.slug_name)}>
            Post this request
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainServiceCard;
