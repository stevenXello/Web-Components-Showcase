const template = document.createElement("template");

template.innerHTML = `
    <style>
        @import url('css/xelloPanel.css')
    </style>
    <div class="panel-frame">
        <p class="panel-title"></p>
        <div class="panel-line"></div>
        <p class="panel-subtitle"></p>
    </div>
`;

class XelloPanel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector(".panel-title").innerText =
            this.getAttribute("title");
        this.shadowRoot.querySelector(".panel-subtitle").innerText =
            this.getAttribute("subtitle");
    }
}
customElements.define("xello-panel", XelloPanel);
