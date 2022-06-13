<div align="center">
  <img src="https://raw.githubusercontent.com/danxschz/danxschz/main/img/danxschz-logo.png" alt="logo" width="200" height="auto">
  <h1>Generate Element</h1>

  <p>
  Create a new HTML element and specify class, text content and attributes in a single function
  </p>

  <p>
    <a href="https://github.com/danxschz/generate-element/graphs/contributors">
      <img src="https://img.shields.io/github/contributors/danxschz/generate-element" alt="contributors">
    </a>
    <a href="https://github.com/danxschz/generate-element/commits/main">
      <img src="https://img.shields.io/github/last-commit/danxschz/generate-element" alt="last update">
    </a>
    <a href="https://github.com/danxschz/generate-element/blob/master/LICENSE">
      <img src="https://img.shields.io/github/license/danxschz/generate-element.svg" alt="license">
    </a>
  </p>

  <h4>
    <a href="https://github.com/danxschz/generate-element">GitHub</a>
    <span> · </span>
    <a href="https://www.npmjs.com/package/generate-element">npm</a>
  </h4>
</div>

<br/>

## Getting Started

### Install

In order to setup and use this package, you will need to:

Install dependency

```bash
  npm install --save-dev generate-element
```

Import the module in your JavaScript file

```bash
  import generateElement from 'generate-element'
```

### Usage

Run the function

```bash
  generateElement(type, class, textContent, { attributes })
```

Example

```bash
  const anchorElement = generateElement('a', 'example', 'Click me', { href: '#', title: 'This is an example' })
```

To skip any parameter, pass false as the argument

## License

Distributed under the MIT License. See LICENSE for more information.

## Contact

Daniel Sanchez (@danxschz) - danxschz@gmail.com
