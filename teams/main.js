import { renderNav } from "../layouts/nav";
import { renderCardTeam } from "../components/cardTeam.js";
import { renderFooter } from "../components/footer.js";

const getTeams = async () => {
  const url = new URL(import.meta.env.VITE_BASE_URL_API);
  const response = await fetch(`${url}getTeams.php`);
  const teams = await response.json();
  return teams;
};

let teams = await getTeams();

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100  p-5">

<ul class="flex gap-3 justify-center flex-wrap">
${teams
  .map((team) => {
    return `
        ${renderCardTeam(team.prenom, team.age, team.img, team.id)}
        `;
  })
  .join("")}
</ul>
</main>
${renderFooter()}
`;
