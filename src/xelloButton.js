const template = document.createElement("template");

template.innerHTML = `
    <style>
    button {
        padding: 12px 16px;
        border-radius: 80px;
        color: white;
        background-color: #027baf;
        border: none;
    }
    
    </style>
   <button id="btnClick"></button>
`;

class XelloButton extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    //button onclick function
    testClick() {
        console.log("button has been clicked");
    }

    //adding event listener to the button
    connectedCallback() {
        this.shadowRoot
            .querySelector("#btnClick")
            .addEventListener("click", () => this.testClick());
        this.shadowRoot.querySelector("button").innerText =
            this.getAttribute("value");
    }

    //removing event listener on the button
    disconnectedCallback() {
        this.shadowRoot.querySelector("#btnClick").removeEventListener();
    }
}
customElements.define("xello-button", XelloButton);
export default XelloButton;
