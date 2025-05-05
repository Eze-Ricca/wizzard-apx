// Rutas
import { initSit1 } from "./pages/sit1/sit1";
import { initSit2 } from "./pages/sit2/sit2";
import { initSit3 } from "./pages/sit3/sit3";

// Tipo para las rutas
type Route = {
  path: RegExp;
  component: Function;
};

const routes: Route[] = [
  {
    path: /\/sit1/,
    component: initSit1,
  },
  {
    path: /\/sit2/,
    component: initSit2,
  },
  {
    path: /\/sit3/,
    component: initSit3,
  },
];

export function initRouter(rootEl: Element): void {
  function router(route: string): void {
    const cleanRoute = route.replace("/wizzard-apx", "");

    if (cleanRoute === "/") {
      goTo("/sit1");
      return;
    }

    routes.forEach((r: Route) => {
      // Busca la ruta que coincida con el path
      if (r.path.test(cleanRoute)) {
        const viewEl = r.component({ goTo: goTo }); // Genera la vista desde el componente
        rootEl.innerHTML = ""; // Limpia el HTML
        rootEl.appendChild(viewEl); // Inserta la vista
      }
    });
  }

  // Función utilitaria que pasa a la vista seleccionada para poder navegar a otras rutas
  function goTo(uri: string): void {
    const fullUri = "/wizzard-apx" + uri;
    history.pushState({}, "", fullUri);
    router(uri);
  }

  // Ejecuta el router con la ruta tomada de la url
  router(location.pathname);

  // Escucha el evento popstate para actualizar la vista cuando se navega para adelante o para atrás
  window.addEventListener("popstate", () => {
    router(location.pathname);
  });
  // window.onpopstate = function (event) {
  //   console.log(
  //     "location: " + document.location + ",state" + JSON.stringify(event.state)
  //   );
  // };
}
