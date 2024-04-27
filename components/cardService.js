export function renderCardService(title, description) {
  return `
  <li class="relative border bg-white rounded-md flex flex-col basis-60 shrink-0  min-h-52 duration-300 shadow hover:shadow-xl hover:cursor-pointer hover:scale-105">
  <h4 class=" px-5 py-2 ">${title}</h4>
  <p class="px-5 py-2 text-sm text-gray-600">${description}</p>
  <button class="border bg-blue-500 duration-200 hover:bg-blue-600 text-white rounded absolute bottom-3 right-3 py-1 px-2"> presatataire</button>
</li>
        `;
}
