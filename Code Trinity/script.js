// --- BMSCE HERO SLIDER ---
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
    function nextSlide() {
        // Remove active class from current
        slides[currentSlide].classList.remove('active');
        // Increment index
        currentSlide = (currentSlide + 1) % slides.length;
        // Add active class to new slide
        slides[currentSlide].classList.add('active');
    }
    // Change slide every 5 seconds for better readability
    setInterval(nextSlide, 5000);
}

// --- BMSCE MULTI-LANGUAGE ENGINE ---
const translations = {
    "en": {
        "nav_home": "Home", 
        "nav_about": "About Us", 
        "nav_dept": "Departments ▾", 
        "nav_acad": "Academics ▾", 
        "nav_res": "Research ▾", 
        "nav_place": "Placements", 
        "nav_campus": "Campus Life", 
        "nav_contact": "Contact",
        "slider_title": "B.M.S. COLLEGE OF ENGINEERING", 
        "slider_sub": "First Private Sector Initiative in Engineering Education in India."
    },
    "kn": {
        "nav_home": "ಮುಖಪುಟ", 
        "nav_about": "ನಮ್ಮ ಬಗ್ಗೆ", 
        "nav_dept": "ವಿಭಾಗಗಳು ▾", 
        "nav_acad": "ಶೈಕ್ಷಣಿಕ ▾", 
        "nav_res": "ಸಂಶೋಧನೆ ▾", 
        "nav_place": "ಉದ್ಯೋಗಗಳು", 
        "nav_campus": "ಕ್ಯಾಂಪಸ್ ಜೀವನ", 
        "nav_contact": "ಸಂಪರ್ಕ",
        "slider_title": "ಬಿ.ಎಂ.ಎಸ್. ತಾಂತ್ರಿಕ ಮಹಾವಿದ್ಯಾಲಯ", 
        "slider_sub": "ಭಾರತದ ಎಂಜಿನಿಯರಿಂಗ್ ಶಿಕ್ಷಣದಲ್ಲಿ ಮೊದಲ ಖಾಸಗಿ ವಲಯದ ಉಪಕ್ರಮ."
    },
    "hi": {
        "nav_home": "होम", 
        "nav_about": "हमारे बारे में", 
        "nav_dept": "विभाग ▾", 
        "nav_acad": "अकादमिक ▾", 
        "nav_res": "अनुसंधान ▾", 
        "nav_place": "प्लेसमेंट", 
        "nav_campus": "कैंपस जीवन", 
        "nav_contact": "संपर्क",
        "slider_title": "बी.एम.एस. इंजीनियरिंग कॉलेज", 
        "slider_sub": "भारत में इंजीनियरिंग शिक्षा में पहली निजी क्षेत्र की पहल।"
    }
};

/**
 * Updates the text content of elements with [data-i18n] attributes
 * @param {string} lang - 'en', 'kn', or 'hi'
 */
function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // Apply a subtle fade effect when text changes
            el.style.opacity = 0;
            setTimeout(() => {
                el.innerText = translations[lang][key];
                el.style.opacity = 1;
            }, 200);
        }
    });

    // Save choice to browser storage
    localStorage.setItem('preferredLang', lang);
    
    // Update active state on language buttons if they exist
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active-lang', btn.getAttribute('onclick').includes(lang));
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('preferredLang') || 'en';
    setLanguage(savedLang);
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});