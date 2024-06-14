const linksAndImages = [
    {
        name: 'Cubo-3D',
        page: 'assests/pages/Cubo-3D/index.html',
        img: 'assests/pages/Cubo-3D/cubo-3d.png'
    },
    {
        name: 'DashBoard',
        page: 'assests/pages/Dashboard/index.html',
        img: 'assests/pages/Dashboard/dashboard.png'
    },
    {
        name: 'Kenoji',
        page: 'assests/pages/Kenoji/index.html',
        img: 'assests/pages/Kenoji/kenoji.png'
    },
    {
        name: 'Ser Digital',
        page: 'assests/pages/Ser-Digital/index.html',
        img: 'assests/pages/Ser-Digital/ser-digital.png'
    },
    {
        name: 'The Sun',
        page: 'assests/pages/The-Sun/index.html',
        img: 'assests/pages/The-Sun/the-sun.png'
    },
];

function generateProject(name, page, img) {
    const article = document.createElement('article');
    article.classList.add('project');

    const image = document.createElement('img');
    image.setAttribute('src', img);
    article.append(image);

    const content = document.createElement('div');
    content.classList.add('content');
    article.append(content);

    const text = document.createElement('div');
    text.classList.add('text');
    content.append(text);

    const h2 = document.createElement('h2');
    h2.innerText = name;
    text.append(h2);

    const a = document.createElement('a');
    a.setAttribute('href', page);
    a.setAttribute('target', '_blank');
    a.classList.add('btn');
    a.innerText = 'Visite Aqui';
    text.append(a);

    document.querySelector('.container-front').append(article);
}

linksAndImages.forEach( project => {
    generateProject(project.name, project.page, project.img);
});