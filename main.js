import "./style.css";
import { renderNav } from "./layouts/nav";
import { renderCardAvis } from "./components/cardAvis";
import { renderFooter } from "./components/footer";

//URL pour la config local/enligne
let url = new URL(import.meta.env.VITE_BASE_URL);
url = url + "avis/index.html";

let urlapi = new URL(import.meta.env.VITE_BASE_URL);
urlapi = urlapi + "api/getAvis.php";

//gestion des avis
const response = await fetch(`${urlapi}`);
let avisData = await response.json();
//rendu de 5 derniers commentaires sur la page d'accueil
let longueurTableau = avisData.length;
let array = [];
for (let i = 1; i < 5; i++) {
  array.push(avisData[longueurTableau - i]);
}
avisData = array;

// gestion du rendu
document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 p-5 ">
<div class="max-w-3xl  m-auto rounded  mb-10 relative">
    <img src="/hero.png" alt="" />
    <div class="absolute bg-blue-500 bottom-0 left-1/2 -translate-x-1/2 text-white rounded py-3 px-10 text-3xl font-black" >
        <h1>Pat-Patrouille</h1>
    </div>
</div>
<div class="flex flex-col md:flex-row gap-5 max-w-3xl  m-auto ">
    <div class="p-5 md:w-4/6  rounded shadow bg-white text-justify w-full border duration-300  hover:shadow-md grow basis-4/6 ">
        <h2 class="text-lg font-medium">Qui sommes-nous?</h2>
        <p class="text-gray-600">
        Bonjour et bienvenue chez Pat-Patrouille, votre source de services spécialisés dans le domaine animalier. Nous proposons une gamme exclusive de services où nos experts interviennent pour répondre à vos besoins spécifiques. Chez Pat-Patrouille, nous nous engageons à fournir des services de haute qualité pour assurer la satisfaction de nos clients. Faites confiance à notre équipe qualifiée pour vous offrir le meilleur en matière de compétences professionnelles dans le domaine de l'assistance animale.
        </p>
        </div>
        <div class="flex flex-col sm:flex-row md:flex-col justify-between gap-5  basis-2/6 ">
        <div class="flex justify-between items-center p-5 max-w-xl  rounded shadow bg-white  grow border duration-300  hover:shadow-md basis-3/6">
            <div>
            <a href="https://maps.app.goo.gl/CDbPTbUQZBsPgLYZA" target="_blank">
            <h2 class="text-lg font-medium">Nous  trouver <i class="fa-solid fa-location-dot"></i></h2>
            <p class="text-gray-600">Rue de la touffe 7, CroquetteVille 7134</p>
            </div>
            <div class="w-32 pl-2 rounded">
                <img src="./map.png" width="100%"  class="rounded-xl duration-200 hover:scale-105 hover:shadow-md "/>
                </a>
            </div>
    </div>

        <div class="flex justify-between items-center p-5 max-w-xl  rounded shadow bg-white  grow border duration-300  hover:shadow-md basis-3/6">
            <div >
                <h2 class="text-lg font-medium">Nous contacter</h2>
                <p class="text-gray-600">pat-patrouille@gmail.com</p>
                <p class="text-gray-600">0466/70.35.22</p>
            </div>
            <div class="flex flex-col pl-2 group">
            <a href="https://minisite.hadrien-janssens.com/contact/" class=" inline-block">
                <i class="fa-solid fa-file-pen p-2 group-hover:text-blue-500"></i>
            </a>
            <a href="mailto:bidon@gmail.com"><i class="fa-solid fa-envelope p-2 "></i></a>
            <a href="tel:+32496333444"><i class="fa-solid fa-phone p-2"></i></a>
            </div>
        </div>    
    </div>
</div>


<div class="max-w-3xl m-auto mt-10">
    <h2 class="font-medium text-xl ml-4 ">Avis</h2>
    <div class="flex p-4 gap-3 overflow-scroll">
    ${avisData
      .map((avis) => {
        return `
        ${renderCardAvis(
          avis.star,
          avis.prenom,
          avis.ville,
          avis.message,
          avis.day,
          avis.month,
          avis.year
        )}
        `;
      })
      .join("")}
      
    </div>
    <a href="/avis/index.html"><button class="border rounded-lg py-2 px-4 ml-4 text-white bg-blue-500 duration-200 hover:bg-blue-600"><i class="fa-solid fa-pen-to-square"></i> Rédiger</button></a>
</div>
</main>
${renderFooter()}
`;
