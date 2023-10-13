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
    const infoContainer = createAndAppend( 'div', content, { classList: ['info-container'] } );

    // add the entrees header to entree container
    const topInfo = createAndAppend( 'div', infoContainer, { classList: ['top-info']});

    const addressInfo = createAndAppend( 'div', topInfo, { classList: [ 'address-info']} );
    createAndAppend( 'h2', addressInfo, { innerHTML : ['Address']});
    createAndAppend( 'p', addressInfo, { innerHTML : ['123 Culinary St, Foodie City, NY 12345'] } );

    const contactInfo = createAndAppend( 'div', topInfo, { classList: [ 'contact-info']} );
    createAndAppend( 'h2', contactInfo, { innerHTML : ['Contact Us']});
    createAndAppend( 'h3', contactInfo, { innerHTML : ['Phone Number']});
    createAndAppend( 'p', contactInfo, { innerHTML : ['+1 (555) 123-4567'] } );
    createAndAppend( 'h3', contactInfo, { innerHTML : ['Email']});
    createAndAppend( 'p', contactInfo, { innerHTML : ['bookings@email.com'] } );


    const bottomInfo = createAndAppend('div', infoContainer, { classList: [ 'bottom-info']} );
    createAndAppend( 'h2', bottomInfo, { innerHTML : ['Business Hours']});
    createAndAppend( 'p', bottomInfo, { innerHTML : ['Monday - Sunday: 11am - 11pm'] } );

    setupFooter();
}



export default contactPageLoad;