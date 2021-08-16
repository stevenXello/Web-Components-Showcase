const template = document.createElement("template");

template.innerHTML = `
    <style>
        
.panel-frame {
    display: flex;
    justify-content: flex-start;
    border: 1px solid #aeaeae;
    border-top: 8px solid #26afdf;
    border-radius: 4px 4px 0px 0px;
}

.panel-line {
    margin: 16px;
    width: 1px;
    height: 32px;
    background-color: #cccc;
}

.panel-title {
    margin-top: 16px;
    margin-left: 24px;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 32px;
}

.panel-subtitle {
    color: #737373;
    font-size: 18px;
    line-height: 24px;
}

.panel-button button {
    position: static;
    background-color: #fafafa;
    border: 1px solid #cccc;
    width: 1312px;
    height: 32px;
}

    </style>
    <div class="panel-frame">
        <p class="panel-title"></p>
        <div class="panel-line"></div>
        <p class="panel-subtitle"></p>
    </div>
    <div class="panel-slot">
        <slot name="testSlot"></slot>
    </div>
    <div class="panel-button">
        <button>View All Students</button>
    </div>
`;

class XelloPanel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    connectedCallback() {
        this.shadowRoot.querySelector(".panel-title").innerText =
            this.getAttribute("title");
        this.shadowRoot.querySelector(".panel-subtitle").innerText =
            this.getAttribute("subtitle");
    }
}
customElements.define("xello-panel", XelloPanel);
export default XelloPanel;

//nested elements threads
// https://github.com/lit/lit-element/issues/824#issuecomment-535980714
