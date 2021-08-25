const template = document.createElement("template");

template.innerHTML = `

<style>
.page-title-student {
    font: var(--font-pagetitle-student);
}
</style>


   <h1 class="page-title-student"></h1>
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
export default PageTitle;

// font-style: normal;
// font-variant: normal;
// font-weight: 400;
// font-size: 36px;
// line-height: 0;
// font-family: var(--font-families-standard);
