// import css
import './css/style.css';
import bgImage from './assets/background-image.jpg';
document.body.style.backgroundImage = `url(${bgImage})`;


const homePageLoad = function () {

    const content = document.querySelector('#content');

    const header = createAndAppend( 'header', content, {classList: ['header' ]} );

    const nav = createAndAppend( 'nav', header, {} );

    const navList = createAndAppend('ul', nav, {classList: ['menu-bar']});

    const homeListItem = createAndAppend ('li', navList, {} );

    const menuListItem = createAndAppend ('li', navList, {} );

    const contactListItem = createAndAppend ('li', navList, {} );

    createAndAppend('a', homeListItem, { innerHTML: 'Home', classList: ['home-tab', 'menu-item']} );

    createAndAppend('a', menuListItem, { innerHTML: 'Menu', classList: ['menu-tab' , 'menu-item']} );

    createAndAppend('a', contactListItem, { innerHTML: 'Contact', classList: ['contact-tab', 'menu-item'] } );


    const main = createAndAppend( 'main', content );
    const welcomeContainer = createAndAppend( 'div', main, { classList: ['welcome-container']})

    createAndAppend( 'h1', welcomeContainer, { innerHTML: 'Welcome to Bella Cucina Virtuale' } );

    createAndAppend( 'p', welcomeContainer, { innerHTML: 'Elevate Your Senses, One Bite at a Time', classList: ['tagline'] } );

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