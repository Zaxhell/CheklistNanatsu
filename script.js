const items = document.querySelectorAll("#checklist li");

// Carrega o estado salvo no LocalStorage
const savedState = JSON.parse(localStorage.getItem("checklistState")) || [];
items.forEach((item, index) => {
  if (savedState[index]) {
    item.classList.add("watched");
  }

  // Clique para alternar
  item.addEventListener("click", () => {
    item.classList.toggle("watched");
    savedState[index] = item.classList.contains("watched");
    localStorage.setItem("checklistState", JSON.stringify(savedState));
  });
});