import { css } from 'styled-components'

const reset = css`
  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }
  button,
  input {
    overflow: visible;
  }
  button,
  select {
    text-transform: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }
  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }
  legend {
    box-sizing: border-box;
    color: inherit;
    display: table;
    max-width: 100%;
    padding: 0;
    white-space: normal;
  }
  progress {
    vertical-align: baseline;
  }
  textarea {
    overflow: auto;
  }
  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box;
    padding: 0;
  }
  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }
  [type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }
  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }
  hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
  }
  a {
    background-color: transparent;
  }
  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }
  b,
  strong {
    font-weight: bolder;
  }
  code,
  kbd,
  samp {
    font-family: monospace, monospace;
  }
  small {
    font-size: 80%;
  }
  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sub {
    bottom: -0.25em;
  }
  sup {
    top: -0.5em;
  }
  figure {
    margin: 0 0 1rem 0;
  }
  img {
    vertical-align: middle;
    border-style: none;
  }

  /* 1000px/Tablet - 1 project per row / maintain 40px padding on bottom and sides */
  /* @media (max-width: ${props => props.theme.breakpoints[2]}) {
  img {
    width: 70%;
  }
  } */
  /* #home-featured-image {
    width: 200px;
  } */

  #img-border {
    border-style: solid;
    border-color: #f5f5f5;
    border-width: 40px 40px 0px 0px;
  }

  /* 1000px/Tablet - 1 project per row / maintain 40px padding on bottom and sides */
  @media (max-width: ${props => props.theme.breakpoints[2]}) {
  #img-border {
    border-style: solid;
    border-color: #f5f5f5;
    border-width: 0px 40px 40px 40px;
  }
  }

.flex-grid-thirds {
  display: flex;
  justify-content: space-between;
}
.flex-grid-thirds .col-1 {
  width: 360px;
  margin-right: 20px;
  margin-bottom: 40px;
}
.flex-grid-thirds .col-2 {
  width: 90%;
  margin-left: 20px;
  margin-bottom: 40px;

}

@media (max-width: 1200px) {
  .flex-grid-thirds {
  
    .col-1 img{
      width: 280px;
     
    }.col-2 {
      width: 60%;
      
    }
  }
}

@media (max-width: 800px) {
  .flex-grid-thirds {
    display: block;
    .col-1 img{
      width: 200px;
     
    }.col-2 {
      width: 100%;
      margin-left: 0px;
      
    }
  }
}

@media (max-width: 600px) {
  .flex-grid-thirds {
    display: block;
    .col-1 {
      width: 100%;
      margin: 0 0 10px 0;
    }
  }
}

  /* 1000px/Tablet - 1 project per row / maintain 40px padding on bottom and sides */
  @media (max-width: ${props => props.theme.breakpoints[1]}) {
  #contact-img{
    max-width: 325px;
  }
  .contact-body {
  width: 325px;
}
  }

/* Form */

.contact-body {
  width: 650px;
}

@media (max-width: 700px) {
  .contact-body {
  width: 325px;
}
}

input[type='text'], [type='email'],
textarea {
  width: 100%;
  padding: 7px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
  margin-top: 2px;
  margin-bottom: 16px;
  resize: vertical;
  background-color: #fff;
  font-size: large;
}



.contact-btn {
  margin: 0 0 15px 0;
  padding: 0.4em 1.3em;
  background-color: rgba(255, 255, 255, 0.2);
  color: #58545a;
  opacity: 1.00;
  font-size: 18px;
  float: right;
  border-radius: 5px;

}

.contact-btn-outline {
  
  border: 1px solid #58545a;
}

.contact-btn-outline:hover {
  border-color: #ff0000;
  color: #ff0000;
}
.tiny-grey {
  font-size: 10px;
  color: #666;
}

/* End Form */

  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  /* a{
    color: #ff0000;
    text-decoration: none;
  } */
`

export default reset
