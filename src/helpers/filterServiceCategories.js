//Filter service categories:
export const filteredServiceCategory = (categoryData, category) => {
  const filteredCategory = categoryData?.serviceCategory?.filter(
    (filteredService) => filteredService.slug_name === category
  );
  return filteredCategory;
};
