// auth.js

console.log('Melody Maker: Authentication Script Loaded');

// --- UI Element References ---

let loginButton; // Not directly used, but kept for consistency if needed later
let signupButton; // Not directly used, but kept for consistency if needed later
let headerButtonsContainer; // The div containing signup/login/welcome buttons

// --- Modals and Form Elements ---
let authModal;
let closeAuthModalBtn;
let authModalTitle;
let authForm;
let usernameInput;
let passwordInput;
let authSubmitBtn;
let authMessageDisplay; // For displaying messages like "Login Successful"
let authToggleText;
let switchToSignupLink; // Renamed for clarity
let switchToLoginLink;  // Renamed for clarity

// --- Global Variable for current user state (persistent using localStorage for this demo) ---
let currentUser = null; // Stores the username of the logged-in user
let isSignupMode = false; // Tracks whether the modal is in signup or login mode

// --- Utility Functions ---

function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('mm_users')) || {};
    } catch (e) {
        console.error("Error parsing 'mm_users' from localStorage:", e);
        return {}; // Return empty object if parsing fails
    }
}

function saveUser(username, password) {
    const users = getUsers(); // Get current users
    users[username] = password; // Store password directly (insecure for a real app)
    localStorage.setItem('mm_users', JSON.stringify(users));
    console.log(`User '${username}' signed up.`);
}

function getUserPassword(username) {
    const users = getUsers(); // Get current users
    return users[username] || null;
}

function showAuthMessage(message, type) {
    if (authMessageDisplay) {
        authMessageDisplay.textContent = message;
        authMessageDisplay.style.color = type === 'success' ? 'green' : 'red';
        authMessageDisplay.style.display = 'block';
    }
}

function hideAuthMessage() {
    if (authMessageDisplay) {
        authMessageDisplay.style.display = 'none';
    }
}

function updateAuthUI() {
    console.log("Updating Auth UI. Current user:", currentUser);
    if (currentUser) {
        // User is logged in
        if (headerButtonsContainer) {
            headerButtonsContainer.innerHTML = `
                <span class="logged-in-message" id="welcomeMessage">Welcome, ${currentUser}!</span>
                <button class="logout-btn btn btn-outline-accent ms-3">Logout</button>
            `;
            const logoutBtn = document.querySelector('.logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', handleLogout);
            }
        }
        // Ensure auth modal is hidden
        if (authModal) authModal.style.display = 'none';
        // Show main app content (assuming it's a flex container or similar)
        const appContainer = document.querySelector('.container');
        if (appContainer) appContainer.style.display = 'flex';
    } else {
        // User is logged out
        if (headerButtonsContainer) {
            headerButtonsContainer.innerHTML = `
                <button class="signup-btn btn btn-outline-accent">Sign up</button>
                <button class="login-btn btn btn-outline-accent ms-2">Log in</button>
            `;
            // Re-attach listeners for newly created buttons (important!)
            const newSignupBtn = document.querySelector('.signup-btn');
            const newLoginBtn = document.querySelector('.login-btn');
            if (newSignupBtn) {
                newSignupBtn.addEventListener('click', () => {
                    if (authModal) authModal.style.display = 'flex';
                    setAuthMode(true); // Switch to signup
                });
            }
            if (newLoginBtn) {
                newLoginBtn.addEventListener('click', () => {
                    if (authModal) authModal.style.display = 'flex';
                    setAuthMode(false); // Switch to login
                });
            }
        }
        // Hide main app content until login
        const appContainer = document.querySelector('.container');
        if (appContainer) appContainer.style.display = 'none';
        // Show auth modal
        if (authModal) authModal.style.display = 'flex';
        setAuthMode(false); // Default to login view
    }
}

function setAuthMode(signup) {
    isSignupMode = signup;
    if (authModalTitle) authModalTitle.textContent = signup ? "Signup" : "Login";
    if (authSubmitBtn) authSubmitBtn.textContent = signup ? "Signup" : "Login";
    if (authToggleText) {
        authToggleText.innerHTML = signup
            ? `Already have an account? <a href="#" id="switchToLoginLink">Login</a>`
            : `Don't have an account? <a href="#" id="switchToSignupLink">Signup</a>`;
        // Re-attach listeners after content change
        switchToLoginLink = document.getElementById('switchToLoginLink');
        switchToSignupLink = document.getElementById('switchToSignupLink');
        if (switchToLoginLink) {
            switchToLoginLink.onclick = (e) => {
                e.preventDefault();
                setAuthMode(false); // Switch to login
                hideAuthMessage(); // Clear message on toggle
            };
        }
        if (switchToSignupLink) {
            switchToSignupLink.onclick = (e) => {
                e.preventDefault();
                setAuthMode(true); // Switch to signup
                hideAuthMessage(); // Clear message on toggle
            };
        }
    }
    hideAuthMessage(); // Clear any previous messages
    if (usernameInput) usernameInput.value = '';
    if (passwordInput) passwordInput.value = '';
}

