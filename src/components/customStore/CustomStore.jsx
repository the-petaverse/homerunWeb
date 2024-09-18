import React, { useState } from "react";
import "./CustomStore.css";
import { Gift } from "iconsax-react";
import GiftCard from "../giftCard/GiftCard";
import ProceedToCheckout from "../proceedToCheckout/ProceedToCheckout";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

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
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
  {
    id: "5",
    name: "Iphone 14 pro max",
    details: "Lorem Ipsun dolor",
    image: "/images/vase.png",
  },
];

const categoryData = [
  { id: "1", title: "Home" },
  { id: "2", title: "Chocolates and Sweets" },
  { id: "3", title: "Jewelry and Accessories" },
  { id: "4", title: "Tech Gadgets" },
  { id: "5", title: "Electronics" },
  { id: "6", title: "Books and Stationery" },
  { id: "7", title: "Home Decor" },
  { id: "8", title: "Fashion and Apparel" },
  { id: "9", title: "Toys and Games" },
  { id: "10", title: "Wine and Spirits" },
  { id: "11", title: "Handmade Items" },
];
const CustomStore = () => {
  const { subcategory } = useParams();
  const cart = useSelector((state) => state.cart);
  const [productCategory, setProductCategory] = useState("Home");
  const location = useLocation();
  const { category } = location?.state || [];

  console.log(subcategory);
  const showProductCategory = (category) => {
    setProductCategory(category);
  };
  return (
    <div className="gifts-container">
      <div className="gift-left-side-navigation">
        <h2>Categories</h2>
        {categoryData &&
          categoryData.map((catTitle, index) => {
            return (
              <ul className="surprise-gift-product-list-wrapper">
                <li
                  key={index}
                  onClick={() => showProductCategory(catTitle.title)}
                >
                  {catTitle.title}
                </li>
              </ul>
            );
          })}
      </div>
      <div className="gift-right-container">
        {productCategory === "Home" && (
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
        )}
        <div className="gift-items-product-header-wrapper">
          <h3>
            {productCategory === "Home" ? "Popular Gifts" : productCategory}
          </h3>
        </div>
        {productCategory === "Home" && (
          <section className="product-list-wrapper">
            {listProducts &&
              listProducts.map((product, index) => {
                return <GiftCard product={product} index={index} />;
              })}
          </section>
        )}

        {productCategory === "Chocolates and Sweets" && (
          <section className="product-list-wrapper">
            {listProducts &&
              listProducts.map((product, index) => {
                return <GiftCard product={product} index={index} />;
              })}
          </section>
        )}
      </div>
      {cart.cartItems && cart?.cartItems.length > 0 && (
        <div className="proceed-to-checkout-outer-wrapper">
          <ProceedToCheckout category={category} subcategory={subcategory} />
        </div>
      )}
    </div>
  );
};

export default CustomStore;
