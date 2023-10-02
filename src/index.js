// import function 
import homePageLoad from './home';
import menuPageLoad from './menu';
import contactPageLoad from './contact';


homePageLoad();

const menuTab = document.querySelector( '.menu-tab' );
const contactTab = document.querySelector( '.contact-tab' );


menuTab.addEventListener( 'click', menuPageLoad );