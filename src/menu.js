// import css
import './css/style.css';
import { clearMainContent, createAndAppend, attachListeners } from './common';
import bgImage from './assets/background-image.jpg';
import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;

const menuPageLoad = function () {

    clearMainContent();
    
    setupHeader();


    // add the page header
    createAndAppend( 'h1', content, { innerHTML: 'Our Menu' } );

    // add the entrees container
    const entreeContainer = createAndAppend( 'div', content, { classList: ['entree-container']} );

    // add the entrees header to entree container
    createAndAppend( 'h2', entreeContainer, { innerHTML : 'Main Entrees'});


    // add entree items div 
    const entreeItems = createAndAppend( 'div', entreeContainer, { classList: ['entree-items'] });

    const entrees = [
        {
            imgSrc: 'https://placehold.co/600x400',
            title: 'Sous-Vide Lamb Shank',
            description: 'Tender lamb, slow-cooked to perfection and served atop a bed of saffron risotto. Accompanied by a rich red wine reduction sauce.'
    
        }, 

        {

            imgSrc: 'https://placehold.co/600x400',
            title: 'Sous-Vide Lamb Shank',
            description: 'Tender lamb, slow-cooked to perfection and served atop a bed of saffron risotto. Accompanied by a rich red wine reduction sauce.'
    
        }
    ]

    entrees.forEach( entree => {
        const entreeDiv = createAndAppend('div', entreeItems, { classList: [ 'entree' ] } );
        createAndAppend( 'img', entreeDiv, { src: entree.imgSrc } );
        createAndAppend('h3', entreeDiv, { innerHTML: entree.title });
        createAndAppend('p', entreeDiv, { innerHTML: entree.description });
    });

    setupFooter();
}


export default menuPageLoad;