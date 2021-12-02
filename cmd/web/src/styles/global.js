import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: 0;
}

:root {
  --background-dark: #ededed;
  --background-light: #ffffff;

  --text-dark: #1d1d1d;
  --text-light: #ffffff;
  
  --primary-color: #2cacce;
  --secondary-color: #006c88;

  --gray-dark: #7c7c7c;
  --gray-light: #f0f0f0;

  --blue-gradient: linear-gradient(
    90deg,
    rgba(0, 202, 255, 1) 0%,
    rgba(0, 179, 226, 1) 100%
  );

  --search-input-text: #878585;
  --search-input-background: #f3f2ef;

  --divider-background: #f0f0f0;

  --input-background: #f8f8fc;

  --cancel: #e1e3e5;
  --delete: #eb3b35;
  --save: #36b336;
}

body, html {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  height: 100%;
  width: 100%;
}

a {
  text-decoration: none;
}

body,
input,
button {
  font: 500 1rem 'Rajdhani', sans-serif;
  color: var(--text-primary);
  border: none;
}

p,
textarea {
  font: 400 1rem Inter;
  color: var(--text-primary);
}

.drop-shadow {
  -webkit-box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.15);
}

.fill-white {
  filter: invert(100%) sepia(94%) saturate(22%) hue-rotate(332deg) brightness(107%) contrast(106%);
}

.fill-black {
  filter: invert(0%) sepia(56%) saturate(19%) hue-rotate(293deg) brightness(97%) contrast(104%);
}

.fill-secondary-blue {
  filter: invert(27%) sepia(99%) saturate(1061%) hue-rotate(161deg) brightness(91%) contrast(102%);
}

.button {
  cursor: pointer;
  font-size: 1.15rem;
  line-height: 1.625rem;

  transition: all 0.2s;

  cursor: pointer;

  display: inline-flex;
  justify-content: center;
  align-items: center;
}

@media (min-width: 1400px) {
  html {
    font-size: 110%;
  }
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

.spinner {
  animation-name: spin;
  animation-duration: 1500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
      transform:rotate(0deg);
  }
  to {
      transform:rotate(360deg);
  }
}
`;

export const AppBackground = createGlobalStyle`
  body {
    background-color: var(--background-dark);
  }
`;
