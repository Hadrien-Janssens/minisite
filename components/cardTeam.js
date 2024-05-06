import { nombreAvis, renderMoyenne } from "../functions/starAverage";

export function renderCardTeam(team) {
  // const url = new URL(import.meta.env.VITE_BASE_URL);
  const url = "http://localhost:5173/";

  //gestion de la moyenne des stars
  let starAverage = renderMoyenne(team.star);
  let avis = nombreAvis(team.star);
  return `
<li class=" border bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
     <figure class="w-full h-48 overflow-hidden rounded-t-md">
         <img src="${team.img}" alt="" class="h-48 w-full">
     </figure>
     <div>
        <div class="flex justify-between">
           <h4 class=" px-5 py-2 ">${team.prenom}</h4>
           <p class="px-5 py-2 text-sm text-gray-600">${team.age} ans</p>
        </div>
        <div class="px-5 flex justify-between">
        <div class="text-sm italic ">${starAverage} </div>
        <div class="text-sm">Avis (${avis})</div>
        </div>
        <div class="m-2 flex justify-end">
          <a href="${url}team/?id=${team.id}"><button
           class="border relative bg-blue-500 duration-200 hover:bg-blue-600 text-white rounded   py-1 px-2">Découvrir</button></a>
        </div>
    </div>
</li>
          `;
}
