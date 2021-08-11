const template = document.createElement("template");

template.innerHTML = `

<style>
@import url('css/myNav.css')
</style>

<div class="header-container">
    <div class="xello-logo">
      <svg width="81.02" height="24.02" viewBox="0 0 119 35"><g fill-rule="nonzero" fill="none"><path d="M98.15 20.449v.07c0 .782.14 1.532.418 2.244a5.684 5.684 0 0 0 1.16 1.867c.498.53 1.087.95 1.77 1.261a5.327 5.327 0 0 0 2.237.467c.855 0 1.623-.155 2.305-.467a5.471 5.471 0 0 0 1.752-1.244 5.276 5.276 0 0 0 1.112-1.831c.253-.704.38-1.446.38-2.229v-.133l-11.135-.005z" fill="#78BC42"/><path d="M103.742 29.205c1.271 0 2.414-.23 3.428-.692a8.147 8.147 0 0 0 2.601-1.849 7.827 7.827 0 0 0 1.65-2.72 9.637 9.637 0 0 0 .566-3.313v-.102a9.28 9.28 0 0 0-.617-3.388 8.516 8.516 0 0 0-1.727-2.772 8.262 8.262 0 0 0-2.628-1.874c-1.013-.462-2.138-.694-3.375-.694-1.236 0-2.363.232-3.376.694a8.15 8.15 0 0 0-2.6 1.848 7.785 7.785 0 0 0-1.65 2.72c-.38 1.045-.566 2.165-.566 3.363v.103c0 1.164.205 2.276.618 3.336a8.462 8.462 0 0 0 1.725 2.773 8.268 8.268 0 0 0 2.629 1.875c1.013.462 2.12.692 3.322.692m-.102 5.442c-2.061 0-3.976-.367-5.746-1.103-1.769-.736-3.298-1.736-4.585-3.004a13.597 13.597 0 0 1-3.016-4.466 13.88 13.88 0 0 1-1.08-5.443v-.102c0-1.951.368-3.781 1.108-5.493a14.207 14.207 0 0 1 3.04-4.492c1.287-1.284 2.815-2.301 4.586-3.055 1.767-.753 3.7-1.13 5.795-1.13 2.096 0 4.028.37 5.799 1.105 1.768.736 3.298 1.745 4.585 3.028a13.973 13.973 0 0 1 3.016 4.466c.719 1.694 1.081 3.517 1.081 5.468v.103c0 1.917-.37 3.73-1.108 5.442a14.251 14.251 0 0 1-3.04 4.492c-1.288 1.285-2.826 2.303-4.612 3.055-1.786.752-3.727 1.129-5.823 1.129M76.33 3.08c0-.855.292-1.583.874-2.183C77.79.3 78.528 0 79.421 0c.894 0 1.64.3 2.242.897.6.6.901 1.328.901 2.184v28.127c0 .889-.3 1.625-.901 2.207-.602.582-1.348.873-2.242.873-.86 0-1.59-.291-2.19-.873-.602-.582-.901-1.318-.901-2.207V3.081zM61.593 3.08c0-.855.29-1.583.874-2.183C63.05.3 63.79 0 64.685 0c.892 0 1.638.3 2.24.897.6.6.902 1.328.902 2.184v28.127c0 .889-.301 1.625-.902 2.207-.602.582-1.348.873-2.24.873-.86 0-1.592-.291-2.192-.873-.599-.582-.9-1.318-.9-2.207V3.081zM48.762 18.578a10.617 10.617 0 0 0-.67-2.799 7.505 7.505 0 0 0-1.392-2.283 6.13 6.13 0 0 0-2.087-1.516c-.806-.358-1.726-.538-2.756-.538-1.924 0-3.512.66-4.767 1.976-1.254 1.318-2.017 3.04-2.293 5.16h13.965zm3.607 12.476a14.815 14.815 0 0 1-4.226 2.618c-1.58.649-3.436.975-5.565.975-1.958 0-3.787-.342-5.488-1.026-1.7-.684-3.177-1.643-4.43-2.874-1.256-1.233-2.243-2.713-2.964-4.443-.721-1.727-1.083-3.636-1.083-5.723v-.103c0-1.951.326-3.781.98-5.493.652-1.712 1.571-3.21 2.756-4.493a12.994 12.994 0 0 1 4.2-3.029c1.615-.735 3.403-1.104 5.36-1.104 2.164 0 4.053.403 5.669 1.208 1.613.803 2.961 1.847 4.044 3.131a13.107 13.107 0 0 1 2.422 4.287c.532 1.574.799 3.148.799 4.722 0 .891-.294 1.61-.877 2.156a2.91 2.91 0 0 1-2.06.823H34.848c.341 2.226 1.227 3.926 2.653 5.108 1.425 1.18 3.152 1.77 5.18 1.77 1.303 0 2.48-.212 3.528-.64a11.615 11.615 0 0 0 2.912-1.72c.24-.171.471-.308.695-.412.225-.102.524-.153.902-.153.687 0 1.271.24 1.752.718.482.48.72 1.078.72 1.796 0 .378-.075.728-.23 1.053a3.037 3.037 0 0 1-.592.848zM0 31.67c0-.787.292-1.506.875-2.156l7.73-9.241-7.161-8.471A5.293 5.293 0 0 1 .67 10.62a2.814 2.814 0 0 1-.258-1.182c0-.89.283-1.59.85-2.104.566-.514 1.245-.77 2.036-.77.617 0 1.16.137 1.622.41.464.274.883.652 1.262 1.13l6.134 8.01 6.234-7.96c.378-.478.78-.862 1.21-1.155.431-.288.92-.435 1.469-.435.825 0 1.522.256 2.087.77.567.515.85 1.163.85 1.95 0 .446-.076.831-.23 1.156-.155.326-.37.641-.645.95l-7.37 8.778 7.628 8.985c.342.41.6.806.773 1.18.17.378.257.77.257 1.181 0 .891-.283 1.59-.85 2.105-.565.514-1.248.77-2.035.77-.618 0-1.16-.136-1.624-.41-.464-.274-.886-.668-1.262-1.18l-6.596-8.472L5.617 32.8c-.378.446-.78.82-1.211 1.13-.43.308-.936.462-1.521.462-.788 0-1.468-.257-2.034-.771C.284 33.106 0 32.458 0 31.67" fill="#FFF"/></g></svg>
    </div>
    <div class="nav-options">
        <ul>
            <li><a href="options">About Me</a></li>
            <li><a href="options">Explore Options</a></li>
            <li><a href="options">Goals & Plans</a></li>
        </ul>
    </div>
    <div class="nav-icons">
      <ul>
        <li>
         <svg width="24" height="24" viewBox="0 0 150 150" xml:space="preserve">
          <path d="M57.3,19.6c20.6,0,37.3,16.8,37.3,37.3c0,8.7-3,17.1-8.6,23.8l-3,3.6l-3.8,2.8c-6.4,4.7-14,7.2-22,7.2
          C36.7,94.3,20,77.6,20,57C20,36.4,36.7,19.6,57.3,19.6 M57.3,7.6C30.1,7.6,8,29.7,8,57c0,27.3,22.1,49.3,49.3,49.3
          c10.9,0,20.9-3.5,29-9.5l47,47.2l8.7-8.8L95.4,88.4c7.1-8.5,11.3-19.5,11.3-31.4C106.7,29.7,84.6,7.6,57.3,7.6L57.3,7.6z"/>
          </svg>
        </li>
        <li>
          <svg width="24" height="24" text-rendering="geometricPrecision" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
          <path d="M75,146.8l-6.4-8.1c-7-9-16.2-16.4-25.1-23.6c-9.5-7.7-19.2-15.4-26.9-25.3C12,84.1,8,78.8,5.1,72.2C1.6,64.6,0,56.5,0,46.7
          c0-24,19.9-43.5,44.4-43.5c7.5,0,14.9,1.9,21.4,5.5c3.4,1.9,6.5,4.2,9.3,6.8c2.8-2.7,5.9-4.9,9.2-6.8c6.5-3.6,13.9-5.5,21.4-5.5
          c24.5,0,44.4,19.5,44.4,43.5c0,9.8-1.6,17.9-5.1,25.5c-3,6.6-6.9,11.9-11.5,17.6c-7.7,9.9-17.4,17.6-26.8,25.2
          c-9.1,7.3-18.3,14.7-25.3,23.7L75,146.8z M44.4,13.7c-18.7,0-33.9,14.8-33.9,33.1c0,8.2,1.3,14.9,4.1,21.1
          c2.5,5.6,5.9,10.2,10.2,15.5c7,8.9,15.8,16,25.1,23.5c8.8,7.1,17.7,14.3,25.1,23.1c7.4-8.9,16.3-16,25-23
          c9.5-7.6,18.3-14.7,25.3-23.6c4.2-5.4,7.7-9.9,10.2-15.5c2.8-6.2,4.1-12.9,4.1-21.1c0-18.2-15.2-33.1-33.9-33.1
          c-5.7,0-11.4,1.4-16.3,4.2c-3.9,2.2-7.4,5.1-10.2,8.7L75,31.6l-4.1-5.1c-2.8-3.6-6.3-6.5-10.2-8.7C55.7,15.1,50.1,13.7,44.4,13.7z"/>
          </svg>
        </li>
        <li>
          <img height="32" width="32" fill="#aeaeae"/>
        </li>
      </ul>
    </div>
</div>




`;

class MyNav extends HTMLElement {
  constructor() {
    //always call super first in the constructor
    super();
    //using the shadow dom, clone the template into the shadow root
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("img").src = this.getAttribute("imgCdn");
  }
}

customElements.define("my-nav", MyNav);
