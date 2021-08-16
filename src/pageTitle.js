const template = document.createElement("template");

template.innerHTML = `
    <style>
    h1 {
      font-family: var(--typography-page-title-student-font-family);
      font-size: var(  --typography-page-title-student-font-size);
  }
    </style>
   <h1></h1>
`;

class PageTitle extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector("h1").innerText =
            this.getAttribute("title");
    }
}
customElements.define("page-title", PageTitle);
