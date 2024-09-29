export const filterSubCategory = (subServicesData, categoryId) => {
  if (categoryId) {
    let filteredSubCategory = subServicesData?.serviceSubCategory.filter(
      (subCategoryData) => subCategoryData?.main_category_id === categoryId
    );
    return filteredSubCategory;
  }
};
