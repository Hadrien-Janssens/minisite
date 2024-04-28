export function renderCardTeam(prenom, age, img) {
  return `
<li class=" border bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
     <figure class="w-full h-48 overflow-hidden rounded-t-md">
         <img src="${img}" alt="" class="h-48 w-full">
     </figure>
     <div>
        <div class="flex justify-between">
           <h4 class=" px-5 py-2 ">${prenom}</h4>
           <p class="px-5 py-2 text-sm text-gray-600">${age} ans</p>
        </div>
        <div class="m-2 flex justify-end">
          <button
           class="border relative bg-blue-500 duration-200 hover:bg-blue-600 text-white rounded   py-1 px-2">Découvrir</button>
        </div>
    </div>
</li>
          `;
}
