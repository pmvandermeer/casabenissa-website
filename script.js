// Smooth scrolling voor navigatie links
document.addEventListener('DOMContentLoaded', function() {
    // Video autoplay forceren
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        heroVideo.play().catch(function(error) {
            console.log('Video autoplay failed:', error);
        });
    }
    
    // Smooth scrolling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if it's a cross-page link (contains #)
            if (href.includes('#') && !href.startsWith('#')) {
                // Let the browser handle cross-page navigation
                return;
            }
            
            // Handle same-page anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href;
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetSection.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Mobiele navigatie toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Haal form data op
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Simuleer form submission (in een echte app zou je hier een API call doen)
            console.log('Form submitted:', { name, email, message });
            
            // Toon success message
            showNotification('Bericht succesvol verzonden! We nemen zo snel mogelijk contact met u op.', 'success');
            
            // Reset form
            this.reset();
        });
    }

    // CTA button functionaliteit
    const ctaButton = document.querySelector('.cta-button');
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const locationSection = document.querySelector('#locatie');
            if (locationSection) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = locationSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Scroll effect voor header verwijderd om inline styles te voorkomen

    // Intersection Observer voor animaties
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observeer alle secties voor animaties
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        // Skip animatie voor page-content secties (omgeving pagina)
        if (section.classList.contains('page-content')) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });

    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Stat counters animatie
    const stats = document.querySelectorAll('.stat h3');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Counter animatie functie
function animateCounter(element) {
    const target = element.textContent;
    const isPercentage = target.includes('%');
    const isPlus = target.includes('+');
    
    let numericValue = parseInt(target.replace(/[^0-9]/g, ''));
    let currentValue = 0;
    const increment = numericValue / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
        }
        
        let displayValue = Math.floor(currentValue);
        if (isPercentage) {
            element.textContent = displayValue + '%';
        } else if (isPlus) {
            element.textContent = displayValue + '+';
        } else {
            element.textContent = displayValue;
        }
    }, stepTime);
}

// Notification systeem
function showNotification(message, type = 'info') {
    // Verwijder bestaande notificaties
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Maak nieuwe notificatie
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Voeg CSS toe
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    `;
    
    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    `;
    
    // Voeg toe aan DOM
    document.body.appendChild(notification);
    
    // Animeer in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close functionaliteit
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto close na 5 seconden
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 5000);
}

// Voeg CSS toe voor mobiele navigatie
const mobileNavCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            width: 100%;
            background: white;
            flex-direction: column;
            padding: 2rem;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
            transform: translateY(-100%);
            transition: transform 0.3s ease;
            z-index: 999;
        }
        
        .nav-menu.active {
            transform: translateY(0);
        }
        
        .hamburger.active span:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        .hamburger.active span:nth-child(2) {
            opacity: 0;
        }
        
        .hamburger.active span:nth-child(3) {
            transform: rotate(-45deg) translate(7px, -6px);
        }
    }
`;

// Voeg CSS toe aan head
const style = document.createElement('style');
style.textContent = mobileNavCSS;
document.head.appendChild(style); 