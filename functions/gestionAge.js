//gerer la date
export function transformerFormatAge(day, month, year) {
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
  for (let i = 0; i <= months.length; i++) {
    if (month === months[i]) {
      months = i + 1;
      break;
    }
  }
  if (months < 10) {
    months = `0${months}`;
    months = parseInt(months);
  }

  let dateNaissance = new Date(year, months, day);
  return dateNaissance;
}

export function calculerAge(dateNaissance) {
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
