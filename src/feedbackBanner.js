const template = document.createElement("template");

template.innerHTML = `
    <style>
        
.feedback-frame {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 72px;
    border: 1px solid #e1e1e1;
    border-top: 2px solid #26afdf;
    border-radius: 5px;
}

.feedback-icon {
    width: 24px;
    height: 24px;
    padding-left: 20px;
}

.feedback-body {
    padding-left: 10px;
}

.feedback-text {
    font-family: var(--typography-base-medium-font-family);
    font-style: normal;
    font-weight: var(--typography-base-medium-font-weight);
    font-size: var(--typography-base-medium-font-size);
    line-height: var(--typography-base-medium-line-height);
    color: #484848;
}

    </style>
    <div class="feedback-frame">
        <svg class="feedback-icon" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><title>icon-222-info</title><path id="curve28" d="M75,0A75,75,0,1,1,0,75,75,75,0,0,1,75,0ZM73.56,34.62a7.21,7.21,0,1,1-7.21,7.21A7.21,7.21,0,0,1,73.56,34.62Zm-13,75H72.12V63.46H60.58V57.69H77.88v51.92H89.42v5.77H60.58ZM75,5.77A69.23,69.23,0,1,0,144.23,75,69.21,69.21,0,0,0,75,5.77Z"/></svg>
        <div class="feedback-body">
            <h3 class="feedback-text"></h3>
        </div>
    </div>
`;

class FeedbackBanner extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector("h3").innerText =
            this.getAttribute("title");
    }
}
customElements.define("feedback-banner", FeedbackBanner);
