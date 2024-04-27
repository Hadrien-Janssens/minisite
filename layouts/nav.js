import "../style.css";
import { renderLink } from "../components/navInput";

export function renderNav() {
  let url = window.location.href;

  let accueilActive = false;
  let contactActive = false;
  let serviceActive = false;
  let teamsActive = false;

  url == "http://localhost:5174/"
    ? (accueilActive = true)
    : (accueilActive = false);

  url === "http://localhost:5174/contact/"
    ? (contactActive = true)
    : (contactActive = false);

  url === "http://localhost:5174/myservices/"
    ? (serviceActive = true)
    : (serviceActive = false);

  url === "http://localhost:5174/teams/"
    ? (teamsActive = true)
    : (teamsActive = false);

  return `
        <nav class="p-1 flex items-center justify-between ">
        <ul>
        ${renderLink(
          ' <i class="fa-solid fa-shield-cat text-xl text-blue-500"></i>',
          ""
        )}
        </ul>
          <ul class="flex">
            ${
              accueilActive
                ? renderLink("Accueil", "")
                : renderLink("Accueil", "", true)
            }
            ${
              contactActive
                ? renderLink("Contact", "contact/")
                : renderLink("Contact", "contact/", true)
            }
            ${
              serviceActive
                ? renderLink("Service", "myservices/")
                : renderLink("Service", "myservices/", true)
            }
            ${
              teamsActive
                ? renderLink("Equipe", "teams/")
                : renderLink("Equipe", "teams/", true)
            }
          </ul>
        </nav>
      `;
}
