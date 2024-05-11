import { renderFilter } from "./filter";

export function renderSearchBar() {
  return `
        <div class="flex gap-3 my-5 flex-col sm:flex-row sm:justify-center m-auto sm:items-center">
            <div class="flex py-3 my-2  
             rounded   bg-white px-4 text-slate-500 shadow items-center"">
        
             <i class='fa-solid fa-magnifying-glass text-slate-500 px-4'></i>:
                <input 
                id="search"
                type="text" 
                class="placeholder:text-slate-500 mx-4 grow"
                placeholder=" métier ou nom"/>
            </div>
            
          ${renderFilter()}
        </div>
          `;
}
