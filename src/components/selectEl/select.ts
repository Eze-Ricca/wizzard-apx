export class ReusableSelect extends HTMLElement {
  selectElement!: HTMLSelectElement; // Declaración adecuada de la propiedad

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const wrapper: HTMLDivElement = document.createElement("div");
    const select: HTMLSelectElement = document.createElement("select");
    const label: HTMLLabelElement = document.createElement("label");

    // Atributos configurables
    const labelText = this.getAttribute("label") || "Etiqueta";
    const sizeLabel = this.getAttribute("size-label") || "18px";
    const options =
      this.getAttribute("options") || "Opción 1,Opción 2,Opción 3";

    label.textContent = labelText;

    // Generar opciones dinámicamente
    const optionArray = options.split(",");
    optionArray.forEach((optionText) => {
      const optionElement = document.createElement("option");
      optionElement.value = optionText;
      optionElement.textContent = optionText;
      select.appendChild(optionElement);
    });

    // Añadir referencias internas
    this.selectElement = select;

    // Estilos encapsulados
    const style: HTMLStyleElement = document.createElement("style");
    style.textContent = `
      div {
          margin-bottom: 10px;
      }
      label {
          display: block;
          font-size: ${sizeLabel};
          margin-bottom: 10px;
      }
      select {
          box-sizing: border-box; 
          width: 100%;
          height: 79px;
          padding: 5px;
          font-size: 1.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #fff;
      }
      `;

    wrapper.appendChild(label);
    wrapper.appendChild(select);
    this.shadowRoot?.appendChild(style);
    this.shadowRoot?.appendChild(wrapper);
  }

  // Método personalizado para obtener el valor seleccionado
  getValue() {
    return this.selectElement.value;
  }
}

customElements.define("reusable-select", ReusableSelect);
