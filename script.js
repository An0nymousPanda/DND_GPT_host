
document.addEventListener('DOMContentLoaded', function() {
    // Sample data for GPT Links (this can be replaced with real data or API calls)
    const gptLinks = [
        {
            title: 'TTRPG 5e Plot Weaver',
            description: 'Assists in crafting DnD and other TTRPG campaigns, focusing on plot web creation for D&D 5e.',
            url: '#https://chat.openai.com/g/g-EksxkXZWW-ttrpg-5e-plot-weaver'
        },
        {
            title: 'Adventure Ideas',
            description: 'Get inspired with new adventure plots and storylines.',
            url: '#'
        },
        {
            title: 'Item Database',
            description: 'Explore a vast collection of magical items and artifacts.',
            url: '#'
        }
    ];

    // Function to display GPT Links
    function displayGPTLinks(links) {
        const container = document.getElementById('gpt-links-container');
        if (!container) return;

        links.forEach(link => {
            const linkElement = document.createElement('div');
            linkElement.className = 'gpt-link';

            const title = document.createElement('h3');
            title.textContent = link.title;

            const description = document.createElement('p');
            description.textContent = link.description;

            const url = document.createElement('a');
            url.href = link.url;
            url.textContent = 'Learn More';

            linkElement.appendChild(title);
            linkElement.appendChild(description);
            linkElement.appendChild(url);

            container.appendChild(linkElement);
        });
    }

    // Call the function to display links
    displayGPTLinks(gptLinks);
});
