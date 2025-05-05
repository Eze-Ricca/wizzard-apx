# ReusableInput - Propiedades y Descripción

```html
<reusable-input
  label="Nombre:"
  placeholder="Escribe tu nombre"
  type="text"
  size-label="20px"
>
</reusable-input>
```

# ReusableButton - Propiedades y Descripción

```html
<reusable-button
  label="Enviar"
  text-color="fff"
  border-color="fff"
  hover-bg-color="red"
  active-bg-color="blue"
></reusable-button>
```

# ReusableText - Propiedades y Descripción

```html
<div class="textos">
  <reusable-text size-text="45px" weight-font="900">titulo</reusable-text>
  <reusable-text size-text="28px" weight-font="700">Subtitulo</reusable-text>
  <reusable-text size-text="18px" weight-font="400"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </reusable-text>
</div>
```

# ReusableSelect - ¨Propiedades y Descripción

```html
<reusable-select
  label="Selecciona una opción"
  size-label="20px"
  options="Manzana,Pera,Uva"
></reusable-select>
```

# state

con el state hay un par de cosas para hablar, puedo usar un state sencillo sin usar suscribe dejo el ejemplo:

```ts
type Data = {
  nombre?: string;
  email?: string;
  bebida?: string;
  comida?: string;
};

const state = {
  data: {} as Data,

  getState() {
    return this.data;
  },
  setState(newState: Data) {
    //modifica this.data (el state) e invoca los callbacks
    this.data = newState;
  },
};
export { state };
```

y de esta forma funcionaria pero entendi que es mejor utilizar el suscribe, es un poco mas complejo, el detalle esta por ejemplo en mostrar todo dentro de una funcion por ejemplo la funcion render de mi page sit3, ahi tegno puesto dos codigos que funcionan opte por dejar el que usa suscribe porque me parece mas dinamico, en fin paso el codigo con suscribe, hay que entender que suscribe se usa cuando necesitas algo complejo, hay que usarlo buscarle la vuelta tratar de encapsular cosas en funciones para que las puedas suscribir, porque solo puedes suscribir funciones para que luego cuando utilizas status.setState() la informacion golpee todas las funciones que tienen datos del state, es una forma de avisar de impactar tomase como sea todo lo que depende del state, supongo que mas adelante voy a tener la posibilidad de probar un suscribe mas potente para este ejemplo no necesito utilizar el suscribe, con el ejemplo de state que deje arriba alcanza, pero bueno dejo el ejemplo con el state con suscribe a continuacion:

```ts
type Data = {
  nombre?: string;
  email?: string;
  bebida?: string;
  comida?: string;
};

const state = {
  data: {} as Data,
  listener: [] as Function[], //los callbacks
  getState() {
    return this.data;
  },
  setState(newState: Data) {
    //modifica this.data (el state) e invoca los callbacks
    this.data = newState;
    this.listener.forEach((callback) => callback(newState));
  }, //,
  suscribe(callback: Function) {
    this.listener.push(callback);
    // recibe callbacks para ser avisados posteriormente
  },
};
export { state };
```
