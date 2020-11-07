import { createGlobalStyle } from "styled-components"

export const GlobalStyleReset = createGlobalStyle`

@font-face {
  font-family: "Roboto";
  src: url('/fonts/Roboto-Regular.ttf') format("truetype");
  font-style: normal;
  font-weight: normal;
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
  line-height: 1.5;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
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
  /* font: inherit; */
} 
`
