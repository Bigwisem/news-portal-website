// Login Page Functionality

// Handle login form submission
function setupLoginForm() {
    const form = document.getElementById('loginForm');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;
            
            // Validate form
            if (!username || !password) {
                alert('Please enter username and password');
                return;
            }
            
            // Check credentials
            const user = users.find(u => 
                (u.username === username || u.email === username) && 
                u.password === password
            );
            
            if (user) {
                // Store login info if remember is checked
                if (remember) {
                    localStorage.setItem('loggedInUser', JSON.stringify({
                        username: user.username,
                        name: user.name,
                        email: user.email
                    }));
                }
                
                alert(`Welcome, ${user.name}!\n\nYou have successfully logged in.`);
                
                // Redirect to home page
                setTimeout(() => {
                    window.location.href = 'index.html';
                }, 1500);
            } else {
                alert('Invalid username or password.\n\nTry: demo / password123');
            }
        });
    }
}

// Check if user is already logged in
function checkLoginStatus() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const user = JSON.parse(loggedInUser);
        alert(`Welcome back, ${user.name}!`);
    }
}

// Logout function
function logout() {
    localStorage.removeItem('loggedInUser');
    alert('You have been logged out.');
    window.location.href = 'index.html';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    setupLoginForm();
    checkLoginStatus();
});
