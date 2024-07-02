import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

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
  const [categoryList, setCategoryList] = useState([]);
  const { category } = useParams();

  const filterCategoryList = () => {
    let filteredCategory = servicesList.filter(
      (categoryData) => categoryData.category === category
    );

    setCategoryList(filteredCategory);
  };

  useEffect(() => {
    filterCategoryList();
  }, []);
  return (
    <div>
      {categoryList &&
        categoryList.map((ctegoryData, index) => {
          return (
            <>
              <h1>{ctegoryData.title}</h1>
              <Link to={"/request/" + ctegoryData.id}>Click for Details</Link>
            </>
          );
        })}
    </div>
  );
};

export default CategoriesDetailPage;
