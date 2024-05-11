import { renderFilterButton } from "./filterButton";

export function renderFilter() {
  return `
  <div class=" p-5">
         <p class="m-2 text-gray-600 inline">Trié par : </p>
         ${renderFilterButton("nom")}
         ${renderFilterButton("etoile")}
         ${renderFilterButton("métier")}
  </div>
            `;
}
