import { renderFooter } from "../components/footer";
import { renderNav } from "../layouts/nav";

const years = [];
for (let i = 2024; i >= 1910; i--) {
  years.push(i);
}
const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}
const months = [
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

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 p-5">
<form class="m-auto max-w-96 mt-10 bg-white pt-5 rounded shadow"  >
    <h1 class="text-xl font-medium px-5">Laissez nous votre avis</h1>
    <h2 class="text-gray-400 font-medium mb-4 px-5">Que vous soyez satisfait ou pas</h2>
    <div class="px-5 border-t  ">
        <div class="flex gap-3 mt-3 ">
        <div>
            <input
            type="text"
            placeholder="Prénom"
            name="prenom"
            class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
            />
            </div>
            <div>
            <input
            type="text"
            placeholder="Nom de famille"
            name="nom"
            class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
            />
            </div>
        </div>
        <input
        type="text"
        placeholder="Adresse e-mail"
        name="email"
        class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
        />
        <input
        type="text"
        placeholder="ville"
        name="ville"
        class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
        />
        <label class="text-sm text-gray-500">Date de naissance</label>
        <div class="flex gap-3 mb-3">
          <select 
          class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3" 
          >
            ${days.map((day) => {
              return ` <option key=${day} value=${day} name="day">
              ${day}
            </option>`;
            })}
          </select>
         
          <select 
          class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3" 
          >
            ${months.map((month) => {
              return ` <option key=${month} value=${month} name="month">
              ${month}
            </option>`;
            })}
          </select>
         
          <select 
          class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3" 
          >
            ${years.map((year) => {
              return ` <option key=${year} value=${year} name="year">
              ${year}
            </option>`;
            })}
          </select>
        
        </div>
        <div class="text-sm text-gray-500 ">Score : 
        <input type="radio" id="star1" name="star" class="hidden" value=1 />
        <label for="star1"><i class="fa-regular fa-star"></i></label>  <input type="radio" id="star2" name="star" value=2 class="hidden" />
        <label for="star2"><i class="fa-regular fa-star"></i></label>
        <input type="radio" id="star3" value=3 name="star" class="hidden" />
        <label for="star3"><i class="fa-regular fa-star fa-solid text-red-600"></i></label>
        <input type="radio" id="star4" value=4 name="star" class="hidden" />
        <label for="star4"><i class="fa-regular fa-star"></i></label>
        <input type="radio" id="star5" name="star" value=5 class="hidden" />
        <label for="star5"><i class="fa-regular fa-star"></i></label>
        
       
        </div>
        <textarea 
        type = "text"
        name ="message"
        placeholder="Rédigez votre avis ici"
        class="border rounded p-0.5 w-full my-5 bg-gray-50 p-1 pl-3 min-h-36 resize-none"></textarea>
        <button type="submit" class="border rounded p-0.5 w-full mb-3 bg-blue-500 duration-200 hover:bg-blue-600 text-white  p-1 pl-3">Envoyer</button>
    </div>
</form>
</main> 
${renderFooter()}
`;

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch(
    "http://localhost:8888/minisite/api/submitContact.php",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  if (res.status === 422) {
    let result = await res.json();
    console.log(result);
    suppressionErreurs();
    affichageErreurs(result);
  } else {
    alert(`Formulaire envoyé ! 🎉 
    Nous vous recontacterons prochainement `);
    window.location.reload();
  }
});

function affichageErreurs(errorArray) {
  for (const key in errorArray) {
    let input = document.querySelector(`input[name='${key}']`);
    let textarea = document.querySelector(`textarea[name='${key}']`);

    const erreur = document.createElement("p");
    erreur.className = "text-red-600 pb-2";
    erreur.textContent = errorArray[key];

    if (input !== null) {
      input.classList.add("border-red-600");
      input.after(erreur);
    }
    if (textarea !== null) {
      textarea.classList.add("border-red-600");
      textarea.after(erreur);
    }
  }
}
function suppressionErreurs() {
  let erreurs = document.querySelectorAll(".text-red-600.pb-2");
  erreurs = Array.from(erreurs);
  erreurs.forEach((erreur) => {
    let input = erreur.previousElementSibling;
    input.classList.remove("border-red-600");
    erreur.remove();
  });
}
