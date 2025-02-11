import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset'

const GlobalStyles = createGlobalStyle`
${reset}
body{
    color:  ${props => props.theme.textcolor};
    background-color: ${props  => props.theme.backgroundcolor}
},
  html,
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  div,
  p,
  blockquote,
  pre,
  code,
  address,
  ul,
  ol,
  li,
  nav,
  section,
  article,
  header,
  footer,
  main,
  aside,
  dl,
  dt,
  dd,
  table,
  thead,
  tbody,
  tfoot,
  label,
  caption,
  th,
  td,
  form,
  fieldset,
  legend,
  hr,
  input,
  button,
  textarea,
  object,
  figure,
  figcaption,
  dialog {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    -webkit-touch-callout: none;
    user-select: none;
    box-sizing:border-box;
  }
  body,
  textarea,
  button,
  img,
  fieldset,
  dialog {
    border: none;
  }
  textarea {
    resize: none;
  }
  ul,
  ol,
  li {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
  }
  address,
  cite,
  code,
  em,
  i {
    font-style: normal;
    font-weight: normal;
  }
  u,
  ins,
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    cursor: pointer;
    background-color: transparent;
  }

  /* Normalize */
  input[type="number"],
  input[type="text"],
  input[type="password"],
  input[type="url"],
  input[type="email"],
  input[type="tel"],
  input[type="date"],
  textarea {
    -webkit-appearance: none;
    -moz-appearance: textfield;
    appearance: none;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  input[type="date"] {
    position: relative;
  }
  input[type="date"]::-webkit-clear-button,
  input[type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  input[type="date"]::-webkit-calendar-picker-indicator {
    position: absolute;
    left: 0;
    top: 0;
    background: transparent;
    color: transparent;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
  input[type="date"]::before {
    content: attr(data-placeholder);
    width: 100%;
  }
  input[type="date"]:valid::before {
    display: none;
  }
`

export default GlobalStyles