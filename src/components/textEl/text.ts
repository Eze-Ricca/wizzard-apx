class ReusableText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const textEl = document.createElement("h3");
    const sizeText = this.getAttribute("size-text") || "18px";
    const weigthText = this.getAttribute("weight-font") || "normal";

    const textContent = this.innerHTML;

    const style = document.createElement("style");
    style.textContent = `
    h3{
        font-size: ${sizeText};    
        font-weight: ${weigthText}; 
        margin: 0;
    }
    `;
    textEl.textContent = textContent;

    textEl.appendChild(style);
    this.shadowRoot?.appendChild(textEl);
  }
}
customElements.define("reusable-text", ReusableText);
