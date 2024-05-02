import { renderNav } from "../layouts/nav";
import { renderFooter } from "../components/footer.js";
import { renderCardTeam } from "../components/cardTeam.js";

//recuperer 1 services
const getService = async () => {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");

  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getService.php?id=${id}`);
  const team = await response.json();
  return team;
};

//recuperer tous les presataires
const getTeams = async () => {
  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getTeams.php`);
  const teams = await response.json();
  return teams;
};

let service = await getService();
let teams = await getTeams();

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100  p-5">
  <div class="max-w-3xl  m-auto">
    <div class="my-5">
      <h1 class="text-xl font-bold my-5"> ${service.title}</h1>
      <h2 class="font-medium text-lg">Description</h2>
      <p class="text-gray-500">${service.description}</p>
    </div>
    <h2 class="font-medium text-lg">Prestataire</h2>
    <div class="flex gap-5 overflow-scroll p-5">
    ${teams
      .map((team) => {
        return `
      ${renderCardTeam(team.prenom, team.age, team.img, team.id)}
      `;
      })
      .join("")}
  </div>
  </div>

</main>
${renderFooter()}
`;
