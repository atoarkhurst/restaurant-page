import { createAndAppend } from './common';

export function setupHeader() {

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

}


export function setupFooter() {

    const content = document.querySelector('#content');
    
    const footer = createAndAppend( 'footer', content);

    createAndAppend('p', footer, { innerHTML: 'Copyright © 2023 atoarkhurst '});

    const githubLink = createAndAppend( 'a', footer, { 
        href: 'https://github.com/atoarkhurst',
        target: '_blank',
        rel: 'noopener noreferer'
         });

    // Create GitHub icon using Font Awesome classes
    createAndAppend('i', githubLink, { classList: ['fab', 'fa-github'] });


}