// import css
import './css/style.css';
import { clearMainContent, createAndAppend } from './common';
import bgImage from './assets/background.jpg';
import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;

const contactPageLoad = function () {

    clearMainContent();
    setupHeader();

    const main = createAndAppend( 'main', content ); 

    const contactContainer = createAndAppend( 'div', main, { classList: ['contact-container']});

    // add the page header
    createAndAppend( 'h1', contactContainer, { innerHTML: 'Get In Touch' } );

    // add the contact info container
    const infoContainer = createAndAppend( 'div', contactContainer, { classList: ['info-container'] } );


    const addressInfo = createAndAppend( 'div', infoContainer, { classList: [ 'address-info']} );
    createAndAppend( 'h2', addressInfo, { innerHTML : ['Address']});
    createAndAppend( 'p', addressInfo, { innerHTML : ['123 Culinary St, Foodie City, NY 12345'] } );

    const contactInfo = createAndAppend( 'div', infoContainer, { classList: [ 'contact-info']} );
    createAndAppend( 'h2', contactInfo, { innerHTML : ['Contact Us']});
    createAndAppend( 'h3', contactInfo, { innerHTML : ['Phone Number']});
    createAndAppend( 'p', contactInfo, { innerHTML : ['+1 (555) 123-4567'] } );
    createAndAppend( 'h3', contactInfo, { innerHTML : ['Email']});
    createAndAppend( 'p', contactInfo, { innerHTML : ['bookings@email.com'] } );


    const hoursInfo = createAndAppend('div', infoContainer, { classList: [ 'bottom-info']} );
    createAndAppend( 'h2', hoursInfo, { innerHTML : ['Business Hours']});
    createAndAppend( 'p', hoursInfo, { innerHTML : ['Monday - Sunday: 11am - 11pm'] } );

    setupFooter();
}



export default contactPageLoad;