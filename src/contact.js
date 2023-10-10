// import css
import './css/style.css';
import { clearMainContent, createAndAppend } from './common';
import bgImage from './assets/background-image.jpg';
import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;

const contactPageLoad = function () {

    clearMainContent();
    setupHeader();

    // add the page header
    createAndAppend( 'h1', content, { innerHTML: 'Get In Touch' } );

    // add the contact info container
    const contactContainer = createAndAppend( 'div', content, { classList: ['contact-container'] } );

    // add the entrees header to entree container
    createAndAppend( 'h2', contactContainer, { innerHTML : ['Our Location']});
    createAndAppend( 'p', contactContainer, { innerHTML : ['123 Culinary St, Foodie City, NY 12345'] } );

    createAndAppend( 'h2', contactContainer, { innerHTML : ['Business Hours']});
    createAndAppend( 'p', contactContainer, { innerHTML : ['Monday - Sunday: 11am - 11pm'] } );

    createAndAppend( 'h2', contactContainer, { innerHTML : ['Phone Number']});
    createAndAppend( 'p', contactContainer, { innerHTML : ['+1 (555) 123-4567'] } );

    setupFooter();
}



export default contactPageLoad;