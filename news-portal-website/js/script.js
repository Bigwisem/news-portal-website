// Main Script - Homepage Functionality

// Load featured news
function loadFeaturedNews() {
    const featured = newsData.filter(news => news.featured);
    const container = document.getElementById('featuredNews');

    if (container) {
        container.innerHTML = featured.map(news => `
            <div class="news-card" onclick="viewNews(${news.id})">
                <div class="news-card-image">
                    <img src="${news.image}" alt="${news.title}" width="100%">
                </div>

                <div class="news-card-content">
                    <span class="news-card-category">${news.category.toUpperCase()}</span>

                    <h3 class="news-card-title">${news.title}</h3>

                    <p class="news-card-excerpt">${news.excerpt}</p>

                    <div class="news-card-meta">
                        <span>${news.author}</span>
                        <span>${formatDate(news.date)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}


// Load latest news
function loadLatestNews() {
    const container = document.getElementById('latestNews');

    if (container) {
        container.innerHTML = newsData.slice(0, 6).map(news => `
            <div class="news-card" onclick="viewNews(${news.id})">

                <div class="news-card-image">
                    <img src="${news.image}" alt="${news.title}" width="100%">
                </div>

                <div class="news-card-content">

                    <span class="news-card-category">${news.category.toUpperCase()}</span>

                    <h3 class="news-card-title">${news.title}</h3>

                    <p class="news-card-excerpt">${news.excerpt}</p>

                    <div class="news-card-meta">
                        <span>${news.author}</span>
                        <span>${formatDate(news.date)}</span>
                    </div>

                </div>

            </div>
        `).join('');
    }
}


// Format date
function formatDate(dateString) {

    const date = new Date(dateString);

    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    };

    return date.toLocaleDateString('en-US', options);
}


// View news details
function viewNews(id) {

    const news = newsData.find(n => n.id === id);

    if (news) {

        alert(`${news.title}

${news.content}

Author: ${news.author}
Date: ${formatDate(news.date)}`);

    }
}


// Search functionality
function setupSearch() {

    const searchInput = document.getElementById('searchInput');

    const searchBtn = document.querySelector('.search-btn');

    if (searchBtn && searchInput) {

        searchBtn.addEventListener('click', () => {

            const query = searchInput.value.toLowerCase();

            if (query) {

                const results = newsData.filter(news =>

                    news.title.toLowerCase().includes(query) ||

                    news.excerpt.toLowerCase().includes(query) ||

                    news.category.toLowerCase().includes(query)

                );

                if (results.length > 0) {

                    alert(`Found ${results.length} results for "${query}"`);

                    displaySearchResults(results);

                }

                else {

                    alert(`No results found for "${query}"`);

                }

            }

        });

        searchInput.addEventListener('keypress', (e) => {

            if (e.key === 'Enter') {

                searchBtn.click();

            }

        });

    }

}


// Display search results
function displaySearchResults(results) {

    const container =
        document.getElementById('latestNews') ||
        document.getElementById('newsList');

    if (container) {

        container.innerHTML = results.map(news => `

            <div class="news-card" onclick="viewNews(${news.id})">

                <div class="news-card-image">
                    <img src="${news.image}" alt="${news.title}" width="100%">
                </div>

                <div class="news-card-content">

                    <span class="news-card-category">${news.category.toUpperCase()}</span>

                    <h3 class="news-card-title">${news.title}</h3>

                    <p class="news-card-excerpt">${news.excerpt}</p>

                    <div class="news-card-meta">
                        <span>${news.author}</span>
                        <span>${formatDate(news.date)}</span>
                    </div>

                </div>

            </div>

        `).join('');

    }

}


// Category filtering
function setupCategoryFilters() {

    const buttons = document.querySelectorAll('.category-btn');

    buttons.forEach(btn => {

        btn.addEventListener('click', () => {

            buttons.forEach(b => b.classList.remove('active'));

            btn.classList.add('active');

            const category = btn.dataset.category;

            filterNewsByCategory(category);

        });

    });

}


// Filter news by category
function filterNewsByCategory(category) {

    let filtered;

    if (category === 'all') {

        filtered = newsData;

    } else {

        filtered = newsData.filter(news => news.category === category);

    }

    const container = document.getElementById('latestNews');

    if (container) {

        container.innerHTML = filtered.map(news => `

            <div class="news-card" onclick="viewNews(${news.id})">

                <div class="news-card-image">
                    <img src="${news.image}" alt="${news.title}" width="100%">
                </div>

                <div class="news-card-content">

                    <span class="news-card-category">${news.category.toUpperCase()}</span>

                    <h3 class="news-card-title">${news.title}</h3>

                    <p class="news-card-excerpt">${news.excerpt}</p>

                    <div class="news-card-meta">
                        <span>${news.author}</span>
                        <span>${formatDate(news.date)}</span>
                    </div>

                </div>

            </div>

        `).join('');

    }

}


// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {

    loadFeaturedNews();

    loadLatestNews();

    setupSearch();

    setupCategoryFilters();

});