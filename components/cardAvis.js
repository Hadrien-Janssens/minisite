import { calculerAge, transformerFormatAge } from "../functions/gestionAge";

export function renderCardAvis(star, prenom, ville, message, day, month, year) {
  //gerer le nombre d'etoile
  const renderstar = (star) => {
    const starArray = [];
    for (let i = 0; i < star; i++) {
      starArray.push(1);
    }
    starArray;

    return starArray;
  };

  //gerer l'age
  const dateNaissance = transformerFormatAge(day, month, year);
  const age = calculerAge(dateNaissance);

  //rendu
  return `
    <li class=" px-5 py-2 relative border max-w-96 bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
    <p>
    ${renderstar(star)
      .map(() => `<i class="fa-regular fa-star fa-solid text-yellow-500"></i>`)
      .join("")}

    </p>    
    <h4 class=" text-md">${prenom},  <span class="text-gray-600 text-sm">${age} ans</span></h4>
    <p class="text-sm italic text-slate-500">de ${ville}</p>
    <p class="pt-5 text-sm text-gray-600 text-center">${message}</p>
 
   
  </li>
          `;
}
