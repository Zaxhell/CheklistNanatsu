const checklists = document.querySelectorAll("ul");

checklists.forEach((list, listIndex) => {
  const items = list.querySelectorAll("li");

  // Carrega o estado salvo para cada lista
  const savedState = JSON.parse(localStorage.getItem("checklistState" + listIndex)) || [];

  items.forEach((item, index) => {
    if (savedState[index]) {
      item.classList.add("watched");
    }

    // Clique para alternar
    item.addEventListener("click", () => {
      item.classList.toggle("watched");
      savedState[index] = item.classList.contains("watched");
      localStorage.setItem("checklistState" + listIndex, JSON.stringify(savedState));
    });
  });
});
