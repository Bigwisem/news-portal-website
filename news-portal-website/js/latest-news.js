// Latest News Page Functionality

// Load all news
function loadAllNews() {
    const container = document.getElementById('newsList');
    if (container) {
        displayNews(newsData);
    }
}

// Display news items
function displayNews(news) {
    const container = document.getElementById('newsList');
    if (container) {
        container.innerHTML = news.map(item => `
            <div class="news-item" onclick="viewNews(${item.id})">

                <div class="news-item-image">
                    <img src="${item.image}" alt="${item.title}" width="100%">
                </div>

                <div class="news-item-content">
                    <span class="news-item-category">${item.category.toUpperCase()}</span>
                    <h3 class="news-item-title">${item.title}</h3>
                    <p class="news-item-excerpt">${item.excerpt}</p>
                    <div class="news-item-meta">
                        <span>By ${item.author}</span>
                        <span>${formatDate(item.date)}</span>
                    </div>
                </div>

            </div>
        `).join('');
    }
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// View news details
function viewNews(id) {
    const news = newsData.find(n => n.id === id);
    if (news) {
        alert(`${news.title}\n\n${news.content}\n\nAuthor: ${news.author}\nDate: ${formatDate(news.date)}`);
    }
}

// Setup filter buttons
function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            buttons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterNews(filter);
        });
    });
}

// Filter news
function filterNews(category) {
    let filtered;
    if (category === 'all') {
        filtered = newsData;
    } else {
        filtered = newsData.filter(news => news.category === category);
    }
    displayNews(filtered);
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
                    news.excerpt.toLowerCase().includes(query)
                );
                
                if (results.length > 0) {
                    displayNews(results);
                } else {
                    document.getElementById('newsList').innerHTML = '<p style="color: #b0bcc8; text-align: center;">No results found</p>';
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

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAllNews();
    setupFilterButtons();
    setupSearch();
});