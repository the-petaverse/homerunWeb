import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import MainSideBar from "../../components/mainSideBar/MainSideBar";
import Logo from "../../assets/logo.png";
import "./CategoriesDetailPage.css";

const servicesList = [
  {
    id: "1",
    category: "documents",
    title: "Passport Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "2",
    category: "documents",
    title: "Transcript Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "3",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "4",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "5",
    category: "hospitality",
    title: "Groceries Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
  {
    id: "6",
    category: "documents",
    title: "Certificates Collection",
    description:
      "Share your services or product offerings here. Present them assimple headers that can lead",
  },
];
const CategoriesDetailPage = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const { category } = useParams();

  const filterCategoryList = () => {
    let filteredCategory = servicesList.filter(
      (categoryData) => categoryData.category === category
    );

    setCategoryList(filteredCategory);
  };

  const handleCloseSideBar = () => {
    setOpenSideBar(false);
  };
  const handleOpenSideBar = () => {
    setOpenSideBar(true);
  };

  useEffect(() => {
    filterCategoryList();
  }, []);

  return (
    <div>
      <Navbar handleOpenSideBar={handleOpenSideBar} />
      <div className="category-detail-main-container">
        <div className="category-header-wrapper">
          <h1>{category}</h1>
        </div>
        <div className="cat-card-parent-wrapper">
          {categoryList &&
            categoryList.map((ctegoryData, index) => {
              return (
                <Link to={"/request/" + ctegoryData.id} key={index}>
                  <div className="main-category-card-container">
                    <img src={Logo} alt="category" className="category-image" />
                    <div className="category-card-wrapper">
                      <h4>{ctegoryData.title}</h4>
                      <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit.{" "}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </div>
      <MainSideBar
        handleOpenSideBar={handleOpenSideBar}
        handleCloseSideBar={handleCloseSideBar}
        openSideBar={openSideBar}
      />
      <Footer />
    </div>
  );
};

export default CategoriesDetailPage;
