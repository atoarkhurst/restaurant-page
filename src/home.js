const homePageLoad = function () {

    const content = document.querySelector('#content');

    const headline = document.createElement('h1');
    headline.innerHTML = 'Welcome to Bella Cucina Virtuale';

    const img = document.createElement('img');
    img.src = 'https://placehold.co/600x400';

    const para = document.createElement('p');
    para.innerHTML = 'Step into the virtual world of culinary elegance at Bella Cucina Virtuale, where innovation meets tradition.'

    content.appendChild(headline);
    content.appendChild(img);
    content.appendChild(para);

}


export default pageLoad;