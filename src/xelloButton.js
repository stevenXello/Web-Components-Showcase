const template = document.createElement("template");

template.innerHTML = `
    <style>
        @import url('css/xelloButton.css')
    </style>
   <button id="btnClick"></button>
`;

class XelloButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("button").innerText =
            this.getAttribute("value");
    }

    //button onclick function
    testClick() {
        console.log("test123");
    }

    //adding event listener to the button
    connectedCallback() {
        this.shadowRoot
            .querySelector("#btnClick")
            .addEventListener("click", () => this.testClick());
    }

    //removing event listener on the button
    disconnectedCallback() {
        this.shadowRoot.querySelector("#btnClick").removeEventListener();
    }
}
customElements.define("xello-button", XelloButton);
