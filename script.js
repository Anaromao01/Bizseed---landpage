const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const languageSelector = document.getElementById('language-selector');

// Language translations
const translations = {
    'pt-BR': {
        'hero-title': 'Transforme suas ideias em realidade',
        'hero-description': 'Construa o seu futuro com conhecimento e determinação.',
        'register-title': 'Crie sua conta',
        'register-description': 'Preencha os campos abaixo para se cadastrar na BizSeed.',
        'login-title': 'Login',
        'login-email': 'Digite seu email',
        'login-password': 'Digite sua senha',
        'login-button': 'Entrar',
        'register-button': 'Cadastrar',
        'terms-accept': 'Eu aceito os Termos e Condições',
    },
    'en': {
        'hero-title': 'Turn your ideas into reality',
        'hero-description': 'Build your future with knowledge and determination.',
        'register-title': 'Create your account',
        'register-description': 'Fill in the fields below to register at BizSeed.',
        'login-title': 'Login',
        'login-email': 'Enter your email',
        'login-password': 'Enter your password',
        'login-button': 'Log In',
        'register-button': 'Register',
        'terms-accept': 'I accept the Terms and Conditions',
    }
};

// Function to update text based on selected language
function updateText(language) {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        heroTitle.textContent = translations[language]['hero-title'];
    }
    
    const heroDescription = document.querySelector('.hero p');
    if (heroDescription) {
        heroDescription.textContent = translations[language]['hero-description'];
    }
    
    const registerTitle = document.querySelector('.register-box h1');
    if (registerTitle) {
        registerTitle.textContent = translations[language]['register-title'];
    }
    
    const registerDescription = document.querySelector('.register-box p');
    if (registerDescription) {
        registerDescription.textContent = translations[language]['register-description'];
    }
    
    const loginTitle = document.querySelector('.login-box h1');
    if (loginTitle) {
        loginTitle.textContent = translations[language]['login-title'];
    }
    
    const emailLabel = document.querySelector('label[for="email"]');
    if (emailLabel) {
        emailLabel.textContent = translations[language]['login-email'];
    }
    
    const passwordLabel = document.querySelector('label[for="password"]');
    if (passwordLabel) {
        passwordLabel.textContent = translations[language]['login-password'];
    }
    
    const loginButton = document.querySelector('.login-form button');
    if (loginButton) {
        loginButton.textContent = translations[language]['login-button'];
    }
    
    const registerButton = document.querySelector('.register-form button');
    if (registerButton) {
        registerButton.textContent = translations[language]['register-button'];
    }
    
    const termsLabel = document.querySelector('label[for="terms"]');
    if (termsLabel) {
        termsLabel.textContent = translations[language]['terms-accept'];
    }
}

// Event listener for language selection
languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateText(selectedLanguage);
});

// Initial text update
updateText('pt-BR'); // Default language

function togglePass() {
    var x = document.getElementById("login-form-password");
    var showIcon = document.getElementById("show-icon");
    var hideIcon = document.getElementById("hide-icon");
    if (x.type === "password") {
        x.type = "text";
        showIcon.style.display = "none";
        hideIcon.style.display = "block";
    } else {
        x.type = "password";
        showIcon.style.display = "block";
        hideIcon.style.display = "none";
    }
}
