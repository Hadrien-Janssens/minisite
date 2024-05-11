//gestion de la moyenne des stars
export function starAverage(star) {
  if (star !== undefined && Array.isArray(star)) {
    let nombreDeNote = star.length;
    let somme = 0;
    star.forEach((s) => {
      somme += parseInt(s);
    });
    return somme / nombreDeNote;
  } else {
    return [0];
  }
}
export function nombreAvis(star) {
  if (star !== undefined) {
    let nombreAvis = star.length;
    return nombreAvis;
  } else {
    return 0;
  }
}

export function renderMoyenne(star) {
  let moyenne = starAverage(star);
  moyenne = Math.round(moyenne);
  if (moyenne < 1) {
    return "note indisponible";
  }
  let rendu = ``;
  for (let i = 0; i < moyenne; i++) {
    rendu += `<i class="fa-regular fa-star fa-solid text-yellow-500"></i>`;
  }
  return rendu;
}
