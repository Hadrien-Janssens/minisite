// vite.config.js
import { defineConfig } from "vite";
import { resolve } from "path";
//attention l'erreur vient peut etre des clées de l'objet input : a la base c'etait ecrit nested a voir si ça pose probleme
export default defineConfig({
  esbuild: {
    supported: {
      "top-level-await": true, //browsers can handle top-level-await features
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        contact: resolve(__dirname, "contact/index.html"),
        myservices: resolve(__dirname, "myservices/index.html"),
        teams: resolve(__dirname, "teams/index.html"),
      },
    },
  },
});
