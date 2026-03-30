// Announcements Page Functionality

// Load announcements
function loadAnnouncements() {
    const container = document.getElementById('announcementsList');
    if (container) {
        container.innerHTML = announcementsData.map(announcement => `
            <div class="announcement-item">
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-date">${formatDate(announcement.date)} - Priority: ${announcement.priority.toUpperCase()}</p>
                <p class="announcement-content">${announcement.content}</p>
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

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', () => {
            const query = searchInput.value.toLowerCase();
            if (query) {
                const results = announcementsData.filter(announcement => 
                    announcement.title.toLowerCase().includes(query) ||
                    announcement.content.toLowerCase().includes(query)
                );
                
                if (results.length > 0) {
                    displayAnnouncements(results);
                } else {
                    document.getElementById('announcementsList').innerHTML = '<p style="color: #b0bcc8; text-align: center;">No announcements found</p>';
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

// Display announcements
function displayAnnouncements(announcements) {
    const container = document.getElementById('announcementsList');
    if (container) {
        container.innerHTML = announcements.map(announcement => `
            <div class="announcement-item">
                <h3 class="announcement-title">${announcement.title}</h3>
                <p class="announcement-date">${formatDate(announcement.date)} - Priority: ${announcement.priority.toUpperCase()}</p>
                <p class="announcement-content">${announcement.content}</p>
            </div>
        `).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadAnnouncements();
    setupSearch();
});
