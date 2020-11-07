import { createGlobalStyle } from "styled-components"

export const GlobalStyleReset = createGlobalStyle`

@font-face {
  font-family: "Roboto";
  src: url("../static/fonts/Roboto-Regular.ttf");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}
@font-face {
  font-family: "Roboto-Medium";
  src: url("../static/fonts/Roboto/Roboto-Medium.ttf");
  font-style: medium;
  font-weight: 500;
  font-display: swap;
}
@font-face {
  font-family: "Roboto-Bold";
  src: url('../static/fonts/Roboto/Roboto-Bold.ttf');
  font-style: bold;
  font-weight: 700;
  font-display: swap;
}
  /* box-sizing */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* clear paddings for list */
ul[class],
ol[class] {
  padding: 0;
}

/* clear margins */
body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

/* optimization body */
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
}

/* clear lists styles */
ul[class],
ol[class] {
  list-style: none;
}

/* a to default (not class type) */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* images */
img {
  max-width: 100%;
  display: block;
}

/* acticles*/
article > * + * {
  margin-top: 1em;
}

/* inherit fonts for inputs and btns */
input,
button,
textarea,
select {
  font: inherit;
} 

/* disable defaults animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

`