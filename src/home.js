
import './css/style.css';
import bgImage from './assets/background-image.jpg';
import { clearMainContent,  createAndAppend } from './common';
import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;


const homePageLoad = function () {

    clearMainContent();
    
    setupHeader();

    const main = createAndAppend( 'main', content );

    const welcomeContainer = createAndAppend( 'div', main, { classList: ['welcome-container']})

    createAndAppend( 'h1', welcomeContainer, { innerHTML: 'Welcome to Bella Cucina Virtuale' } );

    createAndAppend( 'p', welcomeContainer, { innerHTML: 'Elevate Your Senses, One Bite at a Time', classList: ['tagline'] } );

    createAndAppend( 'button', welcomeContainer, { classList: ['btn'], innerHTML: 'View Our Menu' } );

    setupFooter();
}


export default homePageLoad;