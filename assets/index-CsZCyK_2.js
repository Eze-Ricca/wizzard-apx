var x=Object.defineProperty;var f=(i,e,o)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):i[e]=o;var b=(i,e,o)=>f(i,typeof e!="symbol"?e+"":e,o);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var c,d;const e=document.createElement("button"),o=this.getAttribute("label")||"Click Me",n=this.getAttribute("bg-color")||"#9CBBE9",t=this.getAttribute("text-color")||"#fff",a=this.getAttribute("border-color")||"none",r=document.createElement("style");r.textContent=`
    button{
        background-color: ${n};
        color: ${t};
        font-size: 30px;
        font-weight: 600;
        letter-spacing: 0.15rem;
        width: 100%;
        height: 84px;
        border: ${a};
        border-radius: 10px;
        transition: background-color 0.3s ease;
    }
     button:hover{
        background-color: ${this.getAttribute("hover-bg-color")};
        border: solid 10px rgb(75, 126, 202);
     }   
    button:active{
        background-color: ${this.getAttribute("active-bg-color")};
    }
    `,e.textContent=o,(c=this.shadowRoot)==null||c.appendChild(r),(d=this.shadowRoot)==null||d.appendChild(e)}}customElements.define("reusable-button",g);class E extends HTMLElement{constructor(){super();b(this,"inputElement");this.attachShadow({mode:"open"})}connectedCallback(){var u,p;const o=document.createElement("div"),n=document.createElement("input"),t=document.createElement("label"),a=this.getAttribute("label")||"Etiqueta",r=this.getAttribute("size-label")||"18px",c=this.getAttribute("placeholder")||"Escribe aqui...",d=this.getAttribute("type")||"text";t.textContent=a,n.placeholder=c,n.type=d,this.inputElement=n;const s=document.createElement("style");s.textContent=`
    div {
        margin-bottom: 10px;
              
        }
    label {
        display: block;
        font-size: ${r};
        margin-bottom: 10px;     
    }
     input{
        box-sizing: border-box; 
        width: 100%;
        height: 79px;
        padding: 5px;
        font-size: 1.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
     }   
    `,o.appendChild(t),o.appendChild(n),(u=this.shadowRoot)==null||u.appendChild(s),(p=this.shadowRoot)==null||p.appendChild(o)}getValue(){return this.inputElement.value}}customElements.define("reusable-input",E);class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var t;const e=document.createElement("header"),o=document.createElement("h3");o.textContent="Header";const n=document.createElement("style");n.textContent=`
    header{
        background-color: #ff8282;
         max-width: 1280px;
         height: 80px;
         margin-left: auto;
         margin-right: auto;
         display: grid;
         place-content: center;
         }
    `,e.appendChild(o),e.appendChild(n),(t=this.shadowRoot)==null||t.appendChild(e)}}customElements.define("header-el",v);class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var t;const e=document.createElement("header"),o=document.createElement("h3");o.textContent="Footer";const n=document.createElement("style");n.textContent=`
      header{
          background-color: #FFA0EA;
           max-width: 1280px;
           height: 233px;
           margin-left: auto;
           margin-right: auto;
           display: grid;
           place-content: center;
           }
      `,e.appendChild(o),e.appendChild(n),(t=this.shadowRoot)==null||t.appendChild(e)}}customElements.define("footer-el",y);class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){var r;const e=document.createElement("h3"),o=this.getAttribute("size-text")||"18px",n=this.getAttribute("weight-font")||"normal",t=this.innerHTML,a=document.createElement("style");a.textContent=`
    h3{
        font-size: ${o};    
        font-weight: ${n}; 
        margin: 0;
    }
    `,e.textContent=t,e.appendChild(a),(r=this.shadowRoot)==null||r.appendChild(e)}}customElements.define("reusable-text",C);class w extends HTMLElement{constructor(){super();b(this,"selectElement");this.attachShadow({mode:"open"})}connectedCallback(){var u,p;const o=document.createElement("div"),n=document.createElement("select"),t=document.createElement("label"),a=this.getAttribute("label")||"Etiqueta",r=this.getAttribute("size-label")||"18px",c=this.getAttribute("options")||"Opción 1,Opción 2,Opción 3";t.textContent=a,c.split(",").forEach(h=>{const m=document.createElement("option");m.value=h,m.textContent=h,n.appendChild(m)}),this.selectElement=n;const s=document.createElement("style");s.textContent=`
      div {
          margin-bottom: 10px;
      }
      label {
          display: block;
          font-size: ${r};
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
      `,o.appendChild(t),o.appendChild(n),(u=this.shadowRoot)==null||u.appendChild(s),(p=this.shadowRoot)==null||p.appendChild(o)}getValue(){return this.selectElement.value}}customElements.define("reusable-select",w);const l={data:{},listener:[],getState(){return this.data},setState(i){this.data=i,this.listener.forEach(e=>e(i))},suscribe(i){this.listener.push(i)}};function z(i){const e=document.createElement("div");e.classList.add("app");const o=document.createElement("style");o.textContent=`
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
  `,e.innerHTML=`
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

  `;const n=l.getState();console.log(l.getState()),console.log(l);const t=e.querySelector(".input-name"),a=e.querySelector(".button-form");return a==null||a.addEventListener("click",()=>{const r=t.getValue();n.nombre=r,l.setState(n),i.goTo("./sit2")}),e.appendChild(o),e}function S(i){const e=document.createElement("div");e.classList.add("app");const o=document.createElement("style");o.textContent=`
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
  `;function n(){e.innerHTML=`
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
  `;const t=e.querySelector(".button-back");t==null||t.addEventListener("click",()=>{i.goTo("./sit1")});const a=e.querySelector(".button-form");a==null||a.addEventListener("click",()=>{const r=e.querySelector(".form-email"),c=e.querySelector(".form-fav-food"),d=e.querySelector(".form-fav-drink"),s=l.getState();s.email=r.getValue(),s.comida=c.getValue(),s.bebida=d.getValue(),console.log(l),i.goTo("./sit3")})}return l.suscribe(n),n(),e.appendChild(o),e}function L(i){const e=document.createElement("div");e.classList.add("app");const o=document.createElement("style");o.textContent=`
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
  `;function n(){const t=l.getState();e.innerHTML=`
     <header-el></header-el>
     <div class="container">
      <reusable-text size-text="52px" weight-font="900">Gracias ${t.nombre||"Usuario"} </reusable-text>
      <reusable-text size-text="28px" weight-font="700"
        >Toda la informacion que nos brindaste es muy importante</reusable-text
      >
      <reusable-text size-text="22px" weight-font="500">Email: ${t.email||"No especificado"}</reusable-text>
      <reusable-text size-text="22px" weight-font="500">Comida favorita: ${t.comida||"No especificada"}</reusable-text>
      <reusable-text size-text="22px" weight-font="500">Bebida favorita: ${t.bebida||"No especificada"}</reusable-text>
      <reusable-button class="button-denada"
        label="De nada"
        text-color="fff"
        border-color="none"
        hover-bg-color="#88afeb"
        active-bg-color="#639cf1"
      ></reusable-button>
      </div>
      <footer-el></footer-el>
    `;const a=e.querySelector(".button-denada");a==null||a.addEventListener("click",()=>{i.goTo("./sit1")}),e.appendChild(o)}return l.suscribe(n),n(),console.log(l.listener),e}const T=[{path:/\/sit1/,component:z},{path:/\/sit2/,component:S},{path:/\/sit3/,component:L}];function k(i){function e(n){const t=n.replace("/wizzard-apx","");if(t==="/"){o("/sit1");return}T.forEach(a=>{if(a.path.test(t)){const r=a.component({goTo:o});i.innerHTML="",i.appendChild(r)}})}function o(n){const t="/wizzard-apx"+n;history.pushState({},"",t),e(n)}e(location.pathname),window.addEventListener("popstate",()=>{e(location.pathname)})}(function(){let i=document.querySelector("#app");k(i)})();
