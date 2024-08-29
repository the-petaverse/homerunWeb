import React from "react";
import "./CustomStore.css";

const listProducts = [
  {
    id: "1",
    name: "Sonera Gold Necklace",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "2",
    name: "Rolex 460 Watch",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "3",
    name: "Mackbook Pro",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "4",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
];
const CustomStore = () => {
  return (
    <div className="gifts-container">
      <div className="gift-left-side-navigation">
        <h2>Categories</h2>
        <ul>
          <li>Hone</li>
          <li>Chocolates and Sweets</li>
          <li>Jewelry and Accessories</li>
          <li>Tech Gadgets</li>
          <li>Electronics</li>
          <li>Books and Stationery</li>
          <li>Home Decor</li>
          <li>Fashion and Apparel</li>
          <li>Toys and Games</li>
          <li>Wine and Spirits</li>
          <li>Handmade Items</li>
        </ul>
      </div>
      <div className="gift-right-container">
        <div className="store-header-wrapper">
          <div className="header-image-wrapper">
            <img
              src="/images/store-banner.png"
              alt="store"
              className="person-header-image"
            />
          </div>
          <div className="request-personalized-store-card">
            <div className="">
              <img src="/images/diamond-gift-2.png" alt="surprise" />
            </div>
            <h3>Request Personalized Gift Items</h3>
            <div className="personalized-btn-wrapper">
              <button className="personalized-btn">Make Request</button>
            </div>
          </div>
        </div>
        <section className="product-list-wrapper">
          {listProducts &&
            listProducts.map((product, index) => {
              return (
                <div className="product-list-card">
                  <input type="checkbox" value={product.name} />
                  <img src="/images/vase.png" alt="" />
                  <div className="list-content-wrapper">
                    <h4>{product.name}</h4>
                    <p>{product.details}</p>
                    <div className="list-price-wrapper">
                      <span>$1.17</span>
                      <span>+</span>
                    </div>
                  </div>
                </div>
              );
            })}
        </section>
      </div>
    </div>
  );
};

export default CustomStore;
