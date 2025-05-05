import { state } from "../../state";

export function initSit1(params: { goTo: (arg: string) => void }) {
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
.texts {
  max-width: 960px;
  margin: 30px auto;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  padding: 20px;
}

.texts-form {
  margin: 30px auto;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
  `;
  divEl.innerHTML = `
  <header-el></header-el>
  <div class="texts">
  <reusable-text size-text="52px" weight-font="900"
          >Te damos la bienvenida a esta pagina</reusable-text
        >
        <reusable-text size-text="18px" weight-font="400"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          consequuntur iure voluptas quia accusantium voluptatum aspernatur
          provident et repudiandae quam veritatis, libero porro sit beatae
          laboriosam a aut consequatur quidem?</reusable-text
        >
        <div class="texts-form">
          <reusable-text size-text="28px" weight-font="500"
            >Para continuar ingresá tu nombre</reusable-text
          >
          <reusable-input class="input-name" label="Nombre" size-label="22px"></reusable-input>

          <reusable-button class="button-form"
            label="Comenzar"
            text-color="fff"
            border-color="none"
            hover-bg-color="#88afeb"
            active-bg-color="#639cf1"
          ></reusable-button>
        </div>
        </div>
    <footer-el></footer-el>

  `;

  const newState = state.getState();
  console.log(state.getState());
  console.log(state);

  type ReusableInput = HTMLElement & {
    getValue: () => string; // Definir claramente el método personalizado
  };

  const inputEl = divEl.querySelector(".input-name") as ReusableInput;
  const buttonEl = divEl.querySelector(".button-form");
  buttonEl?.addEventListener("click", () => {
    // e.preventDefault();
    const nameWizard = inputEl.getValue();
    newState.nombre = nameWizard;
    state.setState(newState);
    params.goTo("./sit2");
  });

  divEl.appendChild(styles);
  return divEl;
}
