import { renderNav } from "../layouts/nav";
import { renderCardTeam } from "../components/cardTeam.js";
import { renderFooter } from "../components/footer.js";
import { renderSearchBar } from "../components/searchBar.js";

//recuperer tous les presataires
const getTeams = async () => {
  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getTeams.php`);
  const teams = await response.json();
  return teams;
};

let teams = await getTeams();

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100  p-5">
${renderSearchBar()}
<div id="listing"></div>
</main>
`;
function renderTeams(searchParams) {
  document.querySelector("#listing").innerHTML = `

<ul class="flex gap-3 justify-center flex-wrap">
${
  // quand il n'y a riend l'input
  searchParams === undefined
    ? teams
        .map((team) => {
          return `
        ${renderCardTeam(team.prenom, team.age, team.img, team.id)}
        `;
        })
        .join("")
    : teams
        .filter(
          (team) =>
            removeAccents(team.prenom.toLowerCase()).includes(
              removeAccents(searchParams.toLowerCase())
            ) ||
            //chatGPT m'a aidé pour le .some et pour la function removeAccent, j'avoue ...
            team.job.some((j) =>
              removeAccents(j.toLowerCase()).includes(
                removeAccents(searchParams.toLowerCase())
              )
            )
        )
        .map((team) => {
          return `
          ${renderCardTeam(team.prenom, team.age, team.img, team.id)}
          `;
        })
        .join("")
}

</ul>

${renderFooter()}
`;
}
renderTeams();
search();

function search() {
  const searchInput = document.querySelector("#search");
  searchInput.addEventListener("input", (e) => {
    renderTeams(e.target.value);
  });
}
function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
