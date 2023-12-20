let currentIndex = 0;

// On page load, fetch news.
document.addEventListener('DOMContentLoaded', function() {
    fetchNews();
});

// Function to fetch news from API
function fetchNews() {
    fetch('https://newsdata.io/api/1/news?apikey=pub_34915ca1871c742f45e41677aaa407c0cff49&qInTitle=COVID&language=en&category=health&image=1')
        .then(response => response.json())
        .then(data => {
            const results = data.results;
            const container = document.querySelector('.news-items-container');
            results.forEach(item => {
                const newsItem = createNewsItem(item);
                container.appendChild(newsItem);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Function to ensure incoming payload does not break HTML
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function(match) {
        switch (match) {
            case '&':
                return '';
            case '<':
                return '';
            case '>':
                return '';
            case '"':
                return '';
            case "'":
                return '';
            default:
                return match;
        }
    });
}

// Function to navigate news items.
function navigateNews(direction) {
    const container = document.querySelector('.news-items-container');
    const itemWidth = container.children[0].offsetWidth;
    const containerWidth = container.offsetWidth;
    const totalItems = container.children.length;
    const itemsInView = Math.floor(containerWidth / itemWidth);

    if (direction === 'next' && currentIndex < totalItems - itemsInView) {
        currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
        currentIndex--;
    }

    const transformValue = -(currentIndex * itemWidth);
    container.style.transform = `translateX(${transformValue}px)`;
}

// Function to create a news item.
function createNewsItem(item) {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');

    const link = document.createElement('a');
    const image = document.createElement('img');
    link.href = item.link;
    link.target = "_blank";
    image.src = item.image_url;
    image.alt = escapeHTML(item.title);
    link.appendChild(image);
    newsItem.appendChild(link);

    const headline = document.createElement('p');
    headline.textContent = escapeHTML(item.title);
    newsItem.appendChild(headline);

    return newsItem;
}
