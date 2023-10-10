export function createAndAppend(tag, parent, attributes = {}) {
    const element = document.createElement(tag);
    for ( let key in attributes) {

        if ( key === 'innerHTML'  ) {
            element.innerHTML = attributes[key];

        } else if ( key === 'classList') {
            element.classList.add(...attributes[key]);

        } else {
            element[key] = attributes[key];
        }
    }

    parent.appendChild(element);
    return element;
  }

  export function clearMainContent() {
    const content = document.querySelector('#content');
    content.innerHTML = '';
  }

  