function handleLogin(e) {
    e.preventDefault(); // Prevent default form submission
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    if (!username || !password) {
        showAuthMessage("Please enter both username and password.", 'error');
        return;
    }
    const storedPassword = getUserPassword(username);
    if (storedPassword && storedPassword === password) {
        showAuthMessage("Login successful!", 'success');
        currentUser = username; // Set global current user
        localStorage.setItem('loggedInUser', username); // Persist login
        setTimeout(() => {
            if (authModal) authModal.style.display = 'none'; // Hide modal after delay
            hideAuthMessage(); // Clear message
            updateAuthUI(); // Update header buttons and show main content
        }, 1200);
    } else {
        showAuthMessage("Invalid username or password.", 'error');
    }
}

function handleSignup(e) {
    e.preventDefault(); // Prevent default form submission
    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    if (!username || !password) {
        showAuthMessage("Please enter both username and password.", 'error');
        return;
    }
    const users = getUsers();
    if (users[username]) {
        showAuthMessage("Username already exists. Please choose a different one.", 'error');
        return;
    }
    saveUser(username, password);
    showAuthMessage("Signup successful! Please log in.", 'success');
    // Automatically switch to login form after a short delay
    setTimeout(() => {
        setAuthMode(false); // Switch to login mode
        hideAuthMessage();
    }, 1500);
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('loggedInUser'); // Clear persisted login
    console.log("User logged out.");
    updateAuthUI(); // Update header buttons to show login/signup
}

// --- Initialization on DOMContentLoaded ---
document.addEventListener('DOMContentLoaded', () => {
    console.log('Auth script DOMContentLoaded');
    // Get references to all necessary UI elements
    authModal = document.getElementById('authModal');
    closeAuthModalBtn = document.getElementById('closeAuthModalBtn');
    authModalTitle = document.getElementById('authModalTitle');
    authForm = document.getElementById('authForm');
    usernameInput = document.getElementById('usernameInput');
    passwordInput = document.getElementById('passwordInput');
    authSubmitBtn = document.getElementById('authSubmitBtn');
    authMessageDisplay = document.getElementById('authMessageDisplay');
    authToggleText = document.getElementById('authToggleText');
    headerButtonsContainer = document.getElementById('headerButtonsContainer'); // <-- UPDATED SELECTOR

    // Basic null checks for critical elements
    if (!authModal || !closeAuthModalBtn || !authModalTitle || !authForm || !usernameInput ||
        !passwordInput || !authSubmitBtn || !authMessageDisplay || !authToggleText || !headerButtonsContainer) {
        console.error("CRITICAL ERROR: One or more essential authentication UI elements not found. Auth functionality will be limited.");
        return; // Exit if core elements are missing
    }

    // Attach event listeners
    if (closeAuthModalBtn) {
        closeAuthModalBtn.addEventListener('click', () => {
            authModal.style.display = 'none';
            hideAuthMessage();
        });
    }

    // Close modal if clicking outside
    if (authModal) {
        authModal.addEventListener('click', (event) => {
            if (event.target === authModal) {
                authModal.style.display = 'none';
                hideAuthMessage();
            }
        });
    }

    // The form's submit handler now dynamically calls login/signup
    if (authForm) {
        authForm.addEventListener('submit', (e) => {
            if (isSignupMode) {
                handleSignup(e);
            } else {
                handleLogin(e);
            }
        });
    }

    // Initial setup of toggle links and UI state
    // These listeners need to be attached first, then updateAuthUI can decide to show the modal.

    // Forgot Password Handler
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(e) {
            e.preventDefault();
            const username = prompt("Enter your username to reset password:");
            if (!username) return;
            const users = getUsers();
            if (!users[username]) {
                showAuthMessage("Username not found.", 'error');
                return;
            }
            const newPassword = prompt("Enter your new password (min 8 characters):");
            if (!newPassword || newPassword.length < 8) {
                showAuthMessage("Password must be at least 8 characters.", 'error');
                return;
            }
            saveUser(username, newPassword);
            // Switch to login mode, prefill username, clear password, show modal
            setAuthMode(false); // Switch to login mode
            if (usernameInput) usernameInput.value = username;
            if (passwordInput) passwordInput.value = '';
            if (authModal) authModal.style.display = 'flex';
            // Show a prominent success message
            showAuthMessage("Password reset successful! Please log in with your new password.", 'success');
            // Optionally, focus the password field for user convenience
            if (passwordInput) passwordInput.focus();
        });
    }

    // Check for existing login on page load and update UI accordingly
    currentUser = localStorage.getItem('loggedInUser');
    updateAuthUI(); // This will either show the modal or the main app
});
