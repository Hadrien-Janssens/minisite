import { renderNav } from "../layouts/nav";
import { renderFooter } from "../components/footer.js";

const getTeam = async () => {
  let params = new URL(document.location).searchParams;
  let id = params.get("id");

  const url = new URL(import.meta.env.VITE_BASE_URL_API);
  const response = await fetch(`${url}getTeam.php?id=${id}`);
  const team = await response.json();
  return team;
};

let team = await getTeam();
console.log(team);

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100  p-5">
<div class="max-w-3xl flex sm:flex-row flex-col justify-between gap-5 m-auto">
  <figure class="basis-3/6">
    <img src="${team.img}" />
  </figure>
  <div class="basis-3/6   ">
    <div class="flex justify-between items-center mb-5">
      <div>
        <h1 class="text-xl font-medium">${team.prenom}</h1>
      </div>    
      <div>
        <p class="italic text-gray-600">${team.age} ans</p>
      </div>
    </div>
    <h2 class="text-lg">Tarif : <span class="text-sm">${
      team.tarif
    }€ / h</span></h2>
    <h2 class="text-lg">Métiers : </h2>
    <span class="text-sm">${team.job
      .map((job) => {
        return `
        <button class="border px-3 py-1 text-white bg-blue-500 rounded-3xl duration-200 hover:bg-blue-600">${job}</button>
      `;
      })
      .join("")}</span>

    
  </div>

  </div>
  <div class="max-w-3xl m-auto">
    <h2 class="text-lg mt-5">Description</h2>
    <p class="text-gray-500 text-justify">${team.description ?? ""}</p>
  </div>
</main>
${renderFooter()}
`;
