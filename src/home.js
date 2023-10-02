const homePageLoad = function () {

    const content = document.querySelector('#content');

    const header = createAndAppend( 'header', content, { classList: 'header' } );

    const nav = createAndAppend( 'nav', header, { } );

    createAndAppend('div', nav, { innerHTML: 'Home', classList: 'home-tab' } );

    createAndAppend('div', nav, { innerHTML: 'Menu', classList: 'menu-tab' } );

    createAndAppend('div', nav, { innerHTML: 'Contact', classList: 'contact-tab' } );




    const headline = document.createElement('h1');
    headline.innerHTML = 'Welcome to Bella Cucina Virtuale';

    const img = document.createElement('img');
    img.src = 'https://placehold.co/600x400';

    const para = document.createElement('p');
    para.innerHTML = 'Step into the virtual world of culinary elegance at Bella Cucina Virtuale, where innovation meets tradition.'


}

function createAndAppend(tag, parent, attributes = {}) {
    const element = document.createElement(tag);
    for ( let key in attributes) {

        if ( key === 'innerHTML'  ) {
            element.innerHTML = attributes[key];

        } else if ( key === 'classList') {
            element.classList.add(attributes[key]);

        } else {
            element[key] = attributes[key];
        }
    }

    parent.appendChild(element);
    return element;

}



export default homePageLoad;