import React, { createContext, useEffect } from "react";

const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
  const [order, setOrder] = useState(() => {
    // Load initial data from localStorage if available
    const storedOrder = localStorage.getItem("user_order");
    return storedOrder ? JSON.parse(storedOrder) : null;
  });

  // Update localStorage whenever data changes
  useEffect(() => {
    if (order) {
      localStorage.setItem("user_order", JSON.stringify(order));
    }
  }, [order]);
  return (
    <OrderContext.Provider value={{ order, setOrder }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextProvider;
