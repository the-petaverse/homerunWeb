export const handleServiceClick = (serviceName, navigate) => {
  if (
    serviceName === "surprise_gifts" ||
    serviceName === "grocery_food" ||
    serviceName === "hotel_car_booking"
  ) {
    navigate(`/`);
  } else {
    navigate(`/request-category/${serviceName}`);
  }
};
