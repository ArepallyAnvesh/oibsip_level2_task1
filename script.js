// Load existing users from localStorage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Handle registration
document.getElementById('register-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('register-username').value.trim();
    const password = document.getElementById('register-password').value.trim();

    // Validate inputs
    if (!username || !password) {
        document.getElementById('message').innerText = 'Username and password are required!';
        return;
    }

    // Check if the username already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        document.getElementById('message').innerText = 'Username already exists!';
        return;
    }

    // Register the user
    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users)); // Save users to localStorage
    document.getElementById('message').innerText = 'Registration successful! You can now log in.';
});

// Handle login
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    // Validate inputs
    if (!username || !password) {
        document.getElementById('message').innerText = 'Username and password are required!';
        return;
    }

    // Check user credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        localStorage.setItem('loggedIn', 'true'); // Set loggedIn status
        window.location.href = 'secure.html';
    } else {
        document.getElementById('message').innerText = 'Invalid username or password!';
    }
});

// Toggle between forms
document.getElementById('show-login').addEventListener('click', () => {
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('message').innerText = '';
});

document.getElementById('show-register').addEventListener('click', () => {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('message').innerText = '';
});
