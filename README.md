# Web-Components-Showcase
## Xello Design System - Proof of Concept 

### The code will serve as a source of truth demonstrating the connection between:
Design Tokens \
Web Components

## How to Use these Web Components in Angular
https://docs.google.com/document/d/1-HS78ZZP3eh4PqupmoDMriP_QyuMNMd_ImgJTciSf4c/edit

## How to Use these Web Components in React
https://docs.google.com/document/d/1vAII4wo2drAFrz_wPG6pY4e2FM1gq_zaNOUyUdjT5iI/edit?usp=sharing

#### How to install
All components are available via CDN. Each component is available by referencing the specific component.
```html
<script type="module" src="https://cc3cdndev.blob.core.windows.net/xsg/src/contentBlock.js"></script>
```

## List of Available Web Components
Each Web Component is hosted on a CDN that begins like this: https://cc3cdndev.blob.core.windows.net/xsg/src/. \
\
To access a Web Component simply append the component name with the ".js" file name suffix to the end of the CDN url. \
\
For example, https://cc3cdndev.blob.core.windows.net/xsg/src/contentBlock.js will retrieve the "Content Block" web component. 

Current List of Components:
- [contentBlock](https://cc3cdndev.blob.core.windows.net/xsg/src/contentBlock.js) \
    Attributes Available: 
    - text
    - title
    - imgCdn
- [feedbackBanner](https://cc3cdndev.blob.core.windows.net/xsg/src/feedbackBanner.js) \
    Attributes Available: 
    - title
- [myNav](https://cc3cdndev.blob.core.windows.net/xsg/src/myNav.js) \
    Attributes Available: 
    - imgCdn
- [pageTitle](https://cc3cdndev.blob.core.windows.net/xsg/src/pageTitle.js) \
    Attributes Available: 
    - title
- [xelloButton](https://cc3cdndev.blob.core.windows.net/xsg/src/xelloButton.js) \
    Attributes Available: 
    - value

## Improvements to Make
* Using BEM for Styling
* More Fleshed out Components
