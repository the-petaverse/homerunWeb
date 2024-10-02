export const periodOfTheDay = () => {
  var date = new Date();
  var hours = date.getHours();

  let message;

  let colorStyle = {
    color: "green",
  };

  if (hours < 12) {
    colorStyle.color = "red";
    message = "Good Morning";
  } else if (hours < 18) {
    colorStyle.color = "green";
    message = "Good Afternoon";
  } else {
    colorStyle.color = "blue";
    message = "Good Evening";
  }
  return message;
};
