import { renderNav } from "../layouts/nav";
import { renderFooter } from "../components/footer.js";
import { nombreAvis, renderMoyenne } from "../functions/starAverage.js";
import { renderCardAvis } from "../components/cardAvis.js";

//recuperer un equipier
const getTeam = async () => {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");

  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getTeam.php?id=${id}`);
  const team = await response.json();
  return team;
};
//recuperer les avis de cet equipier
const getavis = async () => {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");

  const url = new URL(import.meta.env.VITE_BASE_URL);
  const response = await fetch(`${url}api/getOneAvis.php?id=${id}`);
  const tableauAvis = await response.json();
  return tableauAvis;
};

let team = await getTeam();
let tableauAvis = await getavis();

let avis = nombreAvis(team.star);
let moyenne = renderMoyenne(team.star);

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100  p-5">
<div class="max-w-3xl flex sm:flex-row flex-col justify-between gap-5 m-auto">
  <figure class="basis-3/6">
    <img src="${team.img}" />
  </figure>
  <div class="basis-3/6   ">
    <div class="flex justify-between  mb-5">
      <div>
        <h1 class="text-xl font-medium">${team.prenom}</h1>
        <p class="italic text-gray-600">${team.age} ans</p>
      </div>    
      <div>
        <a href="#avis"><h2 class="text-lg">${moyenne} <span class="pl-2">avis (${avis})</span> </h2></a>
        
      </div>
    </div>

    <h2 class="text-lg">Métiers : </h2>
    <span class="text-sm">${team.job
      .map((job) => {
        return `
        <button class="border px-3 py-1 text-white bg-blue-500 rounded-3xl duration-200 hover:bg-blue-600">${job}</button>
      `;
      })
      .join("")}</span>
      <h2 class="text-lg mt-3">Tarif : <span class="text-sm">${
        team.tarif
      }€ / h</span></h2>
  </div>

  </div>
  <div class="max-w-3xl m-auto">
    <h2 class="text-lg mt-5">Description</h2>
    <p class="text-gray-500 text-justify">${team.description ?? ""}</p>
  </div>
  <div class="max-w-3xl m-auto">
    <h2 class="text-lg mt-5" id="avis">Avis</h2>
    <div class="flex gap-3 overflow-scroll p-10">
    ${tableauAvis
      .map((avis) =>
        renderCardAvis(
          avis.star,
          avis.prenom,
          avis.ville,
          avis.message,
          avis.day,
          avis.month,
          avis.year
        )
      )
      .join("")}
      </div>
  </div>
</main>
${renderFooter()}
`;
