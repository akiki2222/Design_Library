const filters = document.querySelectorAll(".filter button");
const items = document.querySelectorAll(".works-item");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.textContent.toLowerCase();

    items.forEach((item) => {
      if (selected === "all" || item.dataset.category === selected) {
        item.classList.remove("inactive");
      } else {
        item.classList.add("inactive");
      }
    });
  });
});
