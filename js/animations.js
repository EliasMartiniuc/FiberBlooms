// FiberBlooms Animations JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Page transition effect
    initPageTransitions();
    
    // Add bloom effect to specific elements
    addBloomEffect();
    addCartoonFlowers();
});

function addCartoonFlowers() {
    const container = document.querySelector('.petal-container');
    const flowerTypes = ['flower1.svg', 'flower2.svg', 'flower3.svg'];
    const flowerCount = 8;
    
    for (let i = 0; i < flowerCount; i++) {
        const flower = document.createElement('img');
        const randomFlower = flowerTypes[Math.floor(Math.random() * flowerTypes.length)];
        flower.src = 'images/' + randomFlower;
        flower.classList.add('cartoon-flower');
        
        // Poziționare aleatorie
        flower.style.left = Math.random() * 100 + 'vw';
        flower.style.top = Math.random() * 100 + 'vh';
        
        // Dimensiune aleatorie
        const size = 40 + Math.random() * 60;
        flower.style.width = size + 'px';
        flower.style.height = 'auto';
        
        // Întârziere aleatorie pentru animație
        flower.style.animationDelay = Math.random() * 5 + 's';
        flower.style.animationDuration = (10 + Math.random() * 15) + 's';
        
        container.appendChild(flower);
    }
}

// Page transition effects
function initPageTransitions() {
    // Create transition element
    const transitionElement = document.createElement('div');
    transitionElement.classList.add('page-transition-flower');
    document.body.appendChild(transitionElement);
    
    // Create petals for the flower transition
    for (let i = 0; i < 5; i++) {
        const petal = document.createElement('div');
        petal.classList.add('transition-petal');
        petal.style.transform = `rotate(${i * 72}deg)`;
        transitionElement.appendChild(petal);
    }
    
    // Handle internal link clicks
    document.querySelectorAll('a').forEach(link => {
        // Only apply to internal links
        if (link.href.includes(window.location.origin) && !link.getAttribute('target')) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's the current page
                if (href === window.location.pathname) return;
                
                e.preventDefault();
                
                // Trigger transition
                transitionElement.classList.add('active');
                
                // Add rotation animation - optimizat pentru performanță
                transitionElement.style.animation = 'rotateFlower 0.5s cubic-bezier(0.25, 0.1, 0.25, 1) forwards';
                
                // Navigate after transition - redus timpul pentru a elimina lag-ul
                setTimeout(() => {
                    window.location.href = href;
                }, 400);
            });
        }
    });
    
    // Hide transition on page load
    window.addEventListener('load', () => {
        transitionElement.classList.remove('active');
        transitionElement.style.animation = '';
    });
}

// Add bloom animation to specific elements
function addBloomEffect() {
    // Elements that should have bloom effect
    const bloomElements = [
        '.hero h1',
        '.feature-icon',
        '.social-links a',
        '.footer-logo img'
    ];
    
    // Apply bloom class to elements
    bloomElements.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            // Add bloom class with delay based on index
            setTimeout(() => {
                element.classList.add('bloom');
            }, index * 200);
        });
    });
}

// Parallax effect on scroll
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    
    // Apply parallax to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    }
    
    // Apply parallax to other elements
    document.querySelectorAll('.parallax').forEach(element => {
        const speed = element.dataset.speed || 0.2;
        element.style.transform = `translateY(${scrollPosition * speed}px)`;
    });
});

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add hover animations for gallery items
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.querySelector('.gallery-overlay').style.opacity = '1';
        this.querySelector('.gallery-overlay').style.transform = 'translateY(0)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.querySelector('.gallery-overlay').style.opacity = '0';
        this.querySelector('.gallery-overlay').style.transform = 'translateY(20px)';
    });
});