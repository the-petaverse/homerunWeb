export const customScrollSidebar = () => {
  let sidebar = document.getElementsByClassName("sidebar")[0];
  let sidebar_content = document.getElementsByClassName(
    "service-right-container"
  )[0];

  window.onscroll = () => {
    let scrollTop = window.scrollY;
    let viewportHeight = window.innerHeight;
    let contentHeight = sidebar_content.getBoundingClientRect().height;
    let sidebarTop = sidebar.getBoundingClientRect().top + window.pageYOffset;

    if (scrollTop >= contentHeight - viewportHeight) {
      sidebar_content.style.transform = `translateY(-${
        viewportHeight - viewportHeight + sidebarTop
      }px)`;
      sidebar_content.style.position = "fixed";
    } else {
      sidebar_content.style.transform = "";
      sidebar_content.style.position = "";
    }
  };
};
