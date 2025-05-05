import { state } from "../../state";
import { ReusableInput } from "../../components/inputEl/input"; // Ajusta la ruta según sea necesario
import { ReusableSelect } from "../../components/selectEl/select"; // Ajusta la ruta según sea necesario
export function initSit2(params: { goTo: (arg: string) => void }) {
  const divEl = document.createElement("div");
  divEl.classList.add("app");

  const styles = document.createElement("style");
  styles.textContent = `
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
  
         display: flex;
         flex-direction: column;
         
         gap: 25px;
         padding: 20px;
        }

    .form {
        margin: 30px 0;
        max-width: 700px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
        .button-back{
        max-width: 700px;
        }
  `;

  // Función que actualiza dinámicamente el contenido con los datos del estado
  function render() {
    divEl.innerHTML = `
  <header-el></header-el>
    <div class="container">
      <reusable-text size-text="52px" weight-font="900"
        >Necesitamos algunos datos más</reusable-text
      >
      
      <form class="form">
        <reusable-input
          class="form-email"
          label="Email"
          placeholder="Escribe tu email..."
          type="email"
        ></reusable-input>
        <reusable-input
          class="form-fav-food"
          label="Comida favorita"
          placeholder="Escribe tu comida favorita..."
          type="text"
          required
        ></reusable-input>
        <reusable-select
          class="form-fav-drink"
          label="Bebida favorita"
          size-label="20px"
          options="Cerveza,Fernet,Vino"
        ></reusable-select>
        <reusable-button
          class="button-form"
          label="Continuar"
          text-color="fff"
          border-color="none"
          hover-bg-color="#88afeb"
          active-bg-color="#639cf1"
        ></reusable-button>
        </form>
        <reusable-button
          class="button-back"
          label="Volver"
          bg-color="white"
          text-color="fff"
          border-color="solid 3px black"
          hover-bg-color="#88afeb"
          active-bg-color="#639cf1"
        ></reusable-button>
      
    </div>
    <footer-el></footer-el>
  `;

    const buttonBack = divEl.querySelector(".button-back");
    buttonBack?.addEventListener("click", () => {
      params.goTo("./sit1");
    });

    const buttonForm = divEl.querySelector(".button-form");
    buttonForm?.addEventListener("click", () => {
      const emailForm = divEl.querySelector(".form-email")! as ReusableInput;
      const foodFav = divEl.querySelector(".form-fav-food")! as ReusableInput;
      const drinklFav = divEl.querySelector(
        ".form-fav-drink"
      )! as ReusableSelect;
      const newState = state.getState();
      // const { email, bebida, comida } = newState;
      newState.email = emailForm.getValue();
      newState.comida = foodFav.getValue();
      newState.bebida = drinklFav.getValue();
      // console.log(newState);
      // state.setState(newState);
      console.log(state);

      params.goTo("./sit3");
    });
  }

  // Suscribimos la función render al estado
  state.suscribe(render);

  // Renderizamos inicialmente el contenido
  render();
  divEl.appendChild(styles);
  return divEl;
}
