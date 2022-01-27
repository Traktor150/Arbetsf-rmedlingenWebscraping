'use strict';

fetch('/data')
.then(response => response.json())
.then(data => load(data));

const showMore = (event) => {
    
}

const load = (data) => {
    const article = document.getElementById('content');

    data.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('card');
        
        let title = document.createElement('h2');
        title.textContent = element.title;

        let company = document.createElement('h3');
        company.textContent = element.company + ' - ' + element.county;
        
        let content = document.createElement('p');
        content.textContent = element.description;

        // let link = document.createElement('a');
        // link.href = element.link;
        // link.textContent = element.link;

        let button = document.createElement('button');
        button.addEventListener('click', showMore);
        button.textContent = 'Visa mer';

        card.append(title, company, button, content);
        article.append(card);
    });
}