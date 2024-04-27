export function renderLink(page, link, active = false) {
  return `
            <li class="p-2 font-bold text-blue-500 duration-300 rounded hover:bg-gray-100 ${
              active ? "text-gray-500" : ""
            }"><a href="/${link}">${page}</a></li>
        `;
}
