// import css
import './css/style.css';
import { clearMainContent, createAndAppend, attachListeners } from './common';
import bgImage from './assets/background.jpg';
import lambImg from './assets/lamb.jpg';
import lobsterImg from './assets/lobster.jpg';
import veganImg from './assets/vegan-bowl.jpg';

import { setupHeader, setupFooter } from './layout';

document.body.style.backgroundImage = `url(${bgImage})`;

const menuPageLoad = function () {

    clearMainContent();
    
    setupHeader();

    //add main section
    const main = createAndAppend( 'main', content, {});

    const menuContainer = createAndAppend( 'div', main, { classList: ['menu-container']});


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
            imgSrc: lambImg,
            title: 'Sous-Vide Lamb Shank',
            description: 'Tender lamb, slow-cooked to perfection and served atop a bed of saffron risotto. Accompanied by a rich red wine reduction sauce.'
    
        }, 

        {

            imgSrc: lobsterImg,
            title: 'Lobster Thermidor Supreme',
            description: 'Succulent lobster tail cooked in a creamy brandy sauce, gratinated with Parmigiano-Reggiano and served with hand-cut fries. A dish that speaks opulence.'
    
        },

        {

            imgSrc: veganImg,
            title: 'Vegan Zen Bowl',
            description: 'A wholesome assortment of quinoa, roasted vegetables, avocado, and a spiced tahini dressing. Nourishing and soul-satisfying.'
    
        }
    ]

      // add the desserts container
      const dessertContainer = createAndAppend( 'div', menuContainer, { classList: ['dessert-container']} );

    // add the desserts header to dessert container
     createAndAppend( 'h2', dessertContainer, { innerHTML : 'Desserts'});

      // add dessert items div
      const dessertItems = createAndAppend( 'div', dessertContainer, { classList: ['dessert-items'] });

      

    const desserts = [

        { 
            title: 'Molten Chocolate Lava Cake',
            description: 'A decadent chocolate cake with a gooey center, served with a scoop of artisanal vanilla bean ice cream.'
        }, 

        { 
            title: 'Tiramisu Symphony',
            description: 'Layers of coffee-soaked ladyfingers and a luxurious mascarpone filling, finished with a dusting of cocoa powder. A classic with a gourmet touch.'
        },

        { 
            title: 'Berry Bliss Parfait',
            description: "Fresh seasonal berries layered between Greek yogurt and house-made granola. A perfect end that's both sweet and healthy."
        }
    ]

    entrees.forEach( entree => {
        const entreeDiv = createAndAppend('div', entreeItems, { classList: [ 'entree' ] } );
        createAndAppend( 'img', entreeDiv, { src: entree.imgSrc } );
        const entreeInfo = createAndAppend('div', entreeDiv, { classList: [ 'entree-info'] } );
        createAndAppend('h3', entreeInfo, { innerHTML: entree.title });
        createAndAppend('p', entreeInfo, { innerHTML: entree.description });
    });

 

    desserts.forEach( dessert => {
        const dessertDiv = createAndAppend('div', dessertItems, { classList: ['dessert-item' ] } );
        const dessertInfo = createAndAppend('div', dessertDiv, { classList: [ 'dessert-descr'] } );
        createAndAppend('h3', dessertInfo, { innerHTML: dessert.title });
        createAndAppend('p', dessertInfo, { innerHTML: dessert.description });
    } )

    setupFooter();
}


export default menuPageLoad;