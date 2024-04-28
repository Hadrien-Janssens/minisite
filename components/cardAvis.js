export function renderCardAvis(title, description) {
  return `
    <li class=" px-5 py-2 relative border bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
    <p>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    <i class="fa-regular fa-star"></i>
    </p>    
    <h4 class=" text-md">${title}</h4>
    <p class="text-sm italic text-slate-500">de Charleroi</p>
    <p class="pt-5 text-sm text-gray-600 text-center">${description}</p>
 
   
  </li>
          `;
}
