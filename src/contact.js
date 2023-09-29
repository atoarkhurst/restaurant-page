const menuPageLoad = function () {

    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.innerHTML = 'Our Menu';

    const entreeTitle = document.createElement('h2');
    entreeTitle.innerHTML = "Main Entrees"

    const foodImg1 = document.createElement('img');
    foodImg1.src = 'https://placehold.co/600x400';

    const foodTitle1 = document.createElement('h3')

    const foodDescr1 = document.createElement('p');

    const foodImg2 = document.createElement('img');
    foodImg2.src = 'https://placehold.co/600x400';

    const foodImg3 = document.createElement('img');
    foodImg3.src = 'https://placehold.co/600x400';



    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(para);

}


export default pageLoad;