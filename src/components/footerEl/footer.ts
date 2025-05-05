class FooterEl extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const footerEl = document.createElement("header");
    const h3El = document.createElement("h3");
    h3El.textContent = "Footer";

    const style = document.createElement("style");
    style.textContent = `
      header{
          background-color: #FFA0EA;
           max-width: 1280px;
           height: 233px;
           margin-left: auto;
           margin-right: auto;
           display: grid;
           place-content: center;
           }
      `;

    footerEl.appendChild(h3El);
    footerEl.appendChild(style);
    this.shadowRoot?.appendChild(footerEl);
  }
}
customElements.define("footer-el", FooterEl);
