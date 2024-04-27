import "./style.css";
import { renderNav } from "./layouts/nav";

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 min-h-screen p-5 ">

<div class="p-5 max-w-xl m-auto rounded shadow bg-white text-justify">
<h2 class="text-lg font-medium">Qui sommes-nous?</h2>
<p class="text-gray-600">
Bonjour et bienvenue chez AnimauxExperts, votre source de services spécialisés dans le domaine animalier. Nous proposons une gamme exclusive de services où nos experts interviennent pour répondre à vos besoins spécifiques. Chez AnimauxExperts, nous nous engageons à fournir des services de haute qualité pour assurer la satisfaction de nos clients. Faites confiance à notre équipe qualifiée pour vous offrir le meilleur en matière de compétences professionnelles dans le domaine de l'assistance animale.
</p>
</div>

</main>`;
