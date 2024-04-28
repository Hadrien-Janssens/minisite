import { renderFooter } from "../components/footer";
import { renderNav } from "../layouts/nav";

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 p-5">
<form class="m-auto w-96 mt-10 bg-white pt-5 rounded shadow">
    <h1 class="text-xl font-medium px-5">Une suggestion ? Une question ?</h1>
    <h2 class="text-gray-400 font-medium mb-4 px-5">Prenez contact avec nous ici</h2>
    <div class="px-5 border-t  ">
    <div class="flex gap-3 mt-3 ">
    <input
      type="text"
      placeholder="Prénom"
      name="prenom"
      class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
    />
    <input
      type="text"
      placeholder="Nom de famille"
      name="nom"
      class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
    />
    </div>
    <input
    type="text"
    placeholder="Adresse e-mail"
    name="nom"
    class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3"
  />
    <textarea class="border rounded p-0.5 w-full mb-3 bg-gray-50 p-1 pl-3 min-h-36">
    </textarea>
    <button type="submit" class="border rounded p-0.5 w-full mb-3 bg-blue-500 duration-200 hover:bg-blue-600 text-white  p-1 pl-3" cla>Envoyer</button>
    </div>
    </form>
</main> 
${renderFooter()}
`;
