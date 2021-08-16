const template = document.createElement("template");

template.innerHTML = `
    <style>
    .content-block {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 72px;
        width: 640px;
    }
    
    .content-icon {
        width: 40px;
        height: 40px;
        padding-left: 20px;
    }
    
    .content-body {
        padding-left: 10px;
    }
    
    .content-title {
        font-family: var(--typography-base-medium-font-family);
        font-style: normal;
        font-weight: var(--typography-base-medium-font-weight);
        font-size: var(--typography-base-medium-font-size);
        line-height: var(--typography-base-medium-line-height);
        color: var(--colors-text-light-mode-primary);
    }
    
    .content-text {
        font-family: var(--typography-base-small-font-family);
        font-style: normal;
        font-weight: var(--typography-base-small-font-weight);
        font-size: var(--typography-base-small-font-size);
        line-height: var(--typography-base-small-line-height);
        color: var(--colors-text-light-mode-secondary);
    }
    
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
export default ContentBlock;
