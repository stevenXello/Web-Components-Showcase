import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import xelloBtnStyles from "./xello-button.scss";

@customElement("xello-button")
export class XelloButton extends LitElement {
    static styles = xelloBtnStyles;

    @property({ type: Boolean })
    condition = true;

    @property({ type: String })
    text = "Button";
    tooltipInfo = "Show me information";

    render() {
        return html`
            ${this.condition
                ? //true condition - leaving this blank so when user clicks on button, data is revealed
                  html` <p></p> `
                : //false condition
                  html` <p id="tooltip"><slot></slot></p> `}
            <button
                @click=${() => {
                    this.condition = !this.condition;
                }}
            >
                ${this.text}
            </button>
        `;
    }
}
