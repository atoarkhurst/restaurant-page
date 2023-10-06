// import css
import './css/style.css';

const homePageLoad = function () {

    const content = document.querySelector('#content');

    const header = createAndAppend( 'header', content, { classList: 'header' } );

    const nav = createAndAppend( 'nav', header, { } );

    createAndAppend('button', nav, { innerHTML: 'Home', classList: ['home-tab', 'nav-button']} );

    createAndAppend('button', nav, { innerHTML: 'Menu', classList: ['menu-tab' , 'nav-button']} );

    createAndAppend('button', nav, { innerHTML: 'Contact', classList: ['contact-tab', 'nav-button'] } );


    const main = createAndAppend( 'main', content );
    const welcomeContainer = createAndAppend( 'div', main, { classList: ['welcome-container']})

    createAndAppend( 'h1', welcomeContainer, { innerHTML: 'Welcome to Bella Cucina Virtuale' } );

    createAndAppend( 'p', welcomeContainer, { innerHTML: 'Elevate Your Senses, One Bite at a Time' } );

    createAndAppend( 'button', welcomeContainer, { classList: ['btn'], innerHTML: 'View Our Menu' } );

}

function createAndAppend(tag, parent, attributes = {}) {
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



export default homePageLoad;