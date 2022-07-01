const generateElement = (type, className, textContent, attributes) => {
  const element = document.createElement(type);
  if (className) element.setAttribute('class', className);
  if (textContent) element.textContent = textContent;
  for (let attribute in attributes) {
    element.setAttribute(attribute, attributes[attribute]);
  }
  return element;
}

module.exports = generateElement;
