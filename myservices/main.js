import "../style.css";
import { renderNav } from "../layouts/nav";
import { renderCardService } from "../components/cardService.js";

//recuperer les services
const getServices = async () => {
  let url = new URL(import.meta.env.VITE_BASE_URL_API);

  const response = await fetch(`${url}services.php`);
  const services = await response.json();
  return services;
};

//gerer le rendu
const render = async () => {
  //attendre d'avoir la response avant de rendre
  const services = await getServices();
  //rendre
  document.querySelector("#app").innerHTML = `
    ${renderNav()}
    <main class="bg-slate-100 min-h-screen p-5">
    <ul class="flex gap-3 justify-center flex-wrap">
    ${services
      .map((service) => {
        return `
        ${renderCardService(service.title, service.description)}
        `;
      })
      .join("")}
      
      </ul>
    </main>
    `;
};
render();
