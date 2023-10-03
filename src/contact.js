// import css
import './css/style.css';

const contactPageLoad = function () {

    // grab the content div
    const content = document.querySelector('#content');

    // add the page header
    createAndAppend( h1, content, { innerHTML: 'Get In Touch' } );

    // add the contact info container
    const contactContainer = createAndAppend( div, content, { classList: 'contact-container' } );

    // add the entrees header to entree container
    createAndAppend( h2, contactContainer, { innerHTML : 'Our Location'});
    createAndAppend( p, contactContainer, { innerHTML : '123 Culinary St, Foodie City, NY 12345' } );

    createAndAppend( h2, contactContainer, { innerHTML : 'Business Hours'});
    createAndAppend( p, contactContainer, { innerHTML : 'Monday - Sunday: 11am - 11pm' } );

    createAndAppend( h2, contactContainer, { innerHTML : 'Phone Number'});
    createAndAppend( p, contactContainer, { innerHTML : '+1 (555) 123-4567' } );


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


export default contactPageLoad;