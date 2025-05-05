// import { state } from "../../state";

// export function initSit3(params: { goTo: (arg: string) => void }) {
//   const divEl = document.createElement("div");
//   divEl.classList.add("app");

//   const style = document.createElement("style");
//   style.textContent = `
//   .app {
//          margin-left: auto;
//          margin-right: auto;
//          max-width: 1260px;
//          min-height: 100vh;
//          display: flex;
//          flex-direction: column;
//         }
//     .container{
//         max-width: 960px;
//         margin: 30px auto;
//         min-height: 60vh;
//         display: flex;
//         flex-direction: column;
//         gap: 25px;
//         padding: 20px;
//         }
//   `;

//   const newState = state.getState();
//   //   const nameState = newState.nombre;
//   console.log(newState);
//   divEl.innerHTML = `
//    <header-el></header-el>
//    <div class="container">
//     <reusable-text size-text="52px" weight-font="900">Gracias ${newState.nombre} </reusable-text>
//     <reusable-text size-text="28px" weight-font="700"
//       >Toda la informacion que nos brindaste es muy importante</reusable-text
//     >
//     <reusable-text size-text="22px" weight-font="500">Email: ${newState.email}</reusable-text>
//     <reusable-text size-text="22px" weight-font="500">Comida favorita: ${newState.comida}</reusable-text>
//     <reusable-text size-text="22px" weight-font="500">Bebida favorita: ${newState.bebida}</reusable-text>
//     <reusable-button class="button-denada"
//       label="De nada"
//       text-color="fff"
//       border-color="none"
//       hover-bg-color="#88afeb"
//       active-bg-color="#639cf1"
//     ></reusable-button>
//     </div>
//     <footer-el></footer-el>
//   `;

//   const buttonDiv = divEl.querySelector(".button-denada");

//   buttonDiv!.addEventListener("click", () => {
//     params.goTo("./sit1");
//   });

//   divEl.appendChild(style);
//   return divEl;
// }
//-------------------------------------------------
import { state } from "../../state";

export function initSit3(params: { goTo: (arg: string) => void }) {
  const divEl = document.createElement("div");
  divEl.classList.add("app");

  const style = document.createElement("style");
  style.textContent = `
  .app {
         margin-left: auto;
         margin-right: auto;
         max-width: 1260px;
         min-height: 100vh;
         display: flex;
         flex-direction: column;
        }
    .container{
        max-width: 960px;
        margin: 30px auto;
        min-height: 60vh;
        display: flex;
        flex-direction: column;         
        gap: 25px;
        padding: 20px;
        }
  `;

  // Función que actualiza dinámicamente el contenido con los datos del estado
  function render() {
    const newState = state.getState();

    divEl.innerHTML = `
     <header-el></header-el>
     <div class="container">
      <reusable-text size-text="52px" weight-font="900">Gracias ${
        newState.nombre || "Usuario"
      } </reusable-text>
      <reusable-text size-text="28px" weight-font="700"
        >Toda la informacion que nos brindaste es muy importante</reusable-text
      >
      <reusable-text size-text="22px" weight-font="500">Email: ${
        newState.email || "No especificado"
      }</reusable-text>
      <reusable-text size-text="22px" weight-font="500">Comida favorita: ${
        newState.comida || "No especificada"
      }</reusable-text>
      <reusable-text size-text="22px" weight-font="500">Bebida favorita: ${
        newState.bebida || "No especificada"
      }</reusable-text>
      <reusable-button class="button-denada"
        label="De nada"
        text-color="fff"
        border-color="none"
        hover-bg-color="#88afeb"
        active-bg-color="#639cf1"
      ></reusable-button>
      </div>
      <footer-el></footer-el>
    `;

    // Volvemos a agregar el event listener al botón después de regenerar el contenido
    const buttonDiv = divEl.querySelector(".button-denada");

    buttonDiv?.addEventListener("click", () => {
      params.goTo("./sit1");
    });

    divEl.appendChild(style);
  }

  // Suscribimos la función render al estado
  state.suscribe(render);

  // Renderizamos inicialmente el contenido
  render();
  console.log(state.listener);
  return divEl;
}
