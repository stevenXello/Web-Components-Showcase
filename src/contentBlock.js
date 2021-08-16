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

    .content-icon1 {
        width: 20px;
        height: 20px;
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

// Creates a new custom HTML element by extending the base HTMLElement
class ContentBlock extends HTMLElement {
    constructor() {
        super();
        // Creating a shadow DOM for the element
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    // Lifecycle callback that is invoked each time the custom element is appended into the Document
    connectedCallback() {
        this.shadowRoot.querySelector("h3").innerText =
            this.getAttribute("text");
        this.shadowRoot.querySelector("h2").innerText =
            this.getAttribute("title");
        this.shadowRoot.querySelector("img").src = this.getAttribute("imgCdn");

        // If the image provided in the imgCdn attribute is a png...
        if (this.getAttribute("imgCdn").includes(".png")) {

            // If the text contains ".png" then remove the class "content-icon" and add the class "content-icon1"
            this.shadowRoot.querySelector("img").classList.toggle("content-icon", false);
            this.shadowRoot.querySelector("img").classList.toggle("content-icon1", true);

        } else {
            // If the text does not contain ".png", then add the "content-icon" class
            this.shadowRoot.querySelector("img").classList.toggle("content-icon", true);
        }
    }
}
// Defines the name for the new custom HTML element
window.customElements.define("content-block", ContentBlock);
export default ContentBlock;
