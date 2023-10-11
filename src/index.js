// import function 
import homePageLoad from './home';
import menuPageLoad from './menu';
import contactPageLoad from './contact';


menuPageLoad();


const content = document.querySelector('#content');

//Attach event listener to content and switch tabs
content.addEventListener('click', function(event) {
    if ( event.target.matches('.menu-tab') ) {
        handleTabClicked('menu') 
    } else if ( event.target.matches('.home-tab') ) {
        handleTabClicked('home');
    } else if ( event.target.matches('.contact-tab') ) {
        handleTabClicked('contact');
    }
});



//load page depending on tab clicked
function handleTabClicked(tab) {
    content.innerHTML = '';

    if ( tab == 'menu' ) {
        menuPageLoad();

    } else if ( tab == 'home' ) {

        homePageLoad(); 

    } else if ( tab == 'contact' ) {

        contactPageLoad();
    }
}

