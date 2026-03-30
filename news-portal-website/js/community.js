// Community Page Functionality

// Load community members
function loadCommunityMembers() {
    const container = document.getElementById('communityGrid');
    if (container) {
        container.innerHTML = communityMembers.map(member => `
            <div class="community-member" onclick="viewMember(${member.id})">
                <div class="member-avatar">${member.image}</div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-title">${member.title}</p>
                <p class="member-bio">${member.bio}</p>
            </div>
        `).join('');
    }
}

// Load events
function loadEvents() {
    const container = document.getElementById('eventsList');
    if (container) {
        container.innerHTML = eventsData.map(event => `
            <div class="event-item" onclick="viewEvent(${event.id})">
                <div class="event-date">
                    <div class="event-date-day">${event.day}</div>
                    <div class="event-date-month">${event.month}</div>
                </div>
                <div class="event-content">
                    <h3>${event.title}</h3>
                    <p>${event.description}</p>
                </div>
            </div>
        `).join('');
    }
}

// View member details
function viewMember(id) {
    const member = communityMembers.find(m => m.id === id);
    if (member) {
        alert(`${member.name}\n\nTitle: ${member.title}\n\n${member.bio}`);
    }
}

// View event details
function viewEvent(id) {
    const event = eventsData.find(e => e.id === id);
    if (event) {
        alert(`${event.title}\n\nDate: ${event.month} ${event.day}\n\n${event.description}`);
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
                const results = communityMembers.filter(member => 
                    member.name.toLowerCase().includes(query) ||
                    member.title.toLowerCase().includes(query) ||
                    member.bio.toLowerCase().includes(query)
                );
                
                if (results.length > 0) {
                    displayMembers(results);
                } else {
                    document.getElementById('communityGrid').innerHTML = '<p style="color: #b0bcc8; text-align: center;">No members found</p>';
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

// Display members
function displayMembers(members) {
    const container = document.getElementById('communityGrid');
    if (container) {
        container.innerHTML = members.map(member => `
            <div class="community-member" onclick="viewMember(${member.id})">
                <div class="member-avatar">${member.image}</div>
                <h3 class="member-name">${member.name}</h3>
                <p class="member-title">${member.title}</p>
                <p class="member-bio">${member.bio}</p>
            </div>
        `).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadCommunityMembers();
    loadEvents();
    setupSearch();
});
