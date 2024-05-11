export function renderCardService(id, title, description) {
  //local
  let url = "http://localhost:5173/";
  //production
  // let url = "https://minisite.hadrien-janssens.com/";

  return `
  <li class="relative border bg-white rounded-md flex flex-col basis-60 shrink-0 grow min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
  <h4 class=" px-5 py-3 ">${title}</h4>
  <p class="px-5  text-sm text-gray-600  line-clamp-5">${description}</p>
  <a href="${url}myservice/?id=${id}"><button class="border bg-blue-500 duration-200 hover:bg-blue-600 text-white rounded absolute bottom-3 right-3 py-1 px-2">voir plus</button></a>
</li>
        `;
}
