import { items } from "./items.js";


export function renderItems(list) {
  const listElement = document.querySelector("#list");

  listElement.replaceChildren();

  for (const item of list) {
    const line = document.createElement("li");

    line.classList.add("stock-line");
    line.textContent = `${item.name} (${item.category})`;

    listElement.append(line);
  }
}


export function matching() {
  return items.filter((item) => item.category === "kitchen");
}


export function start() {
  renderItems(items);

  const button = document.querySelector("#apply");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}
