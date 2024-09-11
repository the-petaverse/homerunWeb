export const filterSubCategory = (data, category) => {
  if (category) {
    let filteredSubCategory = data.filter(
      (subCategoryData) => subCategoryData?.slug === category
    );

    return filteredSubCategory;
  }
};
