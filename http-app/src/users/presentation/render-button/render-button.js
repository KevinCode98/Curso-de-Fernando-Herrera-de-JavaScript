import "./render-button.css";
import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";

/**
 *
 * @param {HTMLDivElement} element
 */
export const renderButton = (element) => {
  const nextButton = document.createElement("Button");
  nextButton.innerHTML = "Next →";

  const prevButton = document.createElement("Button");
  prevButton.innerHTML = "← Prev";

  const currentPageLavel = document.createElement("span");
  currentPageLavel.id = "current-page";
  currentPageLavel.innerText = usersStore.getCurrentPage();

  element.append(prevButton, currentPageLavel, nextButton);

  nextButton.addEventListener("click", async () => {
    await usersStore.loadNextPage();
    currentPageLavel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });

  prevButton.addEventListener("click", async () => {
    await usersStore.loadPreviousPage();
    currentPageLavel.innerText = usersStore.getCurrentPage();
    renderTable(element);
  });
};
