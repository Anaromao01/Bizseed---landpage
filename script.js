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
        // Add more translations as needed
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
        // Add more translations as needed
    }
};

// Function to update text based on selected language
function updateText(language) {
    document.querySelector('.hero h1').textContent = translations[language]['hero-title'];
    document.querySelector('.hero p').textContent = translations[language]['hero-description'];
    document.querySelector('.register-box h1').textContent = translations[language]['register-title'];
    document.querySelector('.register-box p').textContent = translations[language]['register-description'];
    document.querySelector('.login-box h1').textContent = translations[language]['login-title'];
    document.querySelector('label[for="email"]').textContent = translations[language]['login-email'];
    document.querySelector('label[for="password"]').textContent = translations[language]['login-password'];
    document.querySelector('.login-form button').textContent = translations[language]['login-button'];
    document.querySelector('.register-form button').textContent = translations[language]['register-button'];
    document.querySelector('label[for="terms"]').textContent = translations[language]['terms-accept'];
}

// Event listener for language selection
languageSelector.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    updateText(selectedLanguage);
});

// Initial text update
updateText('pt-BR'); // Default language
