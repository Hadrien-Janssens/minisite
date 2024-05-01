import { renderFooter } from "../components/footer";
import { renderNav } from "../layouts/nav";

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 p-5">
<form class="m-auto max-w-96 mt-10 bg-white pt-5 rounded shadow"  >
    <h1 class="text-xl font-medium px-5">Une suggestion ? Une question ?</h1>
    <h2 class="text-gray-400 font-medium mb-4 px-5">Prenez contact avec nous ici</h2>
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
        <textarea 
        type = "text"
        name ="message"
        placeholder="Votre message"
        class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3 min-h-36 resize-none"></textarea>
        <button type="submit" class="border rounded p-0.5 w-full mb-3 bg-blue-500 duration-200 hover:bg-blue-600 text-white  p-1 pl-3">Envoyer</button>
    </div>
</form>
</main> 
${renderFooter()}
`;

const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const url = new URL(import.meta.env.VITE_BASE_URL);

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  const res = await fetch(`${url}api/submitContact.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
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
