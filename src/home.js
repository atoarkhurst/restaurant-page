
import './css/style.css';
import bgImage from './assets/background.jpg';
import { clearMainContent,  createAndAppend } from './common';
import { setupHeader, setupFooter } from './layout';
import menuPageLoad from './menu';

document.body.style.backgroundImage = `url(${bgImage})`;


const homePageLoad = function () {

    clearMainContent();
    
    setupHeader();

    const content = document.querySelector('#content');

    const main = createAndAppend('main', content );

    const welcomeContainer = createAndAppend( 'div', main, { classList: ['welcome-container']})

    createAndAppend( 'h1', welcomeContainer, { innerHTML: 'Welcome to Bella Cucina Virtuale' } );

    createAndAppend( 'p', welcomeContainer, { innerHTML: 'Elevate Your Senses, One Bite at a Time', classList: ['tagline'] } );

   const menuBtn = createAndAppend( 'button', welcomeContainer, { classList: ['btn'], innerHTML: 'View Our Menu' } );

    menuBtn.addEventListener('click', menuPageLoad);

    setupFooter();
}


export default homePageLoad;