// import css
import './css/style.css';
import { clearMainContent, createAndAppend, attachListeners } from './common';
import bgImage from './assets/background-image.jpg';
import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;

const menuPageLoad = function () {

    clearMainContent();
    
    setupHeader();

    //add main section
    const main = createAndAppend( 'main', content, {});

    const menuContainer = createAndAppend( 'div', content, { classList: ['menu-container']});


    // add the page header
    createAndAppend( 'h1', menuContainer, { innerHTML: 'Our Menu' } );

    // add the entrees container
    const entreeContainer = createAndAppend( 'div', menuContainer, { classList: ['entree-container']} );

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
        const description = createAndAppend('div', entreeDiv, { classList: [ 'entree-descr'] } );
        createAndAppend('h3', description, { innerHTML: entree.title });
        createAndAppend('p', description, { innerHTML: entree.description });
    });

    setupFooter();
}


export default menuPageLoad;