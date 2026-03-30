// Categories Page Functionality

// Load categories grid
function loadCategoriesGrid() {
    const container = document.getElementById('categoriesGrid');
    if (container) {
        container.innerHTML = categories.map(category => `
            <div class="category-card" onclick="selectCategory('${category.name.toLowerCase()}')">
                <div class="category-icon">${category.icon}</div>
                <h3 class="category-name">${category.name}</h3>
                <p class="category-count">${newsData.filter(n => n.category === category.name.toLowerCase()).length} articles</p>
            </div>
        `).join('');
    }
}

// Select category and display news
function selectCategory(categoryName) {
    const categoryTitle = document.getElementById('selectedCategoryTitle');
    if (categoryTitle) {
        categoryTitle.textContent = `${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} News`;
    }
    
    const filtered = newsData.filter(news => news.category === categoryName);
    displayCategoryNews(filtered);
}

// Display category news
function displayCategoryNews(news) {
    const container = document.getElementById('categoryNewsList');
    if (container) {
        if (news.length === 0) {
            container.innerHTML = '<p style="color: #b0bcc8; text-align: center;">No news in this category</p>';
        } else {
            container.innerHTML = news.map(item => `
                <div class="news-item" onclick="viewNews(${item.id})">
                    <div class="news-item-image">${item.image}</div>
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

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query) {
                const results = categories.filter(cat => 
                    cat.name.toLowerCase().includes(query)
                );
                
                if (results.length > 0) {
                    const container = document.getElementById('categoriesGrid');
                    if (container) {
                        container.innerHTML = results.map(category => `
                            <div class="category-card" onclick="selectCategory('${category.name.toLowerCase()}')">
                                <div class="category-icon">${category.icon}</div>
                                <h3 class="category-name">${category.name}</h3>
                                <p class="category-count">${newsData.filter(n => n.category === category.name.toLowerCase()).length} articles</p>
                            </div>
                        `).join('');
                    }
                } else {
                    document.getElementById('categoriesGrid').innerHTML = '<p style="color: #b0bcc8; text-align: center;">No categories found</p>';
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
    loadCategoriesGrid();
    setupSearch();
});
