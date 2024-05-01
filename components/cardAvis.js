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
  //gerer la date
  function transformerFormatAge(day, month, year) {
    let months = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];
    for (let i = 0; i < months.length; i++) {
      if (month === months[i]) {
        months = i;
        break;
      }
    }
    if (months < 10) {
      months = `0${months}`;
    }
    let dateNaissance = `${year}-${months}-${day}`;
    return dateNaissance;
  }
  const dateNaissance = transformerFormatAge(day, month, year);

  function calculerAge(dateNaissance) {
    const dateActuelle = new Date();
    const naissance = new Date(dateNaissance);
    let age = dateActuelle.getFullYear() - naissance.getFullYear();
    const moisActuel = dateActuelle.getMonth();
    const moisNaissance = naissance.getMonth();

    if (
      moisActuel < moisNaissance ||
      (moisActuel === moisNaissance &&
        dateActuelle.getDate() < naissance.getDate())
    ) {
      age--;
    }

    return age;
  }
  const age = calculerAge(dateNaissance);

  return `
    <li class=" px-5 py-2 relative border bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
    <p>
    ${renderstar(star)
      .map(
        (star) => `<i class="fa-regular fa-star fa-solid text-yellow-500"></i>`
      )
      .join("")}

    </p>    
    <h4 class=" text-md">${prenom},  <span class="text-gray-600 text-sm">${age} ans</span></h4>
    <p class="text-sm italic text-slate-500">de ${ville}</p>
    <p class="pt-5 text-sm text-gray-600 text-center">${message}</p>
 
   
  </li>
          `;
}
