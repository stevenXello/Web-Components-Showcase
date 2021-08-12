const template = document.createElement("template");

template.innerHTML = `
    <style>
        @import url('css/contentBlock.css')
    </style>
    <div class="content-block">
        <img class="content-icon">
        <div class="content-body">
            <h2 class="content-title">
            </h2>
            <h3 class="content-text">
            </h3>
        </div>
    </div>
`;

class ContentBlock extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    connectedCallback() {
        this.shadowRoot.querySelector("h3").innerText =
            this.getAttribute("text");
        this.shadowRoot.querySelector("h2").innerText =
            this.getAttribute("title");
        this.shadowRoot.querySelector("img").src = this.getAttribute("imgCdn");

        if (this.getAttribute("imgCdn").includes(".png")) {
            console.log(this.getAttribute("imgCdn"));

            console.log(this.shadowRoot.querySelector("img").classList);
        } else {
            console.log("hello");
        }
    }
}
customElements.define("content-block", ContentBlock);
