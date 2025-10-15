// FiberBlooms Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();
    
    // Initialize floating petals
    initFloatingPetals();
    
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize FAQ accordions
    initFAQ();
    
    // Initialize scroll progress indicator
    initScrollProgress();
});

// Reveal animations on scroll
function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal-element');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const delay = element.dataset.delay || 0;
            
            if (elementTop < windowHeight - revealPoint) {
                setTimeout(() => {
                    element.classList.add('active');
                }, delay);
            }
        });
    }
    
    // Check on initial load
    checkReveal();
    
    // Check on scroll
    window.addEventListener('scroll', checkReveal);
}

// Create and animate floating petals
function initFloatingPetals() {
    const petalContainer = document.querySelector('.petal-container');
    const petalCount = 15;
    const petalTypes = ['petal-1', 'petal-2', 'petal-3'];
    
    for (let i = 0; i < petalCount; i++) {
        createPetal(petalContainer, petalTypes);
    }
}

function createPetal(container, types) {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.classList.add(types[Math.floor(Math.random() * types.length)]);
    
    // Random size between 20px and 60px
    const size = Math.random() * 40 + 20;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // Random starting position
    const startPositionX = Math.random() * 100;
    const startPositionY = Math.random() * -100;
    petal.style.left = `${startPositionX}%`;
    petal.style.top = `${startPositionY}px`;
    
    // Random rotation
    const rotation = Math.random() * 360;
    petal.style.transform = `rotate(${rotation}deg)`;
    
    // Random animation duration between 15s and 30s
    const animationDuration = Math.random() * 15 + 15;
    
    // Add to container
    container.appendChild(petal);
    
    // Animate the petal
    animatePetal(petal, animationDuration);
}

function animatePetal(petal, duration) {
    // Random horizontal movement
    const horizontalMovement = (Math.random() - 0.5) * 20;
    
    // Animate falling with some horizontal movement
    const keyframes = [
        { 
            top: petal.style.top, 
            left: petal.style.left,
            transform: petal.style.transform,
            opacity: 0
        },
        { 
            top: '50%', 
            left: `calc(${petal.style.left} + ${horizontalMovement}%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.6
        },
        { 
            top: '120%', 
            left: `calc(${petal.style.left} + ${horizontalMovement * 2}%)`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0
        }
    ];
    
    const timing = {
        duration: duration * 1000,
        iterations: 1,
        easing: 'ease-in-out'
    };
    
    // Start animation
    const animation = petal.animate(keyframes, timing);
    
    // When animation completes, reset the petal
    animation.onfinish = () => {
        // Remove the old petal
        petal.remove();
        
        // Create a new petal
        const petalTypes = ['petal-1', 'petal-2', 'petal-3'];
        createPetal(document.querySelector('.petal-container'), petalTypes);
    };
}

// Mobile menu functionality
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        
        if (menuClose) {
            menuClose.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        }
        
        // Close menu when clicking on a link
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
    }
}

// FAQ accordion functionality
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', () => {
                // Toggle current item
                item.classList.toggle('active');
                
                // Close other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
            });
        }
    });
}

// Scroll progress indicator
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.classList.add('scroll-progress');
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (windowScroll / windowHeight) * 100;
        
        progressBar.style.width = `${scrolled}%`;
    });
}

// Ajustare header la scroll (fără micșorarea logo-ului)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (window.scrollY > 50) {
        header.style.padding = '0.8rem 2rem';
    } else {
        header.style.padding = '1.5rem 2rem';
    }
});