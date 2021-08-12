const template = document.createElement("template");

template.innerHTML = `
    <style>
        @import url('css/pageTitle.css')
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
