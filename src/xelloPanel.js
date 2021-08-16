const template = document.createElement("template");

template.innerHTML = `
    <style>
        

.panel-container {
        border: 1px solid #aeaeae;
        border-top: 8px solid #26afdf;
        border-radius: 4px 4px 0px 0px;
}


.panel-header {
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #cccc;
}

.panel-line {
    margin: 16px;
    width: 1px;
    height: 32px;
    background-color: var(--colors-text-light-mode-secondary);
}

.panel-title {
    margin-top: 16px;
    margin-left: 24px;
    font-family: var(--typography-base-large-font-family);
    font-size: var(--typography-base-large-font-size);
    font-style: normal;
    font-weight: var(--typography-page-title-student-font-weight);
    line-height: var(--typography-base-large-line-height);
}

.panel-subtitle {
    font-family: var(--typography-base-medium-font-family);
    color: var(--colors-text-light-mode-secondary);
    font-size: var(--typography-base-medium-font-size);
    line-height: var(--typography-base-medium-line-height);
}

.panel-button button {
    font-family: var(--typography-base-medium-font-family);
    position: static;
    background-color: #fafafa;
    border: 1px solid #cccc;
    width: 1312px;
    height: 32px;
}

.panel-button button:active {
    transform: translateY(4px);
}

</style>


    <div class="panel-container">
    <div class="panel-header">
        <p class="panel-title"></p>
        <div class="panel-line"></div>
        <p class="panel-subtitle"></p>
    </div>
    <div class="panel-slot">
        <slot name="testSlot"></slot>
    </div>
    <div class="panel-button">
        <button id="panelBtn">View All Students</button>
    </div>
    </div>
`;

class XelloPanel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({
            mode: "open",
        });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    testClick() {
        console.log("panel has been clicked");
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".panel-title").innerText =
            this.getAttribute("title");
        this.shadowRoot.querySelector(".panel-subtitle").innerText =
            this.getAttribute("subtitle");
        this.shadowRoot
            .querySelector("#panelBtn")
            .addEventListener("click", () => this.testClick());
    }
}
customElements.define("xello-panel", XelloPanel);

//nested elements threads
// https://github.com/lit/lit-element/issues/824#issuecomment-535980714
