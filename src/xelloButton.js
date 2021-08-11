const template = document.createElement("template");

template.innerHTML = `
    <style>
        @import url('css/xelloButton.css')
    </style>
   <button></button>
`;

class XelloButton extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("button").innerText =
      this.getAttribute("value");
  }
}
customElements.define("xello-button", XelloButton);
