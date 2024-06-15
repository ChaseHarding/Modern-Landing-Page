document.addEventListener('DOMContentLoaded', () => {
    const cardData = [
        { title: 'card 1', content: 'Content for card 1' },
        { title: 'card 2', content: 'Content for card 2' },
        { title: 'card 3', content: 'Content for card 3' }
    ];

    const cardContainer = document.getElementById('cardContainer')

    cardData.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card')

        const cardTitle = document.createElement('h2');
        cardTitle.textContent = item.title;

        const cardContent = document.createElement('p');
        cardContent.textContent = item.content;

        card.appendChild(cardTitle);
        card.appendChild(cardContent)
        cardContainer.appendChild(card)
    })
})