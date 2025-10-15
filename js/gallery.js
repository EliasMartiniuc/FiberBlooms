// FiberBlooms Gallery JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize gallery filtering
    initGalleryFilter();
    
    // Initialize gallery item hover effects
    initGalleryHover();
});

// Gallery filtering functionality
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    if (filterButtons.length && galleryItems.length) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter gallery items
                galleryItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        
                        // Add animation
                        setTimeout(() => {
                            item.classList.add('active');
                        }, 100);
                    } else {
                        item.classList.remove('active');
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Gallery hover effects
function initGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            // Add hover class
            this.classList.add('hover');
        });
        
        item.addEventListener('mouseleave', function() {
            // Remove hover class
            this.classList.remove('hover');
        });
    });
}

// Gallery lightbox functionality (for future implementation)
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    // Create lightbox elements
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    
    const lightboxContent = document.createElement('div');
    lightboxContent.classList.add('lightbox-content');
    
    const lightboxImage = document.createElement('img');
    lightboxImage.classList.add('lightbox-image');
    
    const lightboxClose = document.createElement('span');
    lightboxClose.classList.add('lightbox-close');
    lightboxClose.innerHTML = '&times;';
    
    const lightboxCaption = document.createElement('div');
    lightboxCaption.classList.add('lightbox-caption');
    
    // Append elements
    lightboxContent.appendChild(lightboxImage);
    lightboxContent.appendChild(lightboxClose);
    lightboxContent.appendChild(lightboxCaption);
    lightbox.appendChild(lightboxContent);
    document.body.appendChild(lightbox);
    
    // Add click event to gallery items
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            // Get image source (for future implementation with real images)
            // const imgSrc = this.querySelector('img').getAttribute('src');
            const imgSrc = '#'; // Placeholder
            
            // Get caption
            const caption = this.querySelector('h3').textContent;
            
            // Set lightbox content
            lightboxImage.setAttribute('src', imgSrc);
            lightboxCaption.textContent = caption;
            
            // Show lightbox
            lightbox.style.display = 'flex';
            
            // Add animation
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
        });
    });
    
    // Close lightbox on click
    lightboxClose.addEventListener('click', function() {
        lightbox.classList.remove('active');
        
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    });
    
    // Close lightbox on outside click
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            
            setTimeout(() => {
                lightbox.style.display = 'none';
            }, 300);
        }
    });
}