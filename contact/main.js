import { renderNav } from "../layouts/nav";

document.querySelector("#app").innerHTML = `
${renderNav()}
<main class="bg-slate-100 min-h-screen p-5">

`;